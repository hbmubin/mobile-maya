const productCardContainer = document.getElementById("productCardContainer");
const productLimit = document.getElementById("productLimit");
const sortBy = document.getElementById("sortBy");
const productCards = Array.from(document.querySelectorAll("#productCardContainer .product-card"));
let product_per_page = 20;
let page_number = 1;
const total_products = productCards.length;
let total_pages = Math.ceil(total_products / product_per_page);


document.addEventListener("DOMContentLoaded",()=>{
  if(productCards.length<21){
      const cardFooter = document.getElementById("cardFooter")
      cardFooter.classList.toggle("hidden")
  }
})

// Function to extract price from a product card
const getPrice = (productCard) => {
  const priceText = productCard.querySelector("h2.text-blueText").textContent.trim();
  return parseFloat(priceText.replace(/[৳,.]/g, ""));
};

// Function to display products
const displayProducts = (products = productCards) => {
  let start_index = (page_number - 1) * product_per_page;
  let end_index = start_index + product_per_page - 1;

  if (end_index >= total_products) {
    end_index = total_products - 1;
  }

  let statement = "";
  for (let i = start_index; i <= end_index; i++) {
    if (products[i]) {
      statement += `<div class="card product-card relative group duration-300 pt-1 flex flex-col">${products[i].innerHTML}</div>`;
    }
  }

  productCardContainer.innerHTML = statement;

  document.querySelectorAll(".pagination-btn").forEach((btn) => {
    btn.classList.remove("list-pagination-active");
  });

  const activePage = document.getElementById(`page${page_number}`);
  if (activePage) activePage.classList.add("list-pagination-active");

  // Hide or show navigation buttons
  document.getElementById("prevBtn").classList.toggle("hidden", page_number === 1);
  document.getElementById("nextBtn").classList.toggle("hidden", page_number === total_pages);

  // Update showing details
  document.getElementById("showingDetails").textContent = `Showing ${start_index + 1} to ${Math.min(
    end_index + 1,
    total_products
  )} of ${total_products} results`;
  
};




const generatePagination = () => {
    const prevBtn = `<li id="prevBtn" onclick="prevBtn()" class="flex justify-center items-center">
      <svg fill="#737373" height="12px" width="12px" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s-12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
    </li>`;
  
    const nextBtn = `<li id="nextBtn" onclick="nextBtn()" class="flex justify-center items-center">
      <svg fill="#737373" height="12px" width="12px" viewBox="0 0 320 512"><path d="M278.6 233.4c-12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
    </li>`;
  
    let buttonsArray = [];
    const leftRange = Math.max(page_number - 2, 3); 
    const rightRange = Math.min(page_number + 2, total_pages - 2); 
  
    buttonsArray.push(
      `<li id="page1" onclick="page(1)" class="pagination-btn ${page_number === 1 ? "list-pagination-active" : ""}">1</li>`
    );
    buttonsArray.push(
      `<li id="page2" onclick="page(2)" class="pagination-btn ${page_number === 2 ? "list-pagination-active" : ""}">2</li>`
    );
  
    if (leftRange > 3) {
      buttonsArray.push('<li class="ellipsis">...</li>');
    }
  
    for (let i = leftRange; i <= rightRange; i++) {
      buttonsArray.push(
        `<li id="page${i}" onclick="page(${i})" class="pagination-btn ${page_number === i ? "list-pagination-active" : ""}">${i}</li>`
      );
    }
  
    if (rightRange < total_pages - 2) {
      buttonsArray.push('<li class="ellipsis">...</li>');
    }
  
    buttonsArray.push(
      `<li id="page${total_pages - 1}" onclick="page(${total_pages - 1})" class="pagination-btn ${
        page_number === total_pages - 1 ? "list-pagination-active" : ""
      }">${total_pages - 1}</li>`
    );
    buttonsArray.push(
      `<li id="page${total_pages}" onclick="page(${total_pages})" class="pagination-btn ${
        page_number === total_pages ? "list-pagination-active" : ""
      }">${total_pages}</li>`
    );
  
    // Combine everything
    document.getElementById("listPagination").innerHTML = `${prevBtn} ${buttonsArray.join(
      ""
    )} ${nextBtn}`;
  };
  


  const scrollToProductCardContainer = () => {
    const productCardContainer = document.getElementById("productCardContainer");
    const offsetPosition = productCardContainer.offsetTop - 300; // 200 pixels above the container
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };


