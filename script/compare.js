const modalCompareNow = document.getElementById("modalCompareNow");
const compareModalRow = document.getElementById("compareModalRow");






//  show or hide the "Compare Now" button
const showCompareBtn = () => {
  const modalAddedProduct = compareModalRow.querySelectorAll(".modalAddedProduct");
  const addToComparisonBtnBottom = document.getElementById("addToComparisonBtnBottom");

  compareProductList = modalAddedProduct.length; 

  localStorage.setItem("compare-product-list", compareProductList);

  if(compareProductList==4){
    addToComparisonBtnBottom.classList.add("hidden")
  }
  else{
    addToComparisonBtnBottom.classList.remove("hidden")
  }
  if (compareProductList > 1) {
    modalCompareNow.classList.remove("hidden");
  } else {
    modalCompareNow.classList.add("hidden");
  }

  while (compareModalRow.children.length > 4) {
    compareModalRow.lastChild.remove();
  }
};

// `addBtnBox` visibility based on screen size
const currentSize = () => {
    const addBtnBoxes = document.querySelectorAll(".addBtnBox");
    
    
    if (getScreenSize() === "sm") {
      addBtnBoxes.forEach((box, index) => {
        box.classList.add("hidden");
        if(compareProductList==0){
            addBtnBoxes[0].classList.remove("hidden");  
            addBtnBoxes[1].classList.remove("hidden");  
        }
        if (compareProductList == 1) {
            addBtnBoxes[0].classList.remove("hidden"); 
        }
         
      });
    } else {
      addBtnBoxes.forEach((box) => {
        box.classList.remove("hidden");
      });
    }
  };
  
  window.addEventListener("resize", () => {
    currentSize();
  });
  
  currentSize();

  addEventListener("DOMContentLoaded", (event) => {
   currentSize()
  });

// handle "Add Product" actions
const handleAddProduct = (target) => {
  const newElement = document.createElement("div");
  newElement.className = "border modalAddedProduct flex-1";
  newElement.innerHTML = `
    <div class="w-full relative my-1 group px-1">
      <div class="absolute top-0 left-1 flex py-[1px] px-2 bg-teal-50 bg-opacity-50 rounded-full items-center gap-1">
          <span class="text-xs sm:text-base">4.5</span>
          <span class="text-teal-600 text-xs"><img src="./assets/image/starsolidteal.svg" alt="star"></span>
        </div>
        <div class="absolute top-0 left-1 sm:flex hidden py-[1px] px-2 bg-teal-50 bg-opacity-50 rounded-full items-center gap-1 z-10">
          <span class="text-xs sm:text-base">4.5</span>
          <span class="text-teal-600 text-xs"><img src="./assets/image/starsolidteal.svg" alt="star"></span>
        </div>
        <button class="closeModalProduct absolute close-btn z-20">
          <svg class="fill-current text-bgText hover:text-black w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2.4" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
          </svg>
        </button>
        <div class="w-full flex justify-center">
          <div class="compare-img-div z-10">
            <img class="h-full max-w-max group-hover:scale-110 duration-300" src="./assets/image/3X4v.jpg" alt="mobile">
          </div>
        </div>
        <div>
          <h2 class="font-oswald sm:font-medium text-center text-sm mb-2">
            Apple iPhone 15
          </h2>
          <h2 class="text-center text-blueText font-normal text-xs mb-1">
            ৳. 100,999
            <span class="text-orange-500 font-normal">(Official)</span>
          </h2>
        </div>
      </div>
  `;

  const remainingAddBtnBoxes = compareModalRow.querySelectorAll(".addBtnBox");
  if (remainingAddBtnBoxes.length > 0) {
    remainingAddBtnBoxes[0].parentNode.insertBefore(newElement, remainingAddBtnBoxes[0]);
  } 
  showCompareBtn();
  currentSize()
  
};

// handle "close" button clicks
const handleCloseProduct = (closeBtn) => {
  const parentTd = closeBtn.closest(".modalAddedProduct");
  parentTd.remove();
  const newElement = document.createElement("button");
  newElement.className = "addToComparisonBtn addBtnBox flex flex-col justify-center items-center gap-3 h-full flex-1 text-center xs:py-16 py-12 ";
  newElement.innerHTML = `
    <span class="flex w-full justify-center items-center">
        <img src="./assets/image/plusfill.svg" alt="compare-product">
    </span>
    <h2 class="text-center sm:text-base text-sm">
        Add Product
    </h2>
  `;
  compareModalRow.appendChild(newElement);

  showCompareBtn();
  
};

//Handle clicks dynamically for all relevant elements
document.addEventListener("click", (event) => {
  // Handle clicks on "Add Product" items inside the modal
  if (event.target.closest(".modalProductItem")) {
    handleAddProduct(event.target.closest(".modalProductItem"));
    currentSize();
  }

  // Handle clicks on "Close Product" buttons
  if (event.target.closest(".closeModalProduct")) {
    handleCloseProduct(event.target.closest(".closeModalProduct"));
    handleAddToComparisonBtn()
    currentSize()
  }

  // Handle clicks on newly added `addBtnBox` buttons
  if (event.target.closest(".addToComparisonBtn")) {
    const addBtn = event.target.closest(".addToComparisonBtn");
  }
});

showCompareBtn();


const viewAllCompetitor = document.querySelectorAll(".view-all-competitor");
const competitorsContainer = document.querySelectorAll(".competitors-container");

viewAllCompetitor.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        competitorsContainer[index].classList.add("show-all");

        btn.remove();
    });
});