document.addEventListener("DOMContentLoaded", function() {
    let buttens = document.getElementsByTagName("button");

    for ( let button of buttens){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                    checkAnswer();
            }else {
                    let gameType = this.getAttribute("data-type");
                    alert(`you clicked ${gameType}`);
            }
        })
    }
    runGame("addition")
})

/**
 * The main game "loop", ccalled when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame(gameType){
   let num1 = Math.floor(Math.random() * 25 ) + 1;
   let num2 = Math.floor(Math.random() * 25 ) + 1;

   if (gameType === "addition"){
    displayAdditionQuestion(num1, num2);
   }else{
    alert(`Unknown game type: ${gameType} `);
    throw `Unknown game type: ${gameType}.Aborting`;
   }
}

/**
 * Checks the answer against the first element in 
 * the returned calculateCorrectAnswer array
 */

function checkAnswer(){
     let userAnswer = parseInt(document.getElementById("answer-box").value);
     let calculatedAnswer = calculateCorrectAnswer();
     let isCorrect = userAnswer === calculatedAnswer[0];

     if (isCorrect){
        alert("Hey! You got it right :D");
        incrementScore();
     }else{
        alert(`Awww.... you answered ${userAnswer}. The correct answer was ${calculatedAnswer}`);
        incrementWrongAnswer();
     }

     runGame(calculatedAnswer[1]);

}
/**
 * Gets the operands (the numbers) and the operator (plus, minus, etc)
 * directly from the dom, and returns the correct answer.
 */

function calculateCorrectAnswer(){

    let operand1 = parseInt(document.getElementById('operand1').innerText);
    let operand2 = parseInt(document.getElementById('operand2').innerText);
    let operator = parseInt(document.getElementById('operator').innerText);

    if (operator === "+"){
        return [operand1 + operand2, "addition"]
    }else {
        alert(`Unimplemented operator ${operator}`);
        throw ` Unimplomented operator ${operator}.Aborting`;
    }

}

/**
 * Gets the current tally of incorrect answers from the DOM and increments it by 1
 */
function incrementScore(){
   let oldScore = parseInt(document.getElementById("incorrect").innerText);
   document.getElementById("incorrect").innerText = ++oldScore;
}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(operand1, operand2){
    document.getElementById('operand1').textContent = operand1;
    document.getElementById('operand2').textContent = operand2;
    document.getElementById('operator').textContent = "+";

}
function displaySubtractQuestion(){

}

function displayMultiplyQuistion(){

}