let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';


let total = document.getElementById("totalCount");
let interviewTotal = document.getElementById("interviewCount");
let rejectedTotal = document.getElementById("rejectedCount");
let totalJobs = document.getElementById("totalJobs");

const allFilterButton = document.getElementById("all-filter-btn");
const interviewFilterButton = document.getElementById("interview-filter-btn");
const rejectedFilterButton = document.getElementById("rejected-filter-btn");

const allCardSection = document.getElementById("all_cards");
// const mainContainer = document.querySelector('section');
const filterSection = document.getElementById('filteredSection')


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
    currentStatus = id;

    selected.classList.add('bg-blue-600','text-white')
    selected.classList.remove('bg-white','text-black')

    if(id == "interview-filter-btn") {
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderInterview();
    }
    else if (id == "all-filter-btn") {
        allCardSection.classList.remove("hidden");
        filterSection.classList.add("hidden");
    }
    else if(id == "rejected-filter-btn") {
        allCardSection.classList.add("hidden");
        filterSection.classList.remove("hidden");
        renderRejected();
    } 

}

document.addEventListener('click', function(event) {

    if (event.target.closest('.card_right')) {

    const card = event.target.closest('.job_card_one');
    if (!card) return;

    const companyName = card.querySelector('.companyName').innerText;

    interviewList = interviewList.filter(item => item.companyName !== companyName);
    rejectedList = rejectedList.filter(item => item.companyName !== companyName);

    const originalCards = document.querySelectorAll('#all_cards .job_card_one');

    originalCards.forEach(c => {
        const name = c.querySelector('.companyName').innerText;
        if (name === companyName) {
            c.remove();
        }
    });

    if (currentStatus === "interview-filter-btn") {
        renderInterview();
    }

    if (currentStatus === "rejected-filter-btn") {
        renderRejected();
    }

    calculateTotal();
}


    if(event.target.classList.contains('btn-success')){
        const parentNode = event.target.parentNode.parentNode;
    
    
    const companyName = parentNode.querySelector('.companyName').innerText;
    const jobPosition = parentNode.querySelector('.jobPosition').innerText;
    const address = parentNode.querySelector('.address').innerText;
    const jobStatus = parentNode.querySelector('.jobStatus').innerText;
    const jobDescription = parentNode.querySelector('.jobDescription').innerText;
    
    parentNode.querySelector('.jobStatus').innerText = "INTERVIEW"

    const cardInfo = {companyName,jobPosition,address,jobStatus:"INTERVIEW",jobDescription};
    
    
const jobExist = interviewList.find(item => item.companyName == cardInfo.companyName)

if (!jobExist){
    interviewList.push(cardInfo)
}

rejectedList = rejectedList.filter(item => item.companyName != cardInfo.companyName)

if (currentStatus == 'rejected-filter-btn') {
            renderRejected()
        }

calculateTotal()
// renderInterview ()
    }
    else if(event.target.classList.contains('btn-error')){
        const parentNode = event.target.parentNode.parentNode;
    
    
    const companyName = parentNode.querySelector('.companyName').innerText;
    const jobPosition = parentNode.querySelector('.jobPosition').innerText;
    const address = parentNode.querySelector('.address').innerText;
    const jobStatus = parentNode.querySelector('.jobStatus').innerText;
    const jobDescription = parentNode.querySelector('.jobDescription').innerText;
    
    parentNode.querySelector('.jobStatus').innerText = "REJECTED"

    const cardInfo = {companyName,jobPosition,address,jobStatus:"REJECTED",jobDescription};
    
    
const jobExist = rejectedList.find(item => item.companyName == cardInfo.companyName)

if (!jobExist){
    rejectedList.push(cardInfo)
}

interviewList = interviewList.filter(item => item.companyName != cardInfo.companyName)

if (currentStatus == "interview-filter-btn") {
    renderInterview();
}



calculateTotal()
// renderRejected ()
    }


    
})

function renderInterview (){
    filterSection.innerHTML = ''

    for (let interview of interviewList){
        
        let div = document.createElement('div');
        div.className = 'max-w-[80%] mx-auto m-5'
        div.innerHTML = `
        <div class="job_card_one bg-white mb-5 p-5 rounded-lg flex justify-between">
        <div class="card_left space-y-4">
          <h4 class="companyName font-semibold text-xl">${interview.companyName}</h4>
          <p class="jobPosition text-[#64748B]">React Native Developer</p>
          <p class="address text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>
          <button class="jobStatus btn btn-soft btn-accent">${interview.jobStatus}</button>
          <p class="jobDescription text-[#64748B]">
            Build cross-platform mobile applications using React Native. Work on
            products used by millions of users worldwide.
          </p>
          <div class="card_buttons">
            <button class="btn btn-outline btn-success">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
          </div>
        </div>
        <div class="card_right">
          <span><i class="fa-regular fa-trash-can"></i></span>
        </div>
      </div>
        `
      filterSection.appendChild(div)  



    }
}

function renderRejected (){
    filterSection.innerHTML = ''

    for (let rejected of rejectedList){
        
        let div = document.createElement('div');
        div.className = 'max-w-[80%] mx-auto m-5'
        div.innerHTML = `
        <div class="job_card_one bg-white mb-5 p-5 rounded-lg flex justify-between">
        <div class="card_left space-y-4">
          <h4 class="companyName font-semibold text-xl">${rejected.companyName}</h4>
          <p class="jobPosition text-[#64748B]">React Native Developer</p>
          <p class="address text-[#64748B]">Remote • Full-time • $130,000 - $175,000</p>
          <button class="jobStatus btn btn-soft btn-error">${rejected.jobStatus}</button>
          <p class="jobDescription text-[#64748B]">
            Build cross-platform mobile applications using React Native. Work on
            products used by millions of users worldwide.
          </p>
          <div class="card_buttons">
            <button class="btn btn-outline btn-success">INTERVIEW</button>
            <button class="btn btn-outline btn-error">REJECTED</button>
          </div>
        </div>
        <div class="card_right">
          <span><i class="fa-regular fa-trash-can"></i></span>
        </div>
      </div>
        `
      filterSection.appendChild(div)  



    }
}
