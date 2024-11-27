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








// Responsive Navbar Dropdown
const responsiveDropdownBtn = document.getElementById('responsiveDropdownBtn');
const responsiveDropdownUl = document.getElementById('responsiveDropdownUl');

  responsiveDropdownBtn.addEventListener('click', () => {
    const isVisible = responsiveDropdownUl.classList.contains('hidden');

    if (isVisible) {
      responsiveDropdownUl.classList.remove('hidden');
      responsiveDropdownBtn.classList.add('-rotate-90');
    } else {
      responsiveDropdownUl.classList.add('hidden');
      responsiveDropdownBtn.classList.remove('-rotate-90');
    }
  });




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
  // Close login modal if clicking outside
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
const main = document.getElementById("main")
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
const collapseButtons = document.querySelectorAll('.collapseBtn');
const collapseContents = document.querySelectorAll('.collapseContent');

function setDefaultOpen() {
  if (collapseContents.length > 0 && collapseButtons.length > 0) {
    const firstCollapsible = collapseContents[0];
    const firstButton = collapseButtons[0];

    firstCollapsible.style.height = `${firstCollapsible.scrollHeight}px`;
    firstButton.classList.add('rotate-180');

  }
}


setDefaultOpen();

collapseButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const collapsible = collapseContents[index];

    if (collapsible.style.height !== '0px') {
      collapsible.style.height = '0px';
      button.classList.remove('rotate-180');
    } else {
      
      collapsible.style.height = `${collapsible.scrollHeight}px`;
      button.classList.add('rotate-180');
    }
  });
});



  // Compare Modal
const openModalBtns = document.querySelectorAll('.openModalBtn');
const closeModalBtn = document.getElementById('closeModalBtn');
const compareModalContent = document.getElementById('compareModalContent');
const comparisonTab = document.getElementById('comparisonTab');
const overlayTwo = document.getElementById('overlayTwo');

openModalBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
  compareModalContent.classList.remove('translate-y-full', 'opacity-0');
  compareModalContent.classList.add('translate-y-0', 'opacity-1');
  overlayTwo.classList.remove("hidden")
  comparisonTab.classList.remove("hidden")
  comparisonTab.classList.add("flex")
  
  });
});

closeModalBtn.addEventListener('click', ()=>{
  compareModalContent.classList.remove('translate-y-0', 'opacity-1');
  compareModalContent.classList.add('translate-y-full', 'opacity-0');
  overlayTwo.classList.add("hidden")
    
});




  // Comparison Popup
const addToComparisonBtn = document.querySelectorAll('.addToComparisonBtn');
const closeComparisonPopupBtn = document.getElementById('closeComparisonPopupBtn');
const comparisonSearchPopupContent = document.getElementById('comparisonSearchPopupContent');
const overlayThree = document.getElementById('overlayThree');

addToComparisonBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
  comparisonSearchPopupContent.classList.remove('translate-y-full', 'opacity-0');
  comparisonSearchPopupContent.classList.add('translate-y-0', 'opacity-1');
  overlayThree.classList.remove("hidden")
  body.classList.add("overflow-hidden")
  
  });
});

closeComparisonPopupBtn.addEventListener('click', ()=>{
  comparisonSearchPopupContent.classList.remove('translate-y-0', 'opacity-1');
  comparisonSearchPopupContent.classList.add('translate-y-full', 'opacity-0');
  overlayThree.classList.add("hidden")
  body.classList.remove("overflow-hidden")
    
});




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

//  remove active class from all buttons
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





  