const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');
const countLabel = document.getElementById('countLabel');

let count = 0;

function updateLabel(){
    if(countLabel) countLabel.textContent = count;
}

// Add safe event handlers (script is loaded with `defer` so DOM should be ready)
if(!countLabel) console.warn('countLabel element not found');

if(increaseBtn){
    increaseBtn.addEventListener('click', () => { count++; updateLabel(); });
} else {
    console.warn('increaseBtn element not found');
}

if(decreaseBtn){
    decreaseBtn.addEventListener('click', () => { count--; updateLabel(); });
} else {
    console.warn('decreaseBtn element not found');
}

if(resetBtn){
    resetBtn.addEventListener('click', () => { count = 0; updateLabel(); });
} else {
    console.warn('resetBtn element not found');
}

// Initialize display
updateLabel();