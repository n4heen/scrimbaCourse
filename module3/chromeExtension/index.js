let myLeads = []
let inputEl = document.querySelector('#input-el')
let saveEl = document.querySelector('#input-btn')
let ulEl = document.querySelector('#ul-el')

let leadsFromLocalStorage=localStorage.getItem('myLeads')


saveEl.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    inputEl.value = ''
    localStorage.setItem('myLeads', JSON.stringify(myLeads))
    renderLeads()
    console.log(leadsFromLocalStorage)
})

function renderLeads() {
    let listItems = ''
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
        <li> 
         <a href="${myLeads[i]}" target="_blank">${myLeads[i]}</a>
          </li>
          `
    }

    ulEl.innerHTML = listItems
}