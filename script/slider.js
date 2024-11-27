new Swiper(".swiper", {
  //   loop: true,
  slidesPerView: 2.5,
  spaceBetween: 10,
  slidesPerGroup: 2,




  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

   breakpoints: {
       
     1280: {
       slidesPerView: 6,
       slidesPerGroup: 1,
       spaceBetween: 15
       
     },
     1024: {
       slidesPerView: 5,
       slidesPerGroup: 1,
       spaceBetween: 15

       
     },
     768: {
       slidesPerView: 4,
       slidesPerGroup: 1,
       spaceBetween: 15

       
     },
     640: {
       slidesPerView: 4,
       slidesPerGroup: 1,
       spaceBetween: 15
       
     },
    //  500: {
    //    slidesPerView: 1,
       
    //  },
  
   },
  
  
  });


