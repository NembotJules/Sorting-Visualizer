const insertion = async () => {
    let bars = document.querySelectorAll('.bar'); 

    bars[0].style.background = 'green'; 
    
    for(let i = 1; i < bars.length; i++) {
        let  j = i-1; 
        let key = bars[i].style.height; // The height of the actual bar...
        bars[i].style.background = 'blue' ; // Color in blue the actual bar...

        await sleep(delay); 

        while(j >=0 && (parseInt(bars[j].style.height) > parseInt(key))) {
            bars[j].style.background = 'blue'; 
            bars[j+1].style.height = bars[j].style.height; 
            j--

            await sleep(delay); 

            for(let k = i; k>=0; k--) {
                bars[k].style.background = 'green' // Color the sorted part in green...
            }
        }
        bars[j+1].style.height = key; 
        bars[i].style.background = 'green'; 
    }
}

const insertionBtn = document.querySelector('.insertionSort'); 

insertionBtn.addEventListener('click', async() => {
    disableBtn(); 
    disableSlideInputs(); 
    await insertion(); 
    algoInfo.innerHTML = `<p>Insertion Sort</p>
                          <p> Space Complexity: O(1)</p> 
                          <p> Time Complexity:  O(n^2) </p>`
    enableBtn()
    enableSlideInputs(); 
})