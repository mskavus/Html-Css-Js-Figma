const showSearchText = document.querySelector("#search-btn");
const searchBox = document.querySelector(".search-box");
showSearchText.addEventListener("click",function (e){
   e.preventDefault();
   searchBox.style.display = "inline";
});
