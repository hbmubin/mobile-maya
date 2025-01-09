const addMoreProduct = document.getElementById("addMoreProduct");
const headerTitleUl = document.getElementById("headerTitleUl");
const headerTable = document.getElementById("comparison-table-header");
const specsTables = document.querySelectorAll(".comparison-table");

const showCompareBtn = () => {
    const leftAddBtn = document.getElementById("leftAddBtn")
    const aside = document.getElementById("aside")


    if (compareProductList> 3) {
        addMoreProduct.classList.remove("flex");
        addMoreProduct.classList.add("hidden");
        headerTitleUl.classList.remove("flex");
        headerTitleUl.classList.add("md:flex", "hidden");
        leftAddBtn.classList.remove("lg:flex")
        leftAddBtn.classList.add("lg:hidden")
        aside.classList.remove("lg:block")
        aside.classList.add("lg:hidden")
    } else {
        addMoreProduct.classList.remove("hidden");
        addMoreProduct.classList.add("flex");
        headerTitleUl.classList.remove("md:flex", "hidden");
        headerTitleUl.classList.add("flex");
        leftAddBtn.classList.remove("lg:hidden")
        leftAddBtn.classList.add("lg:flex")
        aside.classList.remove("lg:hidden")
        aside.classList.add("lg:block")
    }
};

showCompareBtn();


//listeners to unprocessed remove buttons
const removeProduct = (index) => {
    if(index!=undefined){
        const headerTitleUl = document.getElementById("headerTitleUl");
                const headerLi =headerTitleUl.querySelectorAll("li")
                headerLi.forEach((li,idx)=>{
                    if(index==idx){
                        li.remove()
                    }
                })
              compareProductList--;
              localStorage.setItem("compare-product-list", compareProductList);
              redirectToCompare();
              removeProductData(index)
              showCompareBtn();
    }
              

};
const redirectToCompare = () => {
    if (compareProductList < 1) {
      window.location.href = "../compare.html";
      return
    }
  }
  redirectToCompare()
document.addEventListener("click", (event) => {
    const button = event.target.closest(".remove-product-btns");

    if (button) {
        const removeBtns = [...document.querySelectorAll(".remove-product-btns")];
        const index = removeBtns.indexOf(button);

        removeProduct(index);
    }
});










const headerInfo = document.getElementById("headerInfo");

// let lastCompareScroll = 0;

let scrollPosition =600

const updateScrollPosition =()=>{
    if(getScreenSize()=="sm"){
        scrollPosition=400
    }
    else{
        scrollPosition=600
    }
}

window.addEventListener("scroll", () => {
    const footer = document.querySelector("footer");
    const footerTop = footer.offsetTop - 300;
    updateScrollPosition()
	const currentScroll = window.scrollY;
    if(currentScroll>scrollPosition){
        headerInfo.classList.add("header-info");
        main.classList.add("padding-header")
    }
    else{
        headerInfo.classList.remove("header-info");
        main.classList.remove("padding-header")
    }


    if (currentScroll>footerTop) {
        headerInfo.classList.remove("header-info");
        main.classList.remove("padding-header");
      }

});



const addProductToCompare =document.querySelectorAll(".add-product-to-compare")

addProductToCompare.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const isAsideBtn=btn.classList.contains("aside-compare-product")
        if(isAsideBtn){
            const itemParent= btn.closest(".aside-compare-item")
            itemParent.remove()
        }
        compareProductList++;
        localStorage.setItem("compare-product-list", compareProductList);
        addNewProductToCompare(index)
        showCompareBtn();
        removeProduct();
    });
});


const loadProduct=()=>{
    if (compareProductList > 0) {
        for (let i = 0; i < compareProductList; i++) {
        addNewProductToCompare(i)
        removeProduct()
        showCompareBtn()
        }
      }
}

