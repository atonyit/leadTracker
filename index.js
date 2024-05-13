let myLeads = [];
const inputBTN = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsFromLocalStorage){
    myLeads = leadsFromLocalStorage;
    renderLeads();
}

inputBTN.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    renderLeads();
})

function renderLeads(){
    let listItems = "";
    for (let i = 0; i < myLeads.length; ++i){
        // listItems += "<li><a target= '_blank' href ='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>";
        //changed to a template string for readability
        listItems += `
            <li>
            <a target= '_blank' href ='${myLeads[i]}'>
                ${myLeads[i]}
                </a>
            </li>
        `;

    }
    ulEl.innerHTML = listItems;
}