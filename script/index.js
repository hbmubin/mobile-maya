function getScreenSize() {
  const width = window.innerWidth;

  if (width < 768) {
    return 'sm';  
  } else {
    return 'lg';  
  }
}

let currentScreenSize = getScreenSize();

window.addEventListener('resize', () => {
  currentScreenSize = getScreenSize();
});


let compareProductList = localStorage.getItem("compare-product-list") || 0;
compareProductList = parseInt(compareProductList);





const links = document.querySelectorAll("nav .nav-ul li a");
links.forEach(link => {
  if (link.href === window.location.href) {
    link.style.color = "orange"; 
  }
});



// Responsive Navbar Dropdown
const responsiveDropdownBtns = document.querySelectorAll('.responsiveDropdownBtn');
const responsiveDropdownUls = document.querySelectorAll('.responsiveDropdownUl');

responsiveDropdownBtns.forEach((btn,index)=>{
  btn.addEventListener('click', () => {
    const icon = btn.querySelector('.responsiveDropdownIcons');
    const ul = responsiveDropdownUls[index]
    if (ul.style.height !== '0px' && ul.style.height !== '') {
      ul.style.height = '0px';
      icon.classList.remove('-rotate-90');
    } else {
      ul.style.height = `${ul.scrollHeight}px`;
      icon.classList.add('-rotate-90');
    }
  });
})




// Responsive Navbar 

const navOpenBtn = document.getElementById('navOpenBtn');
const navCloseBtn = document.getElementById('navCloseBtn');
const responsiveNav = document.getElementById('responsiveNav');
const overlay = document.getElementById('overlay');
const body = document.body


  navOpenBtn.addEventListener('click', () => {
    responsiveNav.classList.remove('-translate-x-[2000px]', 'opacity-0');
    responsiveNav.classList.add('translate-x-0');
    overlay.classList.remove('hidden');
    body.classList.add('overflow-hidden');

  });

  const closeNav= ()=>{
    responsiveNav.classList.remove('translate-x-0');
    responsiveNav.classList.add('-translate-x-[2000px]', 'opacity-0');
    overlay.classList.add('hidden');
    body.classList.remove('overflow-hidden');
  }

  navCloseBtn.addEventListener('click', closeNav);









// Login/SignUp Handler 
const LoginSigUpBtns = document.querySelectorAll(".loginSigUpBtn"); 
const LoginSigUp = document.getElementById("loginSigUp");
const loginSignUpToggle = document.getElementById("loginSignUpToggle")


let showed

const changeElementToSignUp=() => {
 document.querySelector(".loginSigUpTitle").textContent = 'Sign Up';
 document.querySelector(".loginSigUpFormTitle").textContent = 'Sign Up Using Email';
   document.querySelector(".loginForm").insertAdjacentHTML(
   'afterbegin', 
   `
   <div class="loginSigUpFormName">
     <input 
       name="name" 
       placeholder="Name" 
       class="border w-full rounded p-2 bg-bgGray shadow-inner" 
       type="text">
   </div>
   `
 );
 document.querySelector(".loginSigUpFormBtn").value = 'Sign Up';
 document.querySelector(".loginSignUpToggleText").textContent = 'Login';
 document.querySelector(".forgotLink").remove()
}




const changeElementToLogin=() => {
 document.querySelector(".loginSigUpTitle").textContent = 'Login';
 document.querySelector(".loginSigUpFormTitle").textContent = 'Login Using Email';
 document.querySelector(".loginSigUpFormName").remove()
 document.querySelector(".loginSigUpFormBtn").value = 'Login';
 document.querySelector(".loginSignUpToggleText").textContent = 'Sign Up';
 document.querySelector(".loginSigUpLinks").insertAdjacentHTML(
  'beforeend', 
  `
  <a href="./forgot-password.html" class="flex items-center gap-1 p-3 border-t forgotLink" href="#">
          <span class="text-blueText ">Forgot Password</span>
          <svg width="10" height="10" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="blue" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
        </a>
  `
);
}



const showLoginSigUp=()=>{
  closeNav();
  LoginSigUp.classList.remove('-translate-x-[2000px]', 'opacity-0');
  LoginSigUp.classList.add('translate-x-0');
  overlay.classList.remove('hidden');
  body.classList.add('overflow-hidden');
}



