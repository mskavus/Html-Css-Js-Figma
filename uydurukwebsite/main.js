const a = document.querySelectorAll(".time");
let b = new Date();
a[0].innerHTML = b.toLocaleString();
a[1].innerHTML = b.toLocaleString();
a[2].innerHTML = b.toLocaleString();

const selectMe = document.querySelector("#version");
const selectMe2 = document.querySelector("#type");
const mediaQueryx = window.matchMedia('(max-width: 768px)');
/*
if (matchMedia){
        selectMe[0].innerHTML = "version";
        selectMe2[0].innerHTML = "type";
}
*/
