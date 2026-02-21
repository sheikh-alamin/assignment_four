let interviewList = [];
let rejectedList = [];

let total = document.getElementById("totalCount");
let interviewTotal = document.getElementById("interviewCount");
let rejectedTotal = document.getElementById("rejectedCount");

const allCardSection = document.getElementById("all_cards");

const mainContainer = document.querySelector("section");
console.log(mainContainer);

function calculateTotal (){
    total.innerText = allCardSection.children.length;
    interviewTotal.innerText = interviewList.length;
    rejectedTotal.innerText = rejectedList.length;
}
calculateTotal ()

function toggleStyle (id){
    console.log("click" , id)
}