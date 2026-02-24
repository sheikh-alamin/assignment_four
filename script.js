let interviewList = [];
let rejectedList = [];


let total = document.getElementById("totalCount");
let interviewTotal = document.getElementById("interviewCount");
let rejectedTotal = document.getElementById("rejectedCount");
let totalJobs = document.getElementById("totalJobs");

const allFilterButton = document.getElementById("all-filter-btn");
const interviewFilterButton = document.getElementById("interview-filter-btn");
const rejectedFilterButton = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("all_cards");
const mainContainer = document.querySelector('section');


function calculateTotal (){
    total.innerText = allCardSection.children.length;
    totalJobs.innerText = allCardSection.children.length;
    interviewTotal.innerText = interviewList.length;
    rejectedTotal.innerText = rejectedList.length;
}
calculateTotal ()

function toggleStyle (id){
    
    allFilterButton.classList.add('bg-white', 'text-black')
    interviewFilterButton.classList.add('bg-white', 'text-black')
    rejectedFilterButton.classList.add('bg-white', 'text-black')
    
    allFilterButton.classList.remove('bg-blue-600' , 'text-white')
    interviewFilterButton.classList.remove('bg-blue-600', 'text-white')
    rejectedFilterButton.classList.remove('bg-blue-600', 'text-white')

    const selected = document.getElementById(id);
    selected.classList.add('bg-blue-600','text-white')
    selected.classList.remove('bg-white','text-black')
}

mainContainer.addEventListener('click', function(event) {
    const parentNode = event.target.parentNode.parentNode;
    
    
    const companyName = parentNode.querySelector('.companyName').innerText;
    const jobPosition = parentNode.querySelector('.jobPosition').innerText;
    const address = parentNode.querySelector('.address').innerText;
    const jobStatus = parentNode.querySelector('.jobStatus').innerText;
    const jobDescription = parentNode.querySelector('.jobDescription').innerText;
    
    const cardInfo = {companyName,jobPosition,address,jobStatus,jobDescription};
    console.log(cardInfo);
})