document.addEventListener("DOMContentLoaded", function() {
    let buttens = document.getElementsByTagName("button");

    for ( let button of buttens){
        button.addEventListener("click", function(){
            if (this.getAttribute("data-type") === "submit"){
                    alert("you clicked Submit");
            }else {
                    let gameType = this.getAttribute("data-type");
                    alert(`you clicked ${gameType}`);
            }
        })
    }
})

/**
 * The main game "loop", ccalled when the script is first loaded
 * and after the user's answer has been processed
 */

function runGame( ){
   let num1 = Math.floor(Math.random() * 25 ) + 1;
   let num2 = Math.floor(Math.random() * 25 ) + 1;
}


function checkAnswer(){

}

function calculateCorrectAnswer(){

}

function incrementScore(){

}

function incrementWrongAnswer(){

}

function displayAdditionQuestion(){

}
function displaySubtractQuestion(){

}

function displayMultiplyQuistion(){

}