let myLeads = [];
const inputBTN = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");
const deleteBTN = document.getElementById("delete-btn");
const tabBTN = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    render(myLeads);
}

const tabs = [
    {url: "linkedin.com/in/alan-tony-itoyah-aa8627262/"}
]

tabBTN.addEventListener("click", function(){
    
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
})

function render(leads){
    let listItems = "";
    for (let i = 0; i < leads.length; ++i){
        //template string for readability
        listItems += `
            <li>
                <a target= '_blank' href ='${leads[i]}'>
                    ${leads[i]}
                </a>
            </li>
        `;

    }
    ulEl.innerHTML = listItems;
}

deleteBTN.addEventListener("dblclick", function(){
    localStorage.clear();
    myLeads = [];
    render(myLeads);
})

inputBTN.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
})