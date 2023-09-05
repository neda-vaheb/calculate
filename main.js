let displayBox = document.querySelector(".display");

function showDisplay(event){
    const x = event.target.innerText;
   if(displayBox.innerHTML === 0 ){
    return displayBox.innerText = x;

   }else{
    return displayBox.innerText +=x;
   }
}
function calculate(){
    let result = displayBox.innerText;
    displayBox.innerText = evel(result);

}

function allClear(){
displayBox.innerText =0;
}

function lastClear(){
    let number = displayBox.innerText;
    if(number.length === 1){
        displayBox.innerHTML = 0;
    }else{
        displayBox.innerText = number.substring(0 , number.length-1);
    }

}
let displayBtn = document.querySelector(".show-display");
const allClear = document.querySelector(".all-clear");
const lastClear = document.querySelector(".last-clear");
const calculate = document.querySelector(".calculate");
allClear.addEventListener("click",allClear);
lastClear.addEventListener("click",lastClear);
calculate.addEventListener("click",calculate);
displayBtn.forEach(item => {
    item.addEventListener("click",showDisplay)
    
});