// Show login content
const showLogin = () => {
  if(showed!=="signup"){
    showed="login"
    showLoginSigUp()
  }
  else if(showed=="signup"){
    showed="login"
    changeElementToLogin()
    showLoginSigUp()
  }
};
// Show SignUp content
const showSignUp = () => {
  if(showed!=="signup"){
    showed="signup"
    changeElementToSignUp()
    showLoginSigUp()
  }
  else if(showed=="signup" || !showed){
    showed="signup"
    showLoginSigUp()
  }
};



LoginSigUpBtns.forEach((btn) => {
  btn.addEventListener('click', ()=>{
    let btnFor = btn.textContent.trim(" ")
   btnFor = btnFor.replaceAll(" ","")
   btnFor = btnFor.toLowerCase()
    if(btnFor=="login"){
      showLogin()
    }

    else if(btnFor=="signup"){
      showSignUp()
    }
  });
});


 

 // Toggle between Sign Up & Login
 loginSignUpToggle.addEventListener('click',()=>{
  let value = loginSignUpToggle.textContent.trim(" ")
   value = value.replaceAll(" ","")
   value = value.toLowerCase()
  if(value=="signup"){
    showed="signup"
    changeElementToSignUp()
  }
  else if(value=="login"){
    showed="login"
    changeElementToLogin()
  }
 } );







// Close modals on clicking outside
document.addEventListener('click', (event) => {
  if (
    LoginSigUp.classList.contains('translate-x-0') &&
    !LoginSigUp.contains(event.target) &&
    !Array.from(LoginSigUpBtns).some(btn => btn.contains(event.target)) 
  ) {
    LoginSigUp.classList.remove('translate-x-0');
    LoginSigUp.classList.add('-translate-x-[2000px]', 'opacity-0');
    overlay.classList.add('hidden');
    body.classList.remove('overflow-hidden');
  }
});










 

  
  
  
  






        //  Responsive Search
  const responsiveSearchBtn = document.getElementById('responsiveSearchBtn');
  const responsiveSearch = document.getElementById('responsiveSearch');
  const overlayFour = document.getElementById('overlayFour');

  responsiveSearchBtn.addEventListener('click', () => {
    const isVisible = responsiveSearch.classList.contains('scale-y-0');

    if (isVisible) {
        // responsiveSearchBtn.classList.add('bg-black');
        responsiveSearch.classList.remove('scale-y-0');
        responsiveSearch.classList.add('scale-y-100');
        overlayFour.classList.remove('hidden');
        responsiveSearchBtn.classList.add("bg-black")
        body.classList.add("overflow-hidden")
    } else {
        // responsiveSearchBtn.classList.remove('bg-black');
        responsiveSearch.classList.remove('scale-y-100');
        responsiveSearch.classList.add('scale-y-0');
        overlayFour.classList.add('hidden');
        responsiveSearchBtn.classList.remove("bg-black")
        body.classList.remove("overflow-hidden")
    }
  });
  overlayFour.addEventListener("click",()=>{
    responsiveSearch.classList.remove('scale-y-100');
    responsiveSearch.classList.add('scale-y-0');
    overlayFour.classList.add('hidden');
    responsiveSearchBtn.classList.remove("bg-black")
    body.classList.remove("overflow-hidden")
  })






//  Nav Search Input
const navSearchInput = document.getElementById('navSearchInput');
const navSearchContent = document.getElementById('navSearchContent');
const main = document.querySelector("main")
// const searchListItems = document.querySelectorAll("#navSearchContent > li");

// searchListItems.forEach((item, index) => {
//   if (index >= 5) {
//     item.style.display = "none";
//   }
// });


navSearchInput.addEventListener('input', function () {
  if (navSearchInput.value.trim() !== '') {
    navSearchContent.classList.remove("hidden")
  } else {
    navSearchContent.classList.add("hidden")
  }
});
main.addEventListener('click', function () {
  navSearchContent.classList.add("hidden")
});
        




// Collapse
const collapseIcons = document.querySelectorAll('.collapseIcon');
const collapseButtons = document.querySelectorAll('.collapseBtns');
const collapseContents = document.querySelectorAll('.collapseContent');

function setDefaultOpen() {
  if (collapseContents.length > 0 && collapseIcons.length > 0) {
    const firstCollapsible = collapseContents[0];
    const firstButton = collapseIcons[0];
    firstCollapsible.style.height = `${firstCollapsible.scrollHeight}px`;
    firstButton.classList.add('rotate-180');
  }
}

