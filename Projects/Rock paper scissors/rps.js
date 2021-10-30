var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div =  document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function main(){
    rock_div.addEventListener('click', function() {
        game("r");
    })

    paper_div.addEventListener('click', function() {
        game("p");
    })
    
    scissors_div.addEventListener('click', function() {
        game("s");
    })   
}

main();

function getComputerChoice(){
    const choices = ["r", "p", "s"]
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function game(userChoice){
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function convertToWord(letter){
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors"; 
}

function win(userChoice, computerChoice){
    const subUser = "user".fontsize(3).sub();
    const subComp = "comp".fontsize(3).sub();
    const glow_div = document.getElementById(userChoice); 
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(userChoice)}${subUser} beats ${convertToWord(computerChoice)}${subComp}. You Win!!!`;
    glow_div.classList.add('green-glow');
    setTimeout(function(){ glow_div.classList.remove('green-glow')}, 300); 
}

function lose(userChoice, computerChoice){
    const subUser = "user".fontsize(3).sub();
    const subComp = "comp".fontsize(3).sub();
    const glow_div = document.getElementById(userChoice); 
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = `${convertToWord(computerChoice)}${subComp} beats ${convertToWord(userChoice)}${subUser}. You Lose...`;
    glow_div.classList.add('red-glow');
    setTimeout(function(){ glow_div.classList.remove('red-glow')}, 300); 
}

function draw(userChoice, computerChoice){
    const subUser = "user".fontsize(3).sub();
    const subComp = "comp".fontsize(3).sub(); 
    const glow_div = document.getElementById(userChoice);
    result_div.innerHTML = `${convertToWord(userChoice)}${subUser} equals ${convertToWord(computerChoice)}${subComp}. It's a Draw.`;
    glow_div.classList.add('white-glow');
    setTimeout(function(){ glow_div.classList.remove('white-glow')}, 300);
}
