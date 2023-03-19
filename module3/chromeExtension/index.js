let myLeads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
let inputEl = document.querySelector('#input-el')
let saveEl = document.querySelector('#input-btn')
let ulEl = document.querySelector('#ul-el')

saveEl.addEventListener("click", function () {
    myLeads.push(inputEl.value)

})

for (let i = 0; i < myLeads.length; i++) {
    ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"

}

