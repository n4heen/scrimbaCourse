let myLeads = []
let oldLeads = []
const inputEl = document.querySelector('#input-el')
const inputBtn = document.querySelector('#input-btn')
const ulEl = document.querySelector('#ul-el')
const deleteBtn = document.querySelector('#delete-btn')
const leadsFromLocalStorage = JSON.parse(localStorage.getItem('myLeads'))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ''
    for (let i = 0; i < leads.length; i++) {
        listItems += `
        <li> 
         <a href="${leads[i]}" target="_blank">${leads[i]}</a>
          </li>
          `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    render(myLeads)

    console.log(leadsFromLocalStorage)
})