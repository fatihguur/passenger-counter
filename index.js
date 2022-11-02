let myAge = 24;
let humanDogRatio = 7;



let count = 0;
let countEl = document.getElementById("count-el");

let welcomeEl = document.getElementById("welcome-el");
let myName = "Fatih";
let message = "welcomes you!!";

let saveEl = document.getElementById("save-el");

welcomeEl.innerText = myName+ " " + message;

welcomeEl.innerText = welcomeEl.innerText;




function increment() {
    count++;
    countEl.innerText = count;
}

function save() {
    saveEl.innerText = saveEl.innerText + count +"- ";
    countEl.innerText = 0;
    count = 0;
    console.log(count);
}