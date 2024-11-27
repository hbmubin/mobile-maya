const allRangeInps = document.querySelectorAll(".range-input input");
const inputBoxs = document.querySelectorAll(".price-input input");
const slider = document.querySelector(".slider .progress");

const priceGap = 5000;

inputBoxs.forEach(function (oneByOne) {
  oneByOne.addEventListener("input", function (e) {
    const firstInpt_num = parseInt(inputBoxs[0].value);
    const secondInpt_num = parseInt(inputBoxs[1].value);

    // Updated to match the actual range limits
    if (secondInpt_num - firstInpt_num >= priceGap && secondInpt_num <= 289999) {
      if (e.target.classList.contains("input-min")) {
        allRangeInps[0].value = firstInpt_num;
        slider.style.left = ((firstInpt_num - 1599) / (289999 - 1599)) * 100 + "%";
      } else if (e.target.classList.contains("input-max")) {
        allRangeInps[1].value = secondInpt_num;
        slider.style.right = 100 - ((secondInpt_num - 1599) / (289999 - 1599)) * 100 + "%";
      }
    }
  });
});

allRangeInps.forEach(function (oneByOne) {
  oneByOne.addEventListener("input", function (e) {
    const firstInpt_num = parseInt(allRangeInps[0].value);
    const secondInpt_num = parseInt(allRangeInps[1].value);

    if (secondInpt_num - firstInpt_num < priceGap) {
      if (e.target.classList.contains("range-min")) {
        allRangeInps[0].value = secondInpt_num - priceGap;
      } else if (e.target.classList.contains("range-max")) {
        allRangeInps[1].value = firstInpt_num + priceGap;
      }
    } else {
      inputBoxs[0].value = firstInpt_num;
      inputBoxs[1].value = secondInpt_num;
      slider.style.left = ((firstInpt_num - 1599) / (289999 - 1599)) * 100 + "%";
      slider.style.right = 100 - ((secondInpt_num - 1599) / (289999 - 1599)) * 100 + "%";
    }
  });
});
