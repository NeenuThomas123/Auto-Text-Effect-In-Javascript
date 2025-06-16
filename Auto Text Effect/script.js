//get h1, input elements
const textEl = document.getElementById('text')

const speedEl = document.getElementById('speed')

const text = 'We Love Programming!'

//this keeps track of how many characters have been shown
let idx = 1

let speed = 300 / speedEl.value

writeText()

function writeText(){
    textEl.innerText = text.slice(0 , idx)

    idx++

    if(idx > text.length){
        idx = 1
    }

        setTimeout(writeText , speed)
}
    
//when the input value changes
    speedEl.addEventListener('input' , (e)=>
    
    //update the speed value based on the new input
    //e.target.value is the number entered
        speed = 300 / e.target.value)
    

//e.target ---the actual element clicked