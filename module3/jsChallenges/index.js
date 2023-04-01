// Create a function that renders the three team images
// Use a for loop, template strings (``), plus equals (+=)
// .innerHTML to solve the challenge.
const ulEl = document.querySelector('#container')
const imgs = [
    "images/hip1.jpg",
    "images/hip2.jpg",
    "images/hip3.jpg"
]

function render() {
    let listItems = ''
    for (let i = 0; i < imgs.length; i++) {
        listItems +=
            ` <img class="team-img" src="${img[i]}">
           `
    }
    container.innerHTML = listItems
}

render()