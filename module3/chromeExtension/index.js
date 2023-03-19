let myLeads = []
let inputEl = document.querySelector('#input-el')
let saveEl = document.querySelector('#input-btn')

saveEl.addEventListener("click", function () {
    myLeads.push("www.awesomelead.com")
    console.log(myLeads)
})

