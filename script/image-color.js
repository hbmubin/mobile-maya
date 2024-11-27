document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".subImage");
    const productImage = document.getElementById("productImageFluid");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove the 'selected' class from all buttons
            buttons.forEach((btn) => btn.classList.remove("border","border-gray-700"));

            // Add the 'selected' class to the clicked button
            button.classList.add("border","border-gray-700");

            // Update the main product image
            const imgSrc = button.querySelector("img").src;
            productImage.src = imgSrc;
        });
    });
});




document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".subColor");
    const productImage = document.getElementById("productColorFluid");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove the 'selected' class from all buttons
            buttons.forEach((btn) => btn.classList.remove("border","border-gray-700"));

            // Add the 'selected' class to the clicked button
            button.classList.add("border","border-gray-700");

            // Update the main product image
            const imgSrc = button.querySelector("img").src;
            productImage.src = imgSrc;
        });
    });
});



document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll(".subScreenshot");
    const productImage = document.getElementById("productScreenshotFluid");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            // Remove the 'selected' class from all buttons
            buttons.forEach((btn) => btn.classList.remove("border","border-gray-700"));

            // Add the 'selected' class to the clicked button
            button.classList.add("border","border-gray-700");

            // Update the main product image
            const imgSrc = button.querySelector("img").src;
            productImage.src = imgSrc;
        });
    });
});




// Select all elements with the classes 'openShareBtn' and 'closeShare'
const openShareBtns = document.querySelectorAll(".openShareBtn");
const closeShareBtns = document.querySelectorAll(".closeShare");
const shareModal = document.querySelector(".share-modal");
const body = document.body

// Function to show the modal
const showModal = () => {
  shareModal.classList.add("show");
  overlayTwo.classList.remove("hidden");
  body.classList.add("overflow-hidden");
};

// Function to hide the modal
const hideModal = () => {
  shareModal.classList.remove("show");
  overlayTwo.classList.add("hidden");
  body.classList.remove("overflow-hidden");
};

// Attach event listeners to all 'openShareBtn' elements
openShareBtns.forEach((btn) => {
  btn.addEventListener("click", showModal);
});

// Attach event listeners to all 'closeShare' elements
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
