
let inputEl = document.getElementById("input")
let lengthEl = document.getElementById("length-el")

const meterToFeet =  3.281
const literToGallon =  0.264
const kiloToPound =  2.204

function convert(){
    let baseValue=inputEl.value
 lengthEl.textContent=`${baseValue} meters | ${baseValue*meterToFeet} meters`
}
