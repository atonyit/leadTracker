let myLeads = [];
const inputBTN = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEl = document.getElementById("ul-el");

inputBTN.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    inputEl.value = "";
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