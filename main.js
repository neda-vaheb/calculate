let displayBox = document.querySelector(".display");

function showDisplay(event){
    const x = event.target.innerText;
    if(displayBox.innerHTML == 0){
        return displayBox.innerText = x;
    }else{
        return displayBox.innerText += x;
    }
}
function calculate(){
    let result = displayBox.innerText;
   displayBox.innerText= eval(result);
}
function allClear(){
    displayBox.innerText = 0;
}
function lastClear(){
    let number = displayBox.innerText;
    if(number.length === 1){
        displayBox.innerText = 0;
    }else{
        displayBox.innerText = number.substring(0 , number.length - 1);
    }

}



document.querySelector(".last-clear").addEventListener("click",lastClear);
document.querySelector(".all-clear").addEventListener("click",allClear);
document.querySelector(".calculate").addEventListener("click",calculate);
let showBtn = document.querySelectorAll(".show-display");
showBtn.forEach(item => {
    item.addEventListener("click",showDisplay);
    
});

