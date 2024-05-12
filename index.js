let myLeads = [];
const inputBTN = document.querySelector("#input-btn");
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");

inputBTN.addEventListener("click", function() {
    myLeads.push(inputEl.value);
    console.log(myLeads);
    renderLeads();
})

function renderLeads(){
    let listItems = "";
    for (let i = 0; i < myLeads.length; ++i){
        listItems += "<li>" + myLeads[i] + "</li>";
    }
    ulEl.innerHTML = listItems;
}