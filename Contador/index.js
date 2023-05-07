const incrementButton = document.getElementById('increment')
const decrementButton = document.getElementById('decrement')
const resetButton = document.getElementById('reset')
const numberCounter = document.getElementById('number')
let number = 0;

const numberFunction = () => {
    numberCounter.innerText = number
}

incrementButton.addEventListener('click', ()=>{
    number++
    numberFunction()
})

decrementButton.addEventListener('click', ()=>{
    if (number > 0) {
        number--
        numberFunction()
    }
})

resetButton.addEventListener('click', ()=>{
    number = 0
    numberFunction()
})
