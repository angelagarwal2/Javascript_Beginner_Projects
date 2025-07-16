const minNum=50;
const maxNum=100;
const answer=Math.floor(Math.random()*(maxNum-minNum+1))+minNum;
const myInput=document.getElementById("myInput");
const mySubmit=document.getElementById("mySubmit");
const myLabel=document.getElementById("myLabel");
const resultElement=document.getElementById("resultElement");

let attempts=0;
let guess;
let running=true;

myLabel.textContent=`Guess a number between ${minNum} - ${maxNum}: `;
mySubmit.onclick=function(){
if(!running){ return; }
    guess=myInput.value;
    guess=Number(guess);
    if(isNaN(guess)){
        resultElement.textContent='Please enter a valid number';
    }
    else if(guess<minNum||guess>maxNum){
        resultElement.textContent='Please enter a valid number';
    }
    else{
        attempts++;
        if(guess<answer){
            resultElement.textContent=`TOO LOW! TRY AGAIN`;
        }
        else if(guess>answer){
            resultElement.textContent=`TOO HIGH! TRY AGAIN`;
        }
        else{
            resultElement.textContent=`CORRECT! The answer was ${answer}. It took you ${attempts} attempts.`;
            running=false;
        }
    }
    myInput.value="";
};
