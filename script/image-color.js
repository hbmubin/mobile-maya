








  document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".subImage");
    const productImage = document.getElementById("productImageFluid");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => {
                btn.classList.remove("border-2","border-gray-600");
                btn.classList.add("border","border-gray-300");
            });

            button.classList.remove("border","border-gray-300");
            button.classList.add("border-2","border-gray-600");
            const imgSrc = button.querySelector("img").src;
            productImage.classList.remove("fade-in-slider"); 
            setTimeout(() => {
                productImage.classList.add("fade-in-slider");
            }, 0); 
            setTimeout(() => {
                productImage.src = imgSrc;
            }, 250); 
        });
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".subColor");
    const productImage = document.getElementById("productColorFluid");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => {
                btn.classList.remove("border-2","border-gray-600");
                btn.classList.add("border","border-gray-300");
            });

            button.classList.remove("border","border-gray-300");
            button.classList.add("border-2","border-gray-600");
            const imgSrc = button.querySelector("img").src;
            productImage.classList.remove("fade-in-slider"); 
            setTimeout(() => {
                productImage.classList.add("fade-in-slider");
            }, 0); 
            setTimeout(() => {
                productImage.src = imgSrc;
            }, 250); 
            setTimeout(() => {
                productImage.src = imgSrc;
            }, 250); 
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".subScreenshot");
    const productImage = document.getElementById("productScreenshotFluid");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            buttons.forEach((btn) => {
                btn.classList.remove("border-2","border-gray-600");
                btn.classList.add("border","border-gray-300");
            });

            button.classList.remove("border","border-gray-300");
            button.classList.add("border-2","border-gray-600");
            const imgSrc = button.querySelector("img").src;
            productImage.classList.remove("fade-in-slider"); 
            setTimeout(() => {
                productImage.classList.add("fade-in-slider");
            }, 0); 
            setTimeout(() => {
                productImage.src = imgSrc;
            }, 250); 
        });
    });
});






const openShareBtns = document.querySelectorAll(".openShareBtn");
const closeShareBtns = document.querySelectorAll(".closeShare");
const shareModal = document.querySelector(".share-modal");
const body = document.body

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



const assetLinks =document.querySelectorAll(".product-asset-link")

assetLinks.forEach((link) => {
    link.addEventListener("click", () => {
        assetLinks.forEach((link) => link.classList.remove("active-product-assets"));
        link.classList.add("active-product-assets")
    });
});






const content3d = document.getElementById("full3d");
const full3dBtn = document.getElementById("full3dBtn");
const full3dClose = document.getElementById("full3dClose");


const show3d=()=>{
    content3d.classList.remove("-z-10")
    full3dClose.classList.remove("hidden")
    full3dClose.classList.add("flex")
    content3d.classList.add("full-3d-view")
    body.classList.add("overflow-hidden")
}
const hide3d=()=>{
    full3dClose.classList.remove("flex")
    full3dClose.classList.add("hidden")
    content3d.classList.remove("full-3d-view")
    content3d.classList.add("-z-10")
    body.classList.remove("overflow-hidden")
}


full3dBtn.addEventListener("click", () => {
    show3d()
});
full3dClose.addEventListener("click", () => {
    hide3d()
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
       hide3d()
    }
});
window.addEventListener("popstate", (event) => {
    hide3d()
});






const fullScreenOpen= document.querySelectorAll(".full-screen-open")
const fullScreenClose= document.querySelectorAll(".full-screen-close")
const assetWidthContainers= document.querySelectorAll(".assetWidthContainers")
const navigators= document.querySelectorAll(".navigators")


fullScreenOpen.forEach(((btn,index)=>{
    btn.addEventListener("click",()=>{
        const container= assetWidthContainers[index]
        const close= fullScreenClose[index]
        btn.classList.add("hidden")
        close.classList.remove("hidden")
        close.classList.add("flex")
        container.classList.remove("assetWidthContainers")
        container.classList.add("full-screen-view")
        navigators.forEach(nav=>{
            nav.classList.remove("hidden")
        })
    })
}))
fullScreenClose.forEach(((btn,index)=>{
    btn.addEventListener("click",()=>{
        const container= assetWidthContainers[index]
        const open= fullScreenOpen[index]
        container.classList.remove("full-screen-view")
        container.classList.add("assetWidthContainers")
        open.classList.remove("hidden")
        btn.classList.remove("flex")
        btn.classList.add("hidden")
        navigators.forEach(nav=>{
            nav.classList.add("hidden")
        })
    })
}))





var swiper = new Swiper(".mySwiperThumb1", {
    spaceBetween: 0,
    slidesPerView: 0,
    freeMode: false,
    centeredSlides: true,
  });
  var swiper2 = new Swiper(".mySwiper1", {
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
var swiper = new Swiper(".mySwiperThumb2", {
    spaceBetween: 0,
    slidesPerView: 0,
    freeMode: false,
    centeredSlides: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
var swiper = new Swiper(".mySwiperThumb3", {
    spaceBetween: 0,
    slidesPerView: 0,
    freeMode: false,
    centeredSlides: true,
  });
  var swiper2 = new Swiper(".mySwiper3", {
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });


