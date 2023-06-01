// Question 4
let ques4 = document.getElementsByClassName('question4');
ques4[0].addEventListener('click', ()=>{
    ques4[0].innerHTML = "Hello World"
})


// Question 5
let ques5 = document.getElementsByClassName('question5');
function replace(){
    ques5[0].innerHTML = "Welcome to Elevation academy"
}

// Question 6
let ques6 = document.getElementById('heading');
ques6.addEventListener('click',()=>{
    ques6.style.color = 'red'
})

// Question 7
let ques7 = document.getElementsByClassName('question7');
let change = true
function cfd(){
    
    if(change){
        ques7[0].style.flexDirection = 'column'
        change =false;
    }else{
        ques7[0].style.flexDirection = 'row';
        change = true;
    }
    
}

// Question 9

function setTime(){
    let date = new Date();
let hour = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
let am_pm = "AM"

if(hour > 12){
    hour -= 12
    am_pm = "PM"
}
hour = (hour<10)?"0" +hour : hour
min = (min<10)?"0" +min : min
sec = (sec<10)?"0" +sec : sec

let time = `Hours ${hour} : Minutes ${min} : Seconds ${sec } : ${am_pm}`
document.getElementById("clock").innerHTML = time
const myTime = setTimeout(setTime , 1000)
}
setTime()




