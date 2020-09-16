
// Game Values
let min = 1,
    max = 10,
    randomNumber = getRandomNum(min, max),
    trialsLeft = 3;

//UI Elements
const game = document.querySelector('.game'),
      minNum = document.querySelector('.min-num'),
      maxNUm = document.querySelector(".max-num"),
      guessBtn = document.querySelector('#submit')
      guessInput = document.querySelector('.input-number')
      message = document.querySelector('.message');

//Assign UI min and max
minNum.textContent = min;
maxNUm.textContent = max;

//Play again Event Listener
game.addEventListener('mousedown', (e)=>{
    if(e.target.className === 'play-again'){
        window.location.reload()
    }
})
//Listen for Guess
guessBtn.addEventListener('click', ()=>{
    let guess = parseInt(guessInput.value)

//Validate Input    
    if (isNaN(guess) || guess < min || guess > max){
        setMessage(`please enter a number between ${min} and ${max}`, 'red')
    }else{
        //Check If Won
        if (guess === randomNumber){
            //Game Over - won
           
           gameOver(true, `${randomNumber} is correct, you WIN!`)
        }else{
            //Wrong Number
            trialsLeft -= 1;
        
            if (trialsLeft === 0){
                //Game Over - lost
                gameOver(false, `game over, you lost. the correct number was ${randomNumber}`)
            }else{
                //Game continues - answer wrong
    
                 //Change Border Color
                 guessInput.style.borderColor = 'red'
                setMessage(`${guess} is not correct, ${trialsLeft} guesses left`,'red');
    
                //Clear Input
                guessInput.value = ''
             }
        }
    }
})
//Set Message
setMessage = (msg, color) => {
    message.style.color = color
    message.textContent = msg
}
gameOver = (won, msg) => {
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color
    message.style.color = color;
    setMessage(msg)

    //Play Again
    guessBtn.value = 'Play Again'
    guessBtn.className = 'play-again'
}

//Get Random Number 
function getRandomNum(min, max){
    console.log(Math.floor(Math.random()*max-min+1)+min)
}