const tableBody = document.querySelector("#showroomTable tbody");
const rows = Array.from(tableBody.querySelectorAll("tr"));
let rows_per_page = 8;
let current_page = 1;
const total_rows = rows.length;
let total_pages = Math.ceil(total_rows / rows_per_page);

document.addEventListener("DOMContentLoaded", () => {
  if (rows.length <= rows_per_page) {
    const cardFooter = document.getElementById("cardFooter");
    cardFooter.classList.add("hidden");
  } else {
    generatePagination();
    displayRows();
  }
});

const displayRows = () => {
  let start_index = (current_page - 1) * rows_per_page;
  let end_index = start_index + rows_per_page;

  // Hide all rows
  rows.forEach((row, index) => {
    row.style.display = index >= start_index && index < end_index ? "table-row" : "none";
  });

  // Update pagination button active state
  document.querySelectorAll(".pagination-btn").forEach((btn) => {
    btn.classList.remove("list-pagination-active");
  });
  const activePage = document.getElementById(`page${current_page}`);
  if (activePage) activePage.classList.add("list-pagination-active");

  // Hide or show navigation buttons
  document.getElementById("prevBtn").classList.toggle("disabled", current_page === 1);
  document.getElementById("nextBtn").classList.toggle("disabled", current_page === total_pages);

};

const generatePagination = () => {
  const prevBtn = `<li id="prevBtn" onclick="prevPage()" class="flex justify-center items-center">
    Previous
  </li>`;

  const nextBtn = `<li id="nextBtn" onclick="nextPage()" class="flex justify-center items-center">
    Next
  </li>`;

  let buttonsArray = [];

  for (let i = 1; i <= total_pages; i++) {
    buttonsArray.push(
      `<li id="page${i}" onclick="goToPage(${i})" class="pagination-btn ${
        current_page === i ? "list-pagination-active" : ""
      }">${i}</li>`
    );
  }

  // Combine everything
  document.getElementById("listPagination").innerHTML = `${prevBtn} ${buttonsArray.join(
    ""
  )} ${nextBtn}`;
};


const scrollToProductCardContainer = () => {
    const productCardContainer = document.querySelector("#showroomTable tbody");
    const offsetPosition = productCardContainer.offsetTop + 300; // 200 pixels above the container
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

// Pagination functions
const prevPage = () => {
  if (current_page > 1) {
    current_page--;
    displayRows();
    scrollToProductCardContainer()
  }
};

const nextPage = () => {
  if (current_page < total_pages) {
    current_page++;
    displayRows();
    scrollToProductCardContainer()
  }
};

const goToPage = (page) => {
  current_page = page;
  displayRows();
  scrollToProductCardContainer()
};