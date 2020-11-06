"use strict";
let btn1 = document.getElementById("btn1");
let count = 0;

function onClickButton1(){
    btn1.innerText = ++count;  
    console.log("onClickButton1::click");
    if(count === 5) alert("Bravo, bel échauffement!");
    if(count === 10) {
        alert("Vous êtes passé maître en l’art du clic!");
        btn1.removeEventListener("click",onClickButton1);
    }   

}

btn1.addEventListener("click",onClickButton1);


