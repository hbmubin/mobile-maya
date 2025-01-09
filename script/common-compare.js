const modalCompareNow = document.getElementById("modalCompareNow");
const compareModalRow = document.getElementById("compareModalRow");




const openCompareTab=()=>{
  const compareTabValue = document.getElementById("compareTabValue");
  let compareProductList = localStorage.getItem("compare-product-list") || 0;
  compareProductList = parseInt(compareProductList);
  if(compareProductList>0){
    comparisonTab.classList.remove("hidden")
    comparisonTab.classList.add("flex")
    compareTabValue.textContent=compareProductList
  }
  else{
    comparisonTab.classList.remove("flex")
    comparisonTab.classList.add("hidden")
    compareTabValue.textContent=0
  }
}

openCompareTab()


// Function to show or hide the "Compare Now" button
const showCompareBtn = () => {
  const modalAddedProduct = compareModalRow.querySelectorAll(".modalAddedProduct");
  const addToComparisonBtnBottom = document.getElementById("addToComparisonBtnBottom");

  compareProductList = modalAddedProduct.length; // Update the product count

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


// Function to adjust `addBtnBox` visibility based on screen size
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

//  "Add Product" actions
const handleAddProduct = (target) => {
  const newElement = document.createElement("div");
  newElement.className = "border modalAddedProduct border-bgGray flex-1";
  newElement.innerHTML = `
    <div class="w-full flex-grow relative mt-1 pb-3 group px-1">
      <div class="absolute top-0 left-1 sm:flex hidden py-[1px] px-2 bg-teal-50 bg-opacity-50 rounded-full items-center gap-1 z-10">
        <span class="text-xs sm:text-base">4.5</span>
        <span class="text-teal-600 text-xs"><img src="./assets/image/starsolidteal.svg" alt="star"></span>
      </div>
      <button class="closeModalProduct absolute top-0 right-1 cursor-pointer z-[9999]">
        <svg class="fill-current text-bgText hover:text-black w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2.4" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="w-full flex justify-center">
        <div class="sm:h-28 h-20 flex product-card-img relative justify-center pb-2 pt-4 overflow-hidden w-full">
          <img class="h-full max-w-max group-hover:scale-110 duration-300" src="./assets/image/3X4v.jpg" alt="mobile" />
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
  openCompareTab()
};

// "close" button clicks
const handleCloseProduct = (closeBtn) => {
    const closeModalElements = Array.from(document.querySelectorAll(".closeModalProduct"));
    const elementIndex = closeModalElements.indexOf(closeBtn);
  unSelectCompare(elementIndex)
  const parentTd = closeBtn.closest(".modalAddedProduct");
  parentTd.remove();
  const newElement = document.createElement("div");
  newElement.className = "border addBtnBox border-bgGray flex-1 py-10";
  newElement.innerHTML = `
    <button class="addToComparisonBtn flex flex-col justify-center items-center gap-3 h-full w-full text-center">
      <span class="flex w-full justify-center items-center">
        <img src="./assets/image/plusfill.svg" alt="compare-product">
      </span>
      <h2 class="text-center sm:text-base text-sm">
        Add Product
      </h2>
    </button>
  `;
  compareModalRow.appendChild(newElement);

  showCompareBtn();
  openCompareTab()
};

  document.addEventListener("click", (event) => {
    if (event.target.closest(".modalProductItem")) {
      handleAddProduct(event.target.closest(".modalProductItem"));
      currentSize()
    }
  
    if (event.target.closest(".closeModalProduct")) {
      const closeModalElement = event.target.closest(".closeModalProduct");
  
  
      handleCloseProduct(closeModalElement);
      handleAddToComparisonBtn();
      currentSize();
  }
  
  
    if (event.target.closest(".addToComparisonBtn")) {
      const addBtn = event.target.closest(".addToComparisonBtn");
    }
  });
showCompareBtn();

