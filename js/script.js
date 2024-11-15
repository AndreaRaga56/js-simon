const numListElem = document.querySelectorAll("section .col-1");
const randDivElem = document.querySelector("section");
const formElem = document.querySelector("form");
const inputListElem = document.querySelectorAll("form .col-1");
const btnElem = document.querySelector("button");
const answ = document.getElementById("risposta");
const numContoAllaRove = document.querySelector("h1");
const arrayDaTrovare = [];
let c = 4;


for (i = 0; i < numListElem.length; i++) {
    numListElem[i].innerHTML = Math.floor(Math.random() * 100) + 1;
    arrayDaTrovare.push(numListElem[i].innerHTML);
}

const contoAllaRove = setInterval(function(){
    numContoAllaRove.innerHTML=c;
    c = c-1;
    if (c < 0){
        clearInterval(contoAllaRove);
    }
}, 1000)

setTimeout(function () {
    randDivElem.classList.add("d-none");
    formElem.classList.remove("d-none");
}, 5000);

formElem.addEventListener("submit", function (event) {
    event.preventDefault();
    const array = [];
    const giaTrovati = [];
    let quanti = 0;
    let stringa = '';


    for (i = 0; i < inputListElem.length; i++) {
        array.push(parseInt(inputListElem[i].value.trim()));
    }


    for (i = 0; i < numListElem.length; i++) {

        for (j = 0; j < array.length; j++) {
            if (giaTrovati.includes(i)) {
            } else if (arrayDaTrovare[i] == array[j]) {
                if (stringa == '') {
                    stringa += `${array[j]}`;
                } else {
                    stringa += `, ${array[j]}`;
                }
                quanti += 1;
                giaTrovati.push(i);
            }
        }
    }

    answ.classList.remove("d-none");
    if (quanti==0){
        answ.innerHTML=`Non ne hai azzeccata mezza :(`;
    } else if(quanti==1){
        answ.innerHTML=`Hai indovinato 1 Numero! (${stringa})`;
    } else {
        answ.innerHTML=`Hai indovinato ${quanti} Numeri! (${stringa})`;
    }

    formElem.reset();
    
    // console.log(array);
    // console.log(arrayDaTrovare);
    // console.log(stringa, quanti);
});

