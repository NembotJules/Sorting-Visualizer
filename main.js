const newArray = document.getElementById('newArray'); 
const barsContainer = document.getElementById('barsContainer');
const sizeInput = document.getElementById('sizeInput'); 
const speedInput = document.getElementById('speedInput'); 
const algoInfo = document.getElementById('algoInfo');


// To disable the button when the sort is running
function disableBtn () {
    document.querySelector('.bubbleSort').disabled = true; 
    document.querySelector('.insertionSort').disabled = true; 
    document.querySelector('.quickSort').disabled = true; 
    document.querySelector('.mergeSort').disabled = true; 
    newArray.disabled = true;
}

// To disable the slide when the sort is running...
function disableSlideInputs() {
    sizeInput.disabled = true; 
    speedInput.disabled = true; 
}

// To enable the slide after the sort...
function enableSlideInputs() {
    sizeInput.disabled = false; 
    speedInput.disabled = false; 
}

// To enable the button after the sort...
function enableBtn() {
    document.querySelector('.bubbleSort').disabled = false; 
    document.querySelector('.insertionSort').disabled = false; 
    document.querySelector('.quickSort').disabled = false; 
    document.querySelector('.mergeSort').disabled = false;
    newArray.disabled = false;  
}

// To generate random number between two values...
function randomNumbers(min, max) {
    return Math.floor(Math.random()* (max-min +1) + min); 
}

let arr = []

// To create a new array depending on the size the user choose...
 sizeInput.addEventListener('input', () => {
        barsContainer.innerHTML = '';
        createArray(parseInt(sizeInput.value))
 })

// To create the array whose the values will be display as bar on the screen...

function createArray(arrayLength) {
    for(var i = 0; i < arrayLength; i++) {
        arr[i] = randomNumbers(2, 300) ;
    }

    for(var i = 0; i < parseInt(sizeInput.value); i++) {
        let bar = document.createElement('div'); 
        bar.style.height = arr[i] + "px"; 
        bar.classList.add('bar'); 
        barsContainer.appendChild(bar); 
    }
}

// Create the bars each time the DOM is loaded...
document.addEventListener('DOMContentLoaded', () => {
    barsContainer.innerHTML = '';
    createArray(parseInt(sizeInput.value))
})

// To generate a new array when you click on the new array button...

newArray.addEventListener('click', ()=> {
    barsContainer.innerHTML = '';
    createArray(parseInt(sizeInput.value))
})

//This is the function that i will use to add a delay to the different animation...
function sleep(milisec) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, milisec); 
    }) 
}

// The delay in msfor the sleep function
let delay = 250; 

// Adapting the delay automatically using the user input...

speedInput.addEventListener('input', () => {
    delay = 320 - parseInt(speedInput.value); 
    console.log(delay)
})

//The function that will help me swap two bars during the animation...

function swapElements(el1, el2) {
    let temp = el1.style.height; 
    el1.style.height = el2.style.height; 
    el2.style.height = temp; 
}