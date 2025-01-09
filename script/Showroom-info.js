    //  Product Details Collapse
const productDetailsCollapseBtn = document.getElementById("productDetailsCollapseBtn")
const productDetailsCollapseContent = document.getElementById("productDetailsCollapseContent")

let isProductDetailsCollapseBtnClick=false

productDetailsCollapseBtn.addEventListener("click",()=>{
  if(!isProductDetailsCollapseBtnClick){  
    productDetailsCollapseContent.classList.remove("h-32"),
    productDetailsCollapseBtn.textContent="See less"
    isProductDetailsCollapseBtnClick=true
  }
  else{
    productDetailsCollapseContent.classList.add("h-32"),
    productDetailsCollapseBtn.textContent="See more",
    isProductDetailsCollapseBtnClick=false
  }
  
})





// productDetailsCollapseBtns
const collapsibles = document.querySelectorAll('.collapsible-content');
const openClose = document.querySelectorAll('.open-close');

function setDefaultOpen() {
  if (collapsibles.length > 0 && openClose.length > 0) {
    const firstCollapsible = collapsibles[0];
    const firstButton = openClose[0];

    firstCollapsible.style.height = `${firstCollapsible.scrollHeight}px`;
    
    firstButton.classList.remove('plus');
    firstButton.classList.add('cross');
  }
}


setDefaultOpen();

openClose.forEach((button, index) => {
  button.addEventListener('click', () => {
    const collapsible = collapsibles[index];

    if (collapsible.style.height !== '0px') {
      collapsible.style.height = '0px';
      button.classList.remove('cross');
      button.classList.add('plus');
    } else {
      
      collapsible.style.height = `${collapsible.scrollHeight}px`;
      button.classList.remove('plus');
      button.classList.add('cross');
    }
  });
});






//   Report Toggle
const reportBtns = document.querySelectorAll(".report-btn");
const reportContents = document.querySelectorAll(".report-content");

const closeAllContents = () => {
  reportContents.forEach((content) => {
    content.classList.add("opacity-0", "-z-30");
    content.classList.remove("z-10");
  });
};

reportBtns.forEach((button, index) => {
  button.addEventListener("click", (event) => {
    event.stopPropagation();

    const content = reportContents[index];
    const isVisible = content.classList.contains('opacity-0');

    closeAllContents(); 

    if (isVisible) {
      content.classList.remove("opacity-0", "-z-30");
      content.classList.add("z-10");
    } else {
      content.classList.add("opacity-0", "-z-30");
      content.classList.remove("z-10");
    }
  });
});

document.addEventListener("click", (event) => {
  const clickedInside = [...reportBtns, ...reportContents].some((element) =>
    element.contains(event.target)
  );

  if (!clickedInside) {
    closeAllContents(); 
  }
});




//   Form Rating
let stars = 
    document.getElementsByClassName("star");
let output = 
    document.getElementById("output");
 
function gfg(n) {
    remove();
    for (let i = 0; i < n; i++) {
        if (n == 1) cls = "one";
        else if (n == 2) cls = "two";
        else if (n == 3) cls = "three";
        else if (n == 4) cls = "four";
        else if (n == 5) cls = "five";
        stars[i].className = "star " + cls;
    }
    output.innerText = "Rating is: " + n + "/5";
}
 
function remove() {
    let i = 0;
    while (i < 5) {
        stars[i].className = "star";
        i++;
    }
}




//  Reply Form
const replyBtns= document.querySelectorAll(".reply-btn")
const replyForms= document.querySelectorAll(".reply-form")
 

replyBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      replyForms[index].classList.toggle("hidden");
    });
  });

  


  //  reportPopup
const reportPopup= document.getElementById("reportPopup")

const reportSpam=()=>{
  reportPopup.classList.remove("hidden")
  reportPopup.classList.add("fixed")

  setTimeout(()=>{
      reportPopup.classList.remove("fixed")
      reportPopup.classList.add("hidden")
  },2000)
}




 // Review Popup
 const allReviewBtn = document.getElementById('allReviewBtn');
 const reviewPopup = document.getElementById('reviewPopup');
 const reviewPopupClose = document.getElementById('reviewPopupClose');
 
 allReviewBtn.addEventListener('click', () => {
    reviewPopup.classList.remove('translate-y-full', 'opacity-0');
    reviewPopup.classList.add('translate-y-0', 'opacity-1');
   overlayTwo.classList.remove("hidden")
   body.classList.add("overflow-hidden")
   });

 
   reviewPopupClose.addEventListener('click', ()=>{
   reviewPopup.classList.remove('translate-y-0', 'opacity-1');
   reviewPopup.classList.add('translate-y-full', 'opacity-0');
   overlayTwo.classList.add("hidden")
   body.classList.remove("overflow-hidden")
 });








      //  Show all comment review
 const popupContainers = document.querySelectorAll(".popup-container");
 const showMorePopupBtns = document.querySelectorAll(".show-more-popupBtn");
 
 popupContainers.forEach((popupContainer, index) => {
   const children = Array.from(popupContainer.children);
   const showMorePopupBtn = showMorePopupBtns[index];
 
   let visibleCount = 3;
   children.forEach((child, i) => {
     if (i < visibleCount) {
       child.style.display = "block";
     } else {
       child.style.display = "none";
     }
   });
 
   showMorePopupBtn.addEventListener("click", () => {
     showMorePopupBtn.textContent = "Loading...";
     showMorePopupBtn.disabled = true;
 
     setTimeout(() => {
       visibleCount += 2; 
 
       children.forEach((child, i) => {
         if (i < visibleCount) {
           child.style.display = "block";
         }
       });
 
       showMorePopupBtn.textContent = "Show More";
       showMorePopupBtn.disabled = false;
 
       if (visibleCount >= children.length) {
         showMorePopupBtn.style.display = "none";
       }
     }, 1000); 
   });
 });






 



 // 'openShareBtn' and 'closeShare'
const openShareBtns = document.querySelectorAll(".openShareBtn");
const closeShareBtns = document.querySelectorAll(".closeShare");
const shareModal = document.querySelector(".share-modal");

const showModal = () => {
  shareModal.classList.add("show");
  overlayTwo.classList.remove("hidden");
  body.classList.add("overflow-hidden");
};

const hideModal = () => {
  shareModal.classList.remove("show");
  overlayTwo.classList.add("hidden");
  body.classList.remove("overflow-hidden");
};

openShareBtns.forEach((btn) => {
  btn.addEventListener("click", showModal);
});

closeShareBtns.forEach((btn) => {
  btn.addEventListener("click", hideModal);
});













 
 