// Pagination functions
const prevBtn = () => {
  page_number--;
  generatePagination()
  displayProducts();
  scrollToProductCardContainer()
};
const nextBtn = () => {
  page_number++;
  generatePagination()
  displayProducts();
  scrollToProductCardContainer()
};
const page = (index) => {
  page_number = parseInt(index);
  generatePagination()
  displayProducts();
  scrollToProductCardContainer()
};

// Event Listener for Items Per Page
productLimit.addEventListener("change", () => {
  product_per_page = parseInt(productLimit.value);
  total_pages = Math.ceil(total_products / product_per_page);
  page_number = 1;
  generatePagination();
  displayProducts();
});

// Event Listener for Sorting
sortBy.addEventListener("change", () => {
  const sortValue = sortBy.value;

  let sortedProducts = [...productCards];
  if (sortValue === "low to high") {
    sortedProducts.sort((a, b) => getPrice(a) - getPrice(b));
  } else if (sortValue === "high to low") {
    sortedProducts.sort((a, b) => getPrice(b) - getPrice(a));
  }

  page_number = 1;
  generatePagination();
  displayProducts(sortedProducts);
});

generatePagination();
displayProducts();


const toggleAsideSearch=()=>{
const listAsideSearch= document.querySelectorAll(".list-aside-search")
const listAsideContent= document.querySelectorAll(".list-aside-content")
listAsideContent.forEach((content, index) => {
    if (content.children.length < 7) {
      listAsideSearch[index].classList.toggle("hidden");
    }
  });
}

toggleAsideSearch()


const showInitialProducts = () => {
    const productCards = document.querySelectorAll("#productCardContainer .product-card");
    const cardFooter = document.getElementById("cardFooter");

    productCards.forEach((product, index) => {
        if (index > 11) {
            product.classList.add("hidden"); // Show first 12 products
        }
    });

    if (cardFooter) {
        cardFooter.classList.add("hidden"); // Show footer initially
    }
};

const showAllProducts = () => {
    const productCards = document.querySelectorAll("#productCardContainer .product-card");
    const cardFooter = document.getElementById("cardFooter");
    const loader = document.getElementById("loader");

    productCards.forEach(product => {
        product.classList.remove("hidden"); // Show all products
    });

    if (cardFooter) {
        cardFooter.classList.remove("hidden"); // Ensure footer is visible
    }
    if (loader) {
        loader.classList.add("hidden"); // Ensure footer is visible
    }
};

const handleScroll = () => {
    const productCardContainer = document.getElementById("productCardContainer");

    if (!productCardContainer) return; 

    const containerBottom = productCardContainer.getBoundingClientRect().bottom;

    if (containerBottom <= window.innerHeight -100) { 
        setTimeout(() => {
            showAllProducts();
        window.removeEventListener("scroll", handleScroll); 
        }, 500);
    }
};

window.addEventListener("scroll", handleScroll);

showInitialProducts()






// Responsive Navbar 

const listAsideOpen = document.getElementById('listAsideOpen');
const listAsideClose = document.querySelectorAll('.listAsideClose');
const listAside = document.getElementById('listAside');


  listAsideOpen.addEventListener('click', () => {
    console.log("open")
    listAside.classList.remove('translate-x-[2000px]', 'opacity-0');
    listAside.classList.add('translate-x-0');
    overlay.classList.remove('hidden');
    body.classList.add('overflow-hidden');

  });

  const closeAside= ()=>{
    console.log("open")
    listAside.classList.remove('translate-x-0');
    listAside.classList.add('translate-x-[2000px]', 'opacity-0');
    overlay.classList.add('hidden');
    body.classList.remove('overflow-hidden');
  }

  listAsideClose.forEach(btn=>{
    btn.addEventListener('click', closeAside);
  })



