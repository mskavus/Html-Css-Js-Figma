function agree(){
    const forcheck = document.querySelector("#forcheck");
    const check = document.querySelector("#check");
    if(check.checked === true){
        forcheck.style.color = "#8BD638";
        forcheck.style.transition = "500ms color ease-in-out";
        forcheck.style.fontWeight = "bolder";

    }
    else{
        forcheck.style.color = "black";
        forcheck.style.transition = "500ms color ease-in-out";
        forcheck.style.fontWeight = "bolder";
    }
}
const sebetBos = document.querySelector(".sepetbos");
const container = document.querySelector(".container");
const priceses = document.querySelectorAll("._price");
const total = document.querySelector("#total");
let a = 0;
total.innerHTML = a.toString();
priceses.forEach((number,index) =>{
    a =  a + Number(priceses[index].innerHTML);
})
total.innerHTML = a;
function callbose(){
    if(Number(total.innerHTML === "0")){
        sebetBos.style.display = "flex";
        container.style.display = "none";
        setTimeout(function (){
            window.location.href = "http://kavusmusa.atwebpages.com";
        },1000)
        clearTimeout();
    }
}


function deleteord(){
    const order1 = document.querySelector("#order1");
    order1.remove();
    total.innerHTML = (Number(total.innerHTML) - Number(priceses[0].innerHTML)).toString();
    callbose();

}
function deleteord2(){
    const order2 = document.querySelector("#order2");
    order2.remove();
    total.innerHTML = (Number(total.innerHTML) - Number(priceses[1].innerHTML)).toString() ;
    callbose();
}
function deleteord3(){
    const order3 = document.querySelector("#order3");
    order3.remove();
    total.innerHTML = (Number(total.innerHTML) - Number(priceses[2].innerHTML)).toString() ;
    callbose();
}
function deleteord4(){
    const order4 = document.querySelector("#order4");
    order4.remove();
    total.innerHTML = (Number(total.innerHTML) - Number(priceses[3].innerHTML)).toString() ;
    callbose();
}







