let display = document.querySelector('.input') 

document.querySelector('.clear').addEventListener('click', function (event){
    display.innerText=""
    })

document.querySelector('.input').addEventListener('click', function (event){
    display.innerHTML=""
    })

let seven = document.querySelector('.seven')
    seven.addEventListener('click', function (event){
        display.innerText+=seven.innerText
    })

let eight = document.querySelector('.eight')
    eight.addEventListener('click', function (event){
        display.innerText+=eight.innerText
    })

let nine = document.querySelector('.nine')
    nine.addEventListener('click', function (event){
        display.innerText+=nine.innerText
    })

let divide = document.querySelector('.divide')
    divide.addEventListener('click', function (event){
        display.innerText+=divide.innerText
    })

let four = document.querySelector('.four')
    four.addEventListener('click', function (event){
        display.innerText+=four.innerText
    })

let five = document.querySelector('.five')
    five.addEventListener('click', function (event){
        display.innerText+=five.innerText
    })

let six = document.querySelector('.six')
    six.addEventListener('click', function (event){
        display.innerText+=six.innerText
    })

let multiply = document.querySelector('.multiply')
    multiply.addEventListener('click', function (event){
        display.innerText+=multiply.innerText
    })

let one = document.querySelector('.one') 
    one.addEventListener('click', function (event){
    display.innerText+=one.innerText
    })

let two = document.querySelector('.two')
    two.addEventListener('click', function (event){
    display.innerText+=two.innerText 
    })

let three = document.querySelector('.three')
    three.addEventListener('click', function (event){
    display.innerText+=three.innerText
    })

let zero = document.querySelector('.zero')
    zero.addEventListener('click', function (event){
    display.innerText+=zero.innerText
    })

let add = document.querySelector('.add')
    add.addEventListener('click', function (event){
        display.innerText+=add.innerText
    })

let subtract = document.querySelector('.subtract')
    subtract.addEventListener('click', function (event){
    display.innerText+=subtract.innerText
    })

let period = document.querySelector('.period')
    period.addEventListener('click', function (event){
        display.innerText+=period.innerText
    })

let equal = document.querySelector('.equal')
    equal.addEventListener('click', function (event){
        display.innerText = eval(display.innerText)
    })
