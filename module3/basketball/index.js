let count = 0

let homeScoreEl = document.getElementById("homeScore")

let guestScoreEl = document.getElementById("guestScore")

function homePlusOne() {
    count += 1
    homeScoreEl.textContent = count

}

function homePlusTwo() {
    count += 2
    homeScoreEl.textContent = count
}

function homePlusThree() {
    count += 3
    homeScoreEl.textContent = count
}


function guestPlusOne() {
    count += 1
    guestScoreEl.textContent = count

}

function guestPlusTwo() {
    count += 2
    guestScoreEl.textContent = count
}

function guestPlusThree() {
    count += 3
    guestScoreEl.textContent = count
}