function initializeCollapsibles() {
  collapseContents.forEach(content => {
    content.style.height = '0px';
    content.style.overflow = 'hidden'; 
    content.style.transition = 'height 0.3s ease';
  });
}

if(getScreenSize=="sm"){
  initializeCollapsibles();
setDefaultOpen();
}

collapseButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const collapsible = collapseContents[index];

    if (collapsible.style.height !== '0px' && collapsible.style.height !== '') {
      collapsible.style.height = '0px';
      collapseIcons[index].classList.remove('rotate-180');
    } else {
      collapsible.style.height = `${collapsible.scrollHeight}px`;
      collapseIcons[index].classList.add('rotate-180');
    }
  });
});




  // Compare Modal
const openModalBtns = document.querySelectorAll('.openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const compareModalContent = document.getElementById('compareModalContent');
const comparisonTab = document.getElementById('comparisonTab');
const overlayTwo = document.getElementById('overlayTwo');


const addFistCompareProduct = () => {
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

  const newBtnBox = document.createElement("div");
  newBtnBox.className = "border addBtnBox border-bgGray flex-1 py-10";
  newBtnBox.innerHTML = `
    <button class="addToComparisonBtn flex flex-col justify-center items-center gap-3 h-full w-full text-center">
      <span class="flex w-full justify-center items-center">
        <img src="./assets/image/plusfill.svg" alt="compare-product">
      </span>
      <h2 class="text-center sm:text-base text-sm">
        Add Product
      </h2>
    </button>
  `;

  for (let i = 0; i < compareProductList; i++) {
    compareModalRow.insertBefore(newElement, compareModalRow.firstChild);
  }

  for (let i = 0; i < 3; i++) {
    compareModalRow.appendChild(newBtnBox.cloneNode(true)); 
  }
  showCompareBtn()
}



const selectCompare=(btn)=>{
   const ifBtn =btn.classList.contains("openCompareSelect")
   const ifProductDetails =btn.classList.contains("productDetailsCompare")
   if(ifBtn){
    if(btn.children[1]?.textContent=="Selected"){
    openCompareTab()
    currentSize()
    handleAddToComparisonBtn()
    return
    }
    if(compareProductList==4){
      alert("Compare list is full")
      return
    }
    if(compareProductList <4){
      compareProductList++;
    localStorage.setItem("compare-product-list", compareProductList);
    addFistCompareProduct()
    openCompareTab()
    currentSize()
    btn.innerHTML = `
    <span>
      <svg class="fill-current size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
    </span>
    <span>Selected</span>
    `;
    }
    
    
   }
   if(ifProductDetails){
    btn.innerHTML = `
    <span>
      <svg class="fill-current sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
    </span>
    <span class="sm:text-xl text-base ">Selected</span>
    `;
    if(compareProductList==0|| !compareProductList){
      compareProductList++;
    localStorage.setItem("compare-product-list", compareProductList);
    addFistCompareProduct()
    openCompareTab()
    currentSize()
    }
   }
   handleAddToComparisonBtn()
} 





const unSelectCompare = (elementIndex) => {
  const openModalBtns = document.querySelectorAll('.openModalBtn');
  let selectedButtons = [];
  
  openModalBtns.forEach((btn) => {
    const ifProductDetails = btn.classList.contains("productDetailsTop");
    if(ifProductDetails){
      btn.innerHTML = `
       <svg class="fill-current sm:w-5 sm:h-5 w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
          <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z" />
      </svg>
      <span class="sm:text-xl text-base ">Compare</span>
      `;
    }
    if (btn.children[1]?.textContent.trim() === "Selected" && !ifProductDetails) {
      selectedButtons.push(btn);
    }
  });
  if (selectedButtons[elementIndex]) {
    selectedButtons[elementIndex].innerHTML = `
        <span>
          <svg class="fill-current size-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="#5a5759"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z"/></svg>
        </span>
        <span>Compare</span>
      `;
  }

  selectedButtons=[]
};




document.addEventListener("DOMContentLoaded",()=>{
const openModalBtns = document.querySelectorAll('.openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
  openModalBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      let compareProductList = localStorage.getItem("compare-product-list") || 0;
      selectCompare(btn)
    compareModalContent.classList.remove('translate-y-full', 'opacity-0');
    compareModalContent.classList.add('translate-y-0', 'opacity-1');
    overlayTwo.classList.remove("hidden")
    compareProductList = localStorage.getItem("compare-product-list") || 0;
    });
  });
  
  
  closeModalBtn.addEventListener('click', ()=>{
    compareModalContent.classList.remove('translate-y-0', 'opacity-1');
    compareModalContent.classList.add('translate-y-full', 'opacity-0');
    overlayTwo.classList.add("hidden")
  });
})




  // Comparison Popup
