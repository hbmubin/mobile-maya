const productCardContainer = document.getElementById("productCardContainer");
const productCards = Array.from(document.querySelectorAll("#productCardContainer .product-card"));
let product_per_page = 21;
let page_number = 1;
const total_products = productCards.length;
let total_pages = Math.ceil(total_products / product_per_page);

document.addEventListener("DOMContentLoaded",()=>{
    if(productCards.length<22){
        const cardFooter = document.getElementById("cardFooter")
        cardFooter.classList.toggle("hidden")
    }
})

const displayProducts = (products = productCards) => {
  let start_index = (page_number - 1) * product_per_page;
  let end_index = start_index + product_per_page - 1;

  if (end_index >= total_products) {
    end_index = total_products - 1;
  }

  let statement = "";
  for (let i = start_index; i <= end_index; i++) {
    if (products[i]) {
      statement += `<a href="./review.html" class="product-card bg-white group card rounded-b-md overflow-hidden">${products[i].innerHTML}</a>`;
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
      <svg fill="#737373" height="12px" width="12px" viewBox="0 0 320 512"><path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
    </li>`;
  
    const nextBtn = `<li id="nextBtn" onclick="nextBtn()" class="flex justify-center items-center">
      <svg fill="#737373" height="12px" width="12px" viewBox="0 0 320 512"><path d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"/></svg>
    </li>`;
  
    let buttonsArray = [];
  
    for (let i = 1; i <= total_pages; i++) {
      buttonsArray.push(
        `<li id="page${i}" onclick="page(${i})" class="pagination-btn ${
          page_number === i ? "list-pagination-active" : ""
        }">${i}</li>`
      );
    }
  
    // Combine everything
    document.getElementById("listPagination").innerHTML = `${prevBtn} ${buttonsArray.join(
      ""
    )} ${nextBtn}`;
  };
  
  

  const scrollToProductCardContainer = () => {
    const productCardContainer = document.getElementById("productCardContainer");
    const offsetPosition = productCardContainer.offsetTop - 200; // 200 pixels above the container
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };


// Pagination functions
const prevBtn = () => {
    page_number--;
    generatePagination();
    displayProducts();
    scrollToProductCardContainer()
  };
  
  const nextBtn = () => {
    page_number++;
    generatePagination();
    displayProducts();
    scrollToProductCardContainer()
  };
  
  const page = (index) => {
    page_number = parseInt(index);
    generatePagination();
    displayProducts();
    scrollToProductCardContainer()
  };


generatePagination();
displayProducts();




