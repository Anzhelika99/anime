const modal = document.querySelector(".search-model");
const modalBtn = document.querySelector(".icon_search");
const modalClose = modal.querySelector(".search-close-switch");
const modalInput = document.getElementById("search-input");

console.log(modalInput);

modalBtn.addEventListener('click', () => {
   modal.style.display = 'block'
})

modalClose.addEventListener("click", () => {
  modal.style.display = "none";
});


modalInput.addEventListener("change", () => {
  console.log(modalInput.value);
});