

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





//   Tab activation
const sections = document.querySelectorAll(".tab-section"); 
const tabLinks = document.querySelectorAll(".tabLinks a"); 

window.addEventListener("scroll", () => {
  let current = null;  

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (window.scrollY >= sectionTop - sectionHeight / 5 && window.scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  tabLinks.forEach((link) => {
    link.classList.remove("active-product-details-tab");

    if (current && link.getAttribute("href") === `#${current}`) {
      link.classList.add("active-product-details-tab");
    }
  });
});




//  load more reply

const moreReply = (event) => {
    const parentElement = event.target.closest("ul");
    event.target.innerText="loading.."

    setTimeout(() => {

        event.target.remove()

        parentElement.innerHTML += `
            <li>
                <div class="flex w-full">
                    <div class="user-img w-12 h-12 overflow-hidden flex items-center justify-center rounded">
                        <img class="w-full" src="./assets/image/user1.jpg" alt="">
                    </div>
                    <div class="w-full sm:pl-4 pl-2">
                        <div class="flex justify-between">
                            <div class="flex xs:flex-row flex-col xs:gap-3 xs:items-center mb-2">
                                <h3 class="font-medium">Rakib hossen</h3>
                                <span class="text-narrow">@rakibhsn</span>
                            </div>
                            <div class="text-narrow">6 months ago</div>
                        </div>
                        <p class="text-narrow ">Founded back in 1969 as Samsung Electric Industries?</p>
                    </div>
                </div>
                <div class="sm:pl-16 pl-12">
                    <div class="flex items-center gap-10 pt-2">
                        <button class="flex items-center gap-1 group">
                            <span class="text-neutral-400"><svg class="w-4 h-4 fill-current group-hover:text-green-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M2 9h3v12H2a1 1 0 0 1-1-1V10a1 1 0 0 1 1-1zm5.293-1.293l6.4-6.4a.5.5 0 0 1 .654-.047l.853.64a1.5 1.5 0 0 1 .553 1.57L14.6 8H21a2 2 0 0 1 2 2v2.104a2 2 0 0 1-.15.762l-3.095 7.515a1 1 0 0 1-.925.619H8a1 1 0 0 1-1-1V8.414a1 1 0 0 1 .293-.707z"></path>
                                        </g>
                                    </g>
                                </svg></span>
                            <span class="group-hover:text-green-500 text-narrow">1</span>
                        </button>
                        <button class="flex items-center gap-1 group">
                            <span class="text-neutral-400"><svg class="w-4 h-4 fill-current group-hover:text-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="none">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g>
                                            <path fill="none" d="M0 0h24v24H0z"></path>
                                            <path d="M22 15h-3V3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1zm-5.293 1.293l-6.4 6.4a.5.5 0 0 1-.654.047L8.8 22.1a1.5 1.5 0 0 1-.553-1.57L9.4 16H3a2 2 0 0 1-2-2v-2.104a2 2 0 0 1 .15-.762L4.246 3.62A1 1 0 0 1 5.17 3H16a1 1 0 0 1 1 1v11.586a1 1 0 0 1-.293.707z"></path>
                                        </g>
                                    </g>
                                </svg></span>
                            <span class="group-hover:text-red-500 text-narrow">1</span>
                        </button>
                        <button class="flex items-center gap-1 group report-btn">
                            <span class="text-neutral-400 relative">
                                <span class="absolute w-max text-sm bg-white top-1/5 -left-1/2  p-1 shadow-xl inline-block border rounded opacity-0 report-content -z-30 transition duration-100"><span 
                                    onclick="reportSpam()"
                                    class="  w-full py-2 px-2 text-neutral-800 hover:bg-slate-100 inline-block">Report Spam</span></span><svg class="w-4 h-4 fill-current group-hover:text-neutral-300" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path d="M156,128a28,28,0,1,1-28-28A28.02769,28.02769,0,0,1,156,128ZM128,76a28,28,0,1,0-28-28A28.02769,28.02769,0,0,0,128,76Zm0,104a28,28,0,1,0,28,28A28.02769,28.02769,0,0,0,128,180Z"></path>
                                    </g>
                                </svg></span>
                        </button>
                    </div>
                </div>
            </li>
        `;
    }, 1000); 
};






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





 // Comment Popup
 const allCommentBtn = document.getElementById('allCommentBtn');
 const commentPopup = document.getElementById('commentPopup');
 const commentPopupClose = document.getElementById('commentPopupClose');
 
 allCommentBtn.addEventListener('click', () => {
    commentPopup.classList.remove('translate-y-full', 'opacity-0');
    commentPopup.classList.add('translate-y-0', 'opacity-1');
   overlayTwo.classList.remove("hidden")
   body.classList.add("overflow-hidden")
   });

 
   commentPopupClose.addEventListener('click', ()=>{
   commentPopup.classList.remove('translate-y-0', 'opacity-1');
   commentPopup.classList.add('translate-y-full', 'opacity-0');
   overlayTwo.classList.add("hidden")
   body.classList.remove("overflow-hidden")
 });





const commentPopupInput = document.getElementById('commentPopupInput');
const commentPopupSearchBtn = document.getElementById('commentPopupSearchBtn');

commentPopupInput.addEventListener('focus', function () {
    commentPopupSearchBtn.classList.remove("hidden")
 
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













