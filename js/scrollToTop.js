const scrollToTop = () => {
   const topBtn = document.getElementById("scrollToTopButton");

   topBtn.addEventListener("click", (event) => {
     event.preventDefault();

     seamless.scrollIntoView(document.querySelector(".header"), {
       behavior: "smooth",
       block: "center",
       inline: "center",
     });
   });
}

scrollToTop()