const modal = () => {
   const modal = document.querySelector(".search-model");
   const modalBtn = document.querySelector(".icon_search");
   const modalClose = modal.querySelector(".search-close-switch");
   const modalInput = document.getElementById("search-input");
   const wrapper = document.querySelector(".search-model-result");

   wrapper.style.width = "100%";
   wrapper.style.maxWidth = "500px";

   const debounce = (func, ms = 500) => {
      let timer;
      return (...args) => {
         clearTimeout(timer)
        timer = setTimeout(() => {func.apply(this, args)}, ms);
      };
   }

   const serarchDebounce = debounce((searchString) => {
      serchFnc(searchString);
   })

   const renderFnc = (items) => {
      wrapper.innerHTML = ''
      items.forEach((item) => {
         wrapper.insertAdjacentHTML(
           "afterbegin",
           `
         <a class="p-2" href="/anime-details.html" target="_blank">${item.title}</a>`
         );
      })
   }

   const serchFnc = (serchStr) => {
      fetch(
        "https://anime-32db0-default-rtdb.europe-west1.firebasedatabase.app/anime.json"
      )
        .then((response) => response.json())
        .then((data) => {
         console.log(data)
            const filteredData = data.filter((dataItem) => {
               return (
                 dataItem.title
                   .toLowerCase()
                   .includes(serchStr.toLowerCase()) ||
                 dataItem.description
                   .toLowerCase()
                   .includes(serchStr.toLowerCase())
               );
            })

            renderFnc(filteredData.slice(0, 5));
        });
   }

   modalBtn.addEventListener("click", () => {
     modal.style.display = "block";
   });

   modalClose.addEventListener("click", () => {
     modal.style.display = "none";
     wrapper.innerHTML = "";
   });

   modalInput.addEventListener("input", (event) => {
     serarchDebounce(event.target.value);
   });
}

modal()