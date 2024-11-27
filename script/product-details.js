//  Product Details Collapse
const productDetailsCollapseBtn = document.getElementById("productDetailsCollapseBtn")
const productDetailsCollapseContent = document.getElementById("productDetailsCollapseContent")
const productDetailsCollapseShadow = document.getElementById("productDetailsCollapseShadow")

let isProductDetailsCollapseBtnClick=false

productDetailsCollapseBtn.addEventListener("click",()=>{
  if(!isProductDetailsCollapseBtnClick){  
    productDetailsCollapseContent.classList.remove("h-28"),
    productDetailsCollapseBtn.textContent="See less"
    isProductDetailsCollapseBtnClick=true
  }
  else[
    productDetailsCollapseContent.classList.add("h-28"),
    productDetailsCollapseBtn.textContent="See more",
    isProductDetailsCollapseBtnClick=false
  ]
  console.log(isProductDetailsCollapseBtnClick)
})








    // Chart
const ctx = document.getElementById("myChart");




const getFontSize= ()=>{
    if(currentScreenSize=="lg"){
        return "18px"
    }
    else{
        return "14px"
    }
}
const getElementWidth= (value)=>{
    if(currentScreenSize=="sm"){
        return value-1
    }
    return value
}

console.log(getFontSize())

const borderPlugin = {
  id: "customBorder",
  beforeDraw(chart) {
    const ctx = chart.ctx;
    const chartArea = chart.chartArea;

    ctx.save();
    ctx.strokeStyle = "#5a5759";
    ctx.lineWidth = getElementWidth(3)
    ctx.strokeRect(chartArea.left, chartArea.top, chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
    ctx.restore();
  },
};

const customLegendPlugin = {
  id: "customLegend",
  afterDraw(chart) {
    const ctx = chart.ctx;
    const chartArea = chart.chartArea;
    const datasets = chart.data.datasets;

    const legendXStart = chartArea.right - 360 * datasets.length;
    const legendY = chartArea.top + 30;

    datasets.forEach((dataset, index) => {
      const itemX = legendXStart + index * 150;
      const itemY = legendY;

      // Draw legend color box
      ctx.fillStyle = dataset.borderColor;
      ctx.fillRect(itemX, itemY, 28, 18);

      // Draw border around the fill color box
      ctx.lineWidth = 3;
      ctx.strokeStyle = "#ddd";
      ctx.strokeRect(itemX, itemY, 28, 18);

      // Draw legend text
      ctx.fillStyle = "#5a5759";
      ctx.font = getFontSize()
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      ctx.fillText(dataset.label, itemX + 36, itemY + 10);
    });
  },
};


const isCustomLegend=()=>{
    if(currentScreenSize=="sm"){
        return " "
    }
    else{
        return customLegendPlugin
    }
}


new Chart(ctx, {
  type: "line",
  data: {
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan","Feb"],
    datasets: [
      {
        label: "Samsung S24 Ultra - Price Trend",
        data: [11000, 11000, 11000, 11000, 10000, 10000, 10000, 9000,9500],
        borderColor: "#0066cc",
        backgroundColor: "#0066cc",
        borderWidth: getElementWidth(4),
        pointBackgroundColor: "white",
        pointBorderColor: "#0066cc",
        pointBorderWidth: getElementWidth(4),
        pointRadius: getElementWidth(5),
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: currentScreenSize=="sm",
      },
    },
    scales: {
      x: {
        ticks: {
          autoSkip: false,
          color: "#5a5759",
          font: {
            size: getFontSize()
          },
          maxRotation: 90,
          minRotation: 90,
        },
      },
      y: {
        beginAtZero: false,
        suggestedMin: 8000,
        max: 12000,
        ticks: {
          stepSize: 1000,
          color: "#5a5759",
          font: {
            size: getFontSize()
          },
          callback: function (value) {
            if (value === 8000) {
              return "";
            }
            return value;
          },
        },
      },
    },
  },
  plugins: [borderPlugin,isCustomLegend() ],
});






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






 



 // Share Modal
const shareModal = document.querySelector(".share-modal");
const openShareBtn = document.querySelector("#openShareBtn"); 
const closeShare = document.getElementById("closeShare");

const showModal = () => {
  shareModal.classList.add("show"); 
  overlayTwo.classList.remove('hidden')
  body.classList.add('overflow-hidden')
};

const hideModal = () => {
  shareModal.classList.remove("show"); 
  overlayTwo.classList.add('hidden')
  body.classList.remove('overflow-hidden')

};

openShareBtn.addEventListener("click", showModal);

closeShare.addEventListener("click", hideModal);





 // Wishlist btn
const wishlistBtn = document.getElementById("wishlistBtn");
const wishlistSvg = document.getElementById("wishlistSvg");
const wishlistPath = document.getElementById("wishlistPath");


let pressed=false

const check = () => {
  wishlistSvg.style.fill="red"
  wishlistPath.style.stroke="red"
};

const unCheck = () => {
  wishlistSvg.style.fill="white"
  wishlistPath.style.stroke="#d4d4d4"

};



wishlistBtn.addEventListener("click", ()=>{
  console.log(pressed)
  if(!pressed){
    check()
    pressed=true
  }
  else{
    unCheck()
    pressed=false
  }
});