const addNewProductToCompare=(index)=>{
    const headerTitleUl = document.getElementById("headerTitleUl");
    const ImageRow = document.getElementById("image-row");
    const NameRow = document.getElementById("product-names");
    const priceRow = document.getElementById("product-prices");
    const ratingRow = document.getElementById("product-ratings");
    const brandsRow = document.getElementById("product-brands");
    const CategoryRow = document.getElementById("product-categories");

    const specsBrand = document.getElementById("specs-brand");
    const specsModel = document.getElementById("specs-model");
    const specsAlias = document.getElementById("specs-alias");
    const specsAnnounced = document.getElementById("specs-announced");
    const specsReleased = document.getElementById("specs-released");
    const specsStatus = document.getElementById("specs-status");
    const specsPrice = document.getElementById("specs-price");

    const specsThickness = document.getElementById("specs-thickness");
    const specsWeight = document.getElementById("specs-weight");
    const specsColors = document.getElementById("specs-colors");

    const specsDisplayType = document.getElementById("specs-displayType");
    const specsScreenSize = document.getElementById("specs-screenSize");
    const specsScreenResolution = document.getElementById("specs-screenResolution");
    const specsRefresh = document.getElementById("specs-refresh");
    const specsAspect = document.getElementById("specs-aspect");
    const specsPixelDensity = document.getElementById("specs-pixelDensity");
    const specsBodyRatio = document.getElementById("specs-bodyRatio");
    const specsScreenProtection = document.getElementById("specs-screenProtection");
    const specsBazel = document.getElementById("specs-bazel");
    const specsTouchScreen = document.getElementById("specs-touchScreen");
    const specsBrightness = document.getElementById("specs-brightness");
    const specsHDR = document.getElementById("specs-hdr");
    const specsNotch = document.getElementById("specs-notch");

    const specsOperatingSystem = document.getElementById("specs-operatingSystem");
    const specsOSVersion = document.getElementById("specs-osVersion");
    const specsUserInterface = document.getElementById("specs-userInterface");
    const specsChipset = document.getElementById("specs-chipset");
    const specsCPU = document.getElementById("specs-cpu");
    const specsCPUCores = document.getElementById("specs-cpuCores");
    const specsArchitecture = document.getElementById("specs-architecture");
    const specsFabrication = document.getElementById("specs-fabrication");

    const specsCameraSetup = document.getElementById("specs-cameraSetup");
    const specsCameraResolution = document.getElementById("specs-cameraResolution");
    const specsAutofocus = document.getElementById("specs-autofocus");
    const specsOIS = document.getElementById("specs-ois");
    const specsFlash = document.getElementById("specs-flash");
    const specsImageResolution = document.getElementById("specs-imageResolution");
    const specsSettings = document.getElementById("specs-settings");
    const specsZoom = document.getElementById("specs-zoom");
    const specsShootingModes = document.getElementById("specs-shootingModes");
    const specsPrimaryAperture = document.getElementById("specs-primaryAperture");
    const specsCameraFeatures = document.getElementById("specs-cameraFeatures");
    const specsVideoRecording = document.getElementById("specs-videoRecording");
    const specsVideoFPS = document.getElementById("specs-videoFPS");

    const specsFrontCameraSetup = document.getElementById("specs-frontCameraSetup");
    const specsFrontResolution = document.getElementById("specs-frontResolution");
    const specsFrontVideoRecording = document.getElementById("specs-frontVideoRecording");
    const specsFrontVideoFPS = document.getElementById("specs-frontVideoFPS");
    const specsFrontAperture = document.getElementById("specs-frontAperture");

    const specsBatteryType = document.getElementById("specs-batteryType");
    const specsBatteryCapacity = document.getElementById("specs-batteryCapacity");
    const specsQuickCharging = document.getElementById("specs-quickCharging");
    const specsBatteryPlacement = document.getElementById("specs-batteryPlacement");
    const specsUsbTypeC = document.getElementById("specs-usbTypeC");

    const specsInternalStorage = document.getElementById("specs-internalStorage");
    const specsStorageType = document.getElementById("specs-storageType");
    const specsUsbOtg = document.getElementById("specs-usbOtg");
    const specsRam = document.getElementById("specs-ram");
    const specsRamType = document.getElementById("specs-ramType");

    const specsNetwork = document.getElementById("specs-network");
    const specsSimSlot = document.getElementById("specs-simSlot");
    const specsSimSize = document.getElementById("specs-simSize");
    const specsEdge = document.getElementById("specs-edge");
    const specsGprs = document.getElementById("specs-gprs");
    const specsVolte = document.getElementById("specs-volte");
    const specsSpeed = document.getElementById("specs-speed");
    const specsWlan = document.getElementById("specs-wlan");
    const specsBluetooth = document.getElementById("specs-bluetooth");
    const specsGps = document.getElementById("specs-gps");
    const specsInfrared = document.getElementById("specs-infrared");
    const specsHotspot = document.getElementById("specs-hotspot");
    const specsNfc = document.getElementById("specs-nfc");
    const specsUsb = document.getElementById("specs-usb");

    const specsLightSensor = document.getElementById("specs-lightSensor");
    const specsFingerprintSensor = document.getElementById("specs-fingerprintSensor");
    const specsFingerprintPosition = document.getElementById("specs-fingerprintPosition");
    const specsFingerprintType = document.getElementById("specs-fingerprintType");
    const specsFaceUnlock = document.getElementById("specs-faceUnlock");

    const specsLoudspeaker = document.getElementById("specs-loudspeaker");
    const specsAudioJack = document.getElementById("specs-audioJack");
    const specsVideo = document.getElementById("specs-video");

    const specsMadeBy = document.getElementById("specs-madeBy");
    const specsFeatures = document.getElementById("specs-features");

    headerTitleUl.insertAdjacentHTML(
      "beforeend",
      `
         <li>OnePlus 9 SE</li>
          `
    );
    ImageRow.insertAdjacentHTML(
      "beforeend",
      `
          <td>
              <div class="w-full h-full relative mt-1 sm:pb-3 pb-1 sm:px-1">
                  <button class="remove-product-btns absolute close-btn z-10">
                      <svg class="fill-current text-bgText hover:text-black size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2.4" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"></path>
                      </svg>
                  </button>
                  <div class="w-full flex h-full justify-center items-center">
                      <div id="headerProductImg" class=" flex relative justify-center sm:py-2 sm:px-1 overflow-hidden w-full">
                          <img class="h-full md:max-w-max max-w-min" src="./assets/image/mobile-color-3.png" alt="mobile">
                      </div>
                  </div>
              </div>
          </td>
          `
    );
    NameRow.insertAdjacentHTML(
      "beforeend",
      `
          <td class="font-medium sm:text-base text-sm">
              <a href="./product-details.html">
                  Samsung Galaxy M34 ${index}
              </a>
          </td>
          `
    );
    priceRow.insertAdjacentHTML(
      "beforeend",
      `
          <td>
              <div class="text-center text-blueText font-bold sm:text-base text-xs">
                  ৳. 100,999
              </div>
          </td>
          `
    );
    ratingRow.insertAdjacentHTML(
      "beforeend",
      `
          <td>
              <div class="inline-flex sm:size-10 size-8 justify-center bg-green-600 rounded-full items-center">
                      <span class="sm:text-base text-sm text-white">4.5</span>
                  </div>
          </td>
          `
    );
    brandsRow.insertAdjacentHTML(
      "beforeend",
      `
          <td>
              <a href="#">Samsung</a>
          </td>
          `
    );
    CategoryRow.insertAdjacentHTML(
      "beforeend",
      `
          <td>
              <a href="#">Latest Mobile Phones</a>
          </td>
          `
    );

    specsBrand.insertAdjacentHTML(
      "beforeend",
      `
          <div>Samsung ${index}</div>
          `
    );
    specsModel.insertAdjacentHTML(
      "beforeend",
      `
          <div>Galaxy M34</div>
          `
    );
    specsAlias.insertAdjacentHTML(
      "beforeend",
      `
          <div>SM-M145F (international) </div>
          `
    );
    specsAnnounced.insertAdjacentHTML(
      "beforeend",
      `
          <div>Thursday, 07 March 2024</div>
          `
    );
    specsReleased.insertAdjacentHTML(
      "beforeend",
      `
          <div>Thursday, 07 March 2024</div>
          `
    );
    specsStatus.insertAdjacentHTML(
      "beforeend",
      `
          <div>
              <svg class="fill-current text-green-600 sm:size-5 size-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
              </svg>
              Available
          </div>
          `
    );
    specsPrice.insertAdjacentHTML(
      "beforeend",
      `
            <div>
                  <svg class="fill-current text-red-600 sm:size-6 size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                      <g id="SVGRepo_iconCarrier">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12ZM8.96963 8.96965C9.26252 8.67676 9.73739 8.67676 10.0303 8.96965L12 10.9393L13.9696 8.96967C14.2625 8.67678 14.7374 8.67678 15.0303 8.96967C15.3232 9.26256 15.3232 9.73744 15.0303 10.0303L13.0606 12L15.0303 13.9696C15.3232 14.2625 15.3232 14.7374 15.0303 15.0303C14.7374 15.3232 14.2625 15.3232 13.9696 15.0303L12 13.0607L10.0303 15.0303C9.73742 15.3232 9.26254 15.3232 8.96965 15.0303C8.67676 14.7374 8.67676 14.2625 8.96965 13.9697L10.9393 12L8.96963 10.0303C8.67673 9.73742 8.67673 9.26254 8.96963 8.96965Z"></path>
                      </g>
                  </svg>
                  $100
              </div>
            `
    );

    specsThickness.insertAdjacentHTML(
      "beforeend",
      `
            <div>9 mm (0.35 inch)</div>
            `
    );
    specsWeight.insertAdjacentHTML(
      "beforeend",
      `
            <div>194 g (0.35 inch)</div>
            `
    );
    specsColors.insertAdjacentHTML(
      "beforeend",
      `
            <div>Dark Blue, Light Blue</div>
            `
    );
    specsDisplayType.insertAdjacentHTML("beforeend", `<div>AMOLED</div>`);

    specsScreenSize.insertAdjacentHTML("beforeend", `<div>6.7 inches</div>`);

    specsScreenResolution.insertAdjacentHTML("beforeend", `<div>1080 x 2400 pixels</div>`);

    specsRefresh.insertAdjacentHTML("beforeend", `<div>120Hz</div>`);

    specsAspect.insertAdjacentHTML("beforeend", `<div>20:9</div>`);

    specsPixelDensity.insertAdjacentHTML("beforeend", `<div>393 ppi</div>`);

    specsBodyRatio.insertAdjacentHTML("beforeend", `<div>85.3% screen-to-body ratio</div>`);

    specsScreenProtection.insertAdjacentHTML("beforeend", `<div>Corning Gorilla Glass 5</div>`);

    specsBazel.insertAdjacentHTML("beforeend", `<div>Flat</div>`);

    specsTouchScreen.insertAdjacentHTML("beforeend", `<div>Yes</div>`);

    specsBrightness.insertAdjacentHTML("beforeend", `<div>500 nits</div>`);

    specsHDR.insertAdjacentHTML("beforeend", `<div>HDR10+</div>`);

    specsNotch.insertAdjacentHTML("beforeend", `<div>Yes, waterdrop notch</div>`);
    // Operating System
    specsOperatingSystem.insertAdjacentHTML("beforeend", `<div>Android 13</div>`);

    specsOSVersion.insertAdjacentHTML("beforeend", `<div>13</div>`);

    specsUserInterface.insertAdjacentHTML("beforeend", `<div>One UI 5.1</div>`);

    // Chipset
    specsChipset.insertAdjacentHTML("beforeend", `<div>Qualcomm Snapdragon 8 Gen 2</div>`);

    // CPU
    specsCPU.insertAdjacentHTML("beforeend", `<div>Octa-core (1x3.2 GHz Cortex-X3 & 2x2.8 GHz Cortex-A715 & 2x2.8 GHz Cortex-A710 & 3x2.0 GHz Cortex-A510)</div>`);

    specsCPUCores.insertAdjacentHTML("beforeend", `<div>8</div>`);

    specsArchitecture.insertAdjacentHTML("beforeend", `<div>64-bit</div>`);

    specsFabrication.insertAdjacentHTML("beforeend", `<div>4 nm</div>`);

    // Camera Setup
    specsCameraSetup.insertAdjacentHTML("beforeend", `<div>Triple camera setup</div>`);

    specsCameraResolution.insertAdjacentHTML("beforeend", `<div>50 MP (Wide), 10 MP (Telephoto), 12 MP (Ultrawide)</div>`);

    specsAutofocus.insertAdjacentHTML("beforeend", `<div>Yes, Phase Detection Autofocus (PDAF)</div>`);

    specsOIS.insertAdjacentHTML("beforeend", `<div>Yes, Optical Image Stabilization (OIS)</div>`);

    specsFlash.insertAdjacentHTML("beforeend", `<div>LED flash</div>`);

    specsImageResolution.insertAdjacentHTML("beforeend", `<div>50 MP (wide), 10 MP (telephoto), 12 MP (ultrawide)</div>`);

    specsSettings.insertAdjacentHTML("beforeend", `<div>Pro mode, Panorama, Portrait</div>`);

    specsZoom.insertAdjacentHTML("beforeend", `<div>3x Optical Zoom, 30x Digital Zoom</div>`);

    specsShootingModes.insertAdjacentHTML("beforeend", `<div>Super Steady, HDR, Night Mode, Slow-motion, Time-lapse</div>`);

    specsPrimaryAperture.insertAdjacentHTML("beforeend", `<div>f/1.8 (wide), f/2.4 (telephoto), f/2.2 (ultrawide)</div>`);

    specsCameraFeatures.insertAdjacentHTML("beforeend", `<div>HDR, Dual Pixel PDAF, Laser autofocus</div>`);

    specsVideoRecording.insertAdjacentHTML("beforeend", `<div>8K@30fps, 4K@30/60fps, 1080p@30/60fps</div>`);

    specsVideoFPS.insertAdjacentHTML("beforeend", `<div>Up to 120fps at 1080p</div>`);

    // Front Camera
    specsFrontCameraSetup.insertAdjacentHTML("beforeend", `<div>Single camera setup</div>`);

    specsFrontResolution.insertAdjacentHTML("beforeend", `<div>12 MP</div>`);

    specsFrontVideoRecording.insertAdjacentHTML("beforeend", `<div>4K@30fps, 1080p@30fps</div>`);

    specsFrontVideoFPS.insertAdjacentHTML("beforeend", `<div>Up to 60fps at 1080p</div>`);

    specsFrontAperture.insertAdjacentHTML("beforeend", `<div>f/2.2</div>`);
    // Battery
    specsBatteryType.insertAdjacentHTML("beforeend", `<div>Li-Ion</div>`);

    specsBatteryCapacity.insertAdjacentHTML("beforeend", `<div>5000 mAh</div>`);

    specsQuickCharging.insertAdjacentHTML("beforeend", `<div>Fast Charging 25W</div>`);

    specsBatteryPlacement.insertAdjacentHTML("beforeend", `<div>Non-removable</div>`);

    specsUsbTypeC.insertAdjacentHTML("beforeend", `<div>USB Type-C 2.0</div>`);

    // Storage and RAM
    specsInternalStorage.insertAdjacentHTML("beforeend", `<div>128 GB</div>`);

    specsStorageType.insertAdjacentHTML("beforeend", `<div>UFS 3.1</div>`);

    specsUsbOtg.insertAdjacentHTML("beforeend", `<div>Yes</div>`);

    specsRam.insertAdjacentHTML("beforeend", `<div>8 GB</div>`);

    specsRamType.insertAdjacentHTML("beforeend", `<div>LPDDR5</div>`);

    // Network
    specsNetwork.insertAdjacentHTML("beforeend", `<div>5G, 4G, 3G, 2G</div>`);

    specsSimSlot.insertAdjacentHTML("beforeend", `<div>Dual SIM (Nano-SIM, dual stand-by)</div>`);

    specsSimSize.insertAdjacentHTML("beforeend", `<div>Nano-SIM</div>`);

    specsEdge.insertAdjacentHTML("beforeend", `<div>EDGE</div>`);

    specsGprs.insertAdjacentHTML("beforeend", `<div>GPRS</div>`);

    specsVolte.insertAdjacentHTML("beforeend", `<div>VoLTE</div>`);

    specsSpeed.insertAdjacentHTML("beforeend", `<div>HSPA 42.2/5.76 Mbps, LTE-A</div>`);

    specsWlan.insertAdjacentHTML("beforeend", `<div>Wi-Fi 802.11 a/b/g/n/ac/6, dual-band, Wi-Fi Direct, hotspot</div>`);

    specsBluetooth.insertAdjacentHTML("beforeend", `<div>5.3</div>`);

    specsGps.insertAdjacentHTML("beforeend", `<div>Yes, with A-GPS, GLONASS, BDS, GALILEO</div>`);

    specsInfrared.insertAdjacentHTML("beforeend", `<div>Yes</div>`);

    specsHotspot.insertAdjacentHTML("beforeend", `<div>Wi-Fi hotspot</div>`);

    specsNfc.insertAdjacentHTML("beforeend", `<div>Yes</div>`);

    specsUsb.insertAdjacentHTML("beforeend", `<div>USB Type-C 2.0</div>`);

    specsLightSensor.insertAdjacentHTML("beforeend", `<div>Yes</div>`);

    specsFingerprintSensor.insertAdjacentHTML("beforeend", `<div>Yes, under-display</div>`);

    specsFingerprintPosition.insertAdjacentHTML("beforeend", `<div>Under-display</div>`);

    specsFingerprintType.insertAdjacentHTML("beforeend", `<div>Optical</div>`);

    specsFaceUnlock.insertAdjacentHTML("beforeend", `<div>Yes</div>`);

    specsLoudspeaker.insertAdjacentHTML("beforeend", `<div>Yes, stereo speakers</div>`);

    specsAudioJack.insertAdjacentHTML("beforeend", `<div>No, USB Type-C only</div>`);

    specsVideo.insertAdjacentHTML("beforeend", `<div>8K @30fps, 4K @30/60fps, 1080p</div>`);

    specsMadeBy.insertAdjacentHTML("beforeend", `<div>China</div>`);

    specsFeatures.insertAdjacentHTML("beforeend", `<div>Accelerometer, gyro, proximity, compass, Dual satellite BDS support (Emergency SOS service)</div>`);
}


const removeProductData=(index)=>{
    const headerTable = document.getElementById("comparison-table-header");
        const rows = headerTable.querySelectorAll("tr");
        rows.forEach((row) => {
        const cells = row.querySelectorAll("td");
        if (cells[index+1]) {
            cells[index+1].remove(); 
        }
        });


    const tables = document.querySelectorAll("#specsSection .comparison-table");
    tables.forEach((table) => {
        const rows = table.querySelectorAll("tr");
        rows.forEach((row) => {
            const cells = row.querySelectorAll("td");
                const divs = cells[1].querySelectorAll("div");
                    divs[index].remove(); 
        });
    });
}



const viewAllCompetitor = document.querySelectorAll(".view-all-competitor");
const competitorsContainer = document.querySelectorAll(".competitors-container");

viewAllCompetitor.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        competitorsContainer[index].classList.add("show-all");

        btn.remove();
    });
});

loadProduct()