const newContainer = document.querySelector('.container')

for(let i = 1; i <= 100; i++) {

    let divisible;
    if (i % 3 === 0 && i % 5 === 0) {
        divisible = 'fizzbuzz'
    } else if (i % 3 === 0) {
        divisible = 'fizz'
    } else if (i % 5 === 0) {
        divisible = 'buzz'
    } else {
        divisible = i
    }

    console.log(divisible)

    const newSquare =  `<div class="square ${divisible}"> ${divisible} </div>`

    newContainer.innerHTML += newSquare
}