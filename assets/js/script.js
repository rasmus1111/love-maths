document.addEventListener("DOMContentLoaded", function() {
    let buttens = document.getElementsByTagName("button");

        for ( let button of buttens){
            button.addEventListener("click", funtion()){
                if (this.getAttribute("data-type") === "submit"){
                    alert("you clicked Submit");
                }else {
                    let gameType = this.getAttribute("data-type");
                    alert(`you clicked ${gameType}`);
                }
            }


        }
    

   
})

function runGame( ){

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