const changeparagraph = document.querySelector("#change-paragraph");
const btn2015 = document.querySelector("#btn2015");
const btn2016 = document.querySelector("#btn2016");
const btn2019 = document.querySelector("#btn2019");
const btn2020 = document.querySelector("#btn2020");
btn2015.addEventListener("click",function (e){
    e.preventDefault();
   changeparagraph.innerHTML = "2015 Yalova Üniversitesinde bilgisayar mühesndisliği okumaya başladım. 1. yılımda" +
       "iyi bir ingilizce hazırlık süreci geçirerek kendimi geliştirdiim";

})

btn2016.addEventListener("click",function (e){
    e.preventDefault();
    changeparagraph.innerHTML = "2016 Donanım ve yazılım konusunda ilk tecrübelerime bu yılımda ulaştım." +
        "C ve C++ derslerinde kendimi kanıtlamam için iyi bir dırsat oldu";

})
btn2019.addEventListener("click",function (e){
    e.preventDefault();
    changeparagraph.innerHTML = "2019 yılında C# sayesinde object Oriented (Nesne Yönelimki Programlama" +
        "konusunda iyi bir aşama kaydettim. Yazılıma olan merakım bu senemde had safhaya ulaştı)";
});
btn2020.addEventListener("click",function (e){
    e.preventDefault();
    changeparagraph.innerHTML = "\"2020 yılı Salgın ve daha bir sürü nedenlerden dolayı bir çok kişi\n" +
        "  için zorlu geçse de benim için şu an gezdiğiniz siteyi yaratabilmemin en büyük dönüm doktası oldu\";"
})

const cookies = document.querySelector("#cookies");
const closeCookies = document.querySelector("#close-cookies");
closeCookies.addEventListener("click",function (e){
    e.preventDefault();
    cookies.style.display = "none";
});

