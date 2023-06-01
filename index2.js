// Question10
let randomNum = Math.floor(Math.random() *100 +1);
console.log(randomNum)
let inputNumber = document.querySelector(".input");
let guessText = document.querySelector(".startGuess")
let rightNum = document.querySelector(".questionMark")
let txt1 = document.querySelector(".txt1");
let txt2 = document.querySelector(".txt2");
let colorChange = document.querySelector("body")

count = 0;

function check(){
    console.log(inputNumber.value)
    
    if(randomNum > inputNumber.value){
        guessText.innerHTML = "Your Guess Is Low"
        count++;
        txt1.innerHTML = `💯 Chances : ${100 - count}`;
        
    }else if(randomNum < inputNumber.value){
        guessText.innerHTML = "Your Guess Is High"
        count++;
        txt1.innerHTML = `💯 Chances : ${100 -count}`;
        

    }else{
        guessText.innerHTML = "🤩🤩Hurray You Won 🤩🤩"
        rightNum.innerHTML = randomNum;
        
        txt1.innerHTML = `💯 Chances : ${100 - count}`;
        txt2.innerHTML = `🥇 Highscore : ${100- count}`;
        colorChange.style.backgroundColor = "green"
        inputNumber.style.backgroundColor = "green"
        
        

      

    }
 
}
function play(){
    colorChange.style.backgroundColor = "#27374D"
    inputNumber.style.backgroundColor = "#27374D"
    guessText.innerHTML = "Start guessing ..."
    txt1.innerHTML = `💯 Chances : 100`
    rightNum.innerHTML = "?";
    

     
  }