const addToComparisonBtn = document.querySelectorAll('.addToComparisonBtn');
const closeComparisonPopupBtn = document.querySelectorAll('.closeComparisonPopupBtn');
const comparisonSearchPopupContent = document.getElementById('comparisonSearchPopupContent');
const overlayThree = document.getElementById('overlayThree');

const handleAddToComparisonBtn=()=>{
  const addToComparisonBtns = document.querySelectorAll('.addToComparisonBtn');
  addToComparisonBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
    comparisonSearchPopupContent.classList.remove('translate-y-full', 'opacity-0');
    comparisonSearchPopupContent.classList.add('translate-y-0', 'opacity-1');
    overlayThree.classList.remove("hidden")
    body.classList.add("overflow-hidden")
    });
  });
}
handleAddToComparisonBtn()

closeComparisonPopupBtn.forEach(btn=>{
  btn.addEventListener('click', ()=>{
    comparisonSearchPopupContent.classList.remove('translate-y-0', 'opacity-1');
    comparisonSearchPopupContent.classList.add('translate-y-full', 'opacity-0');
    overlayThree.classList.add("hidden")
    body.classList.remove("overflow-hidden")
  });
})





//  Compare Modal Search Input
const compareModalSearchInput = document.getElementById('compareModalSearchInput');
const compareModalSearchContent = document.getElementById('compareModalSearchContent');
const compareModalListItems = document.querySelectorAll("#compareModalSearchContent > li");

compareModalListItems.forEach((item, index) => {
  if (index >= 10) {
    item.style.display = "none";
  }
});

compareModalSearchInput.addEventListener('input', function () {
  if (compareModalSearchInput.value.trim() !== '') {
    compareModalSearchContent.classList.remove("hidden")
  } else {
    compareModalSearchContent.classList.add("hidden")
  }
});





// Search Tabs
const searchTabBtns = document.querySelectorAll('.searchTabBtn');
const mobileContent = document.getElementById('mobileContent');
const tabletContent = document.getElementById('tabletContent');
const laptopContent = document.getElementById('laptopContent');

const removeActiveClasses = () => {
  searchTabBtns.forEach((btn) => {
    btn.classList.remove('active');
    btn.classList.add('non-active');
  });
};

searchTabBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    removeActiveClasses();

    const buttonValue = btn.value;

    btn.classList.remove('non-active');
    btn.classList.add('active');

    if (buttonValue === 'Mobile') {
      mobileContent.classList.remove('hidden');
      tabletContent.classList.add('hidden');
      laptopContent.classList.add('hidden');
    } 
    else if (buttonValue === 'Tablet') {
      mobileContent.classList.add('hidden');
      tabletContent.classList.remove('hidden');
      laptopContent.classList.add('hidden');
    } 
    else if (buttonValue === 'Laptop') {
      mobileContent.classList.add('hidden');
      tabletContent.classList.add('hidden');
      laptopContent.classList.remove('hidden');
    }
  });
});





const header = document.querySelector("header");

let lastScroll = 0;

window.addEventListener("scroll", () => {
	const currentScroll = window.scrollY;
	if (currentScroll <= 100) {
		return;
	}

	if (currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
		header.classList.add("scroll-down");
	} else if (
		currentScroll < lastScroll &&
		header.classList.contains("scroll-down")
	) {
		header.classList.remove("scroll-down");
	}
	lastScroll = currentScroll;
});




const notificationBtns= document.querySelectorAll(".notification-btn")
const notificationContents= document.querySelectorAll(".notificationContent")

notificationBtns.forEach((btn,index)=>{
  btn.addEventListener("click", ()=>{
    const content= notificationContents[index]
    const isVisible =content.classList.contains("hidden")
    if(isVisible){
      content.classList.remove("hidden")
    }
    else{
      content.classList.add("hidden")
    }
  })
})




