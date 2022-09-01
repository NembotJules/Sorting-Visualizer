const bubbleSort = async () => {
    let bars = document.querySelectorAll('.bar'); 

    for(let i = 0; i < bars.length -1; i++) {
        for(let j = 0; j < bars.length-i-1; j++){
            
            bars[j].style.background = 'blue'; 
            bars[j+1].style.background = 'blue'; 
            if(parseInt(bars[j].style.height) > parseInt(bars[j+1].style.height)) {
                await sleep(delay); 
                swapElements(bars[j], bars[j+1]); 
            }

            bars[j].style.background = 'cyan'; 
            bars[j+1].style.background = 'cyan' ;
        }
        bars[bars.length-i-1].style.background = 'green'; 
    }

    bars[0].style.background = 'green'; 
}

const bubbleSortBtn = document.querySelector('.bubbleSort'); 

bubbleSortBtn.addEventListener('click', async() => {
    disableBtn(); 
    disableSlideInputs(); 
    await bubbleSort(); 
   algoInfo.innerHTML = `  <p>Bubble Sort: </p> 
                           <p> Space Complexity: O(1)</p> 
                          <p> Time Complexity:  O(n^2) </p>`
    enableBtn(); 
    enableSlideInputs(); 
})