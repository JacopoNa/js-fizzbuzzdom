for(let i = 1; i <= 100; i++) {

    let divisible;
    if (i % 3 === 0 && i % 5 === 0) {
        divisible = 'FizzBuzz'
    } else if (i % 3 === 0) {
        divisible = 'Fizz'
    } else if (i % 5 === 0) {
        divisible = 'Buzz'
    } else {
        divisible = i
    }

    console.log(divisible)
}