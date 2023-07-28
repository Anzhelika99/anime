const mainData = () => {
   fetch("https://anime-32db0-default-rtdb.europe-west1.firebasedatabase.app/anime.json")
     .then((response) => response.json())
     .then((data) => console.log(data[0]));
}

mainData()