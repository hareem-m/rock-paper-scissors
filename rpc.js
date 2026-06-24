function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3)
    if (rand == 0) return "rock";
    if (rand == 1) return "paper";
    if (rand == 2) return "scissors";
}

function getHumanChoice(){
    let input = prompt("Round starting! Enter rock, paper, or scissors:");
    return input.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    let humanScore = 0;
    let computerScore = 0;
    if (computerChoice == humanChoice) return "tie ";
    else if (humanChoice == "rock" && computerChoice == "scissors"){
        humanScore++;
        return "you win, rock beats scissors";
        
    }
    else if (humanChoice == "scissors" && computerChoice == "paper"){
        humanScore++;
        return "you win, scissors beats paper";
        
    } 
    else if (humanChoice == "paper" && computerChoice == "rock"){
        humanScore++;
        return "you win, paper beats rock";
        
    }

    else if (computerChoice == "paper" && humanChoice == "rock"){
        computerScore++;
        return "you lose, paper beats rock";
        
    }
    else if (computerChoice == "scissors" && humanChoice == "paper"){
        computerScore++;
        return "you lose, scissors beats paper";
        
    }
    else if (computerChoice == "rock" && humanChoice == "scissors"){
        computerScore++;
        return "you lose, rock beats scissors";
        
    }
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;

    function playRound(humanChoice, computerChoice){
        rounds++;
        if (computerChoice == humanChoice) return "tie";
        else if (humanChoice == "rock" && computerChoice == "scissors"){
            humanScore++;
            return "you win, rock beats scissors ";
            
        }
        else if (humanChoice == "scissors" && computerChoice == "paper"){
            humanScore++;
            return "you win, scissors beats paper ";
            
        } 
        else if (humanChoice == "paper" && computerChoice == "rock"){
            humanScore++;
            return "you win, paper beats rock ";
            
        }

        else if (computerChoice == "paper" && humanChoice == "rock"){
            computerScore++;
            return "you lose, paper beats rock ";
            
        }
        else if (computerChoice == "scissors" && humanChoice == "paper"){
            computerScore++;
            return "you lose, scissors beats paper ";
            
        }
        else if (computerChoice == "rock" && humanChoice == "scissors"){
            computerScore++;
            return "you lose, rock beats scissors ";
            
        }
    }   



    rockBtn.addEventListener("click", (e) => {
        result = document.createElement("p");
        result.textContent = playRound("rock", getComputerChoice());
        result.textContent += "| human: " + humanScore + " computer: " + computerScore; 
        results.appendChild(result);
        console.log(rounds);
        if (rounds === 5) {
        final = document.createElement("p");
        if (humanScore === computerScore) final.textContent = "tied";
        else final.textContent = humanScore > computerScore ? "you win" : "you lose";
        results.appendChild(final);

        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        }

    });
    paperBtn.addEventListener("click", (e) => {
        result = document.createElement("p");
        result.textContent = playRound("paper", getComputerChoice());
        result.textContent += "| human: " + humanScore + " computer: " + computerScore;
        results.appendChild(result);
        console.log(rounds);
        if (rounds === 5) {
        final = document.createElement("p");
        if (humanScore === computerScore) final.textContent = "tied";
        else final.textContent = humanScore > computerScore ? "you win" : "you lose";
        results.appendChild(final);


        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        }


    });
    scissorsBtn.addEventListener("click", (e) => {
        result = document.createElement("p");
        result.textContent = playRound("scissors", getComputerChoice());
        result.textContent += "| human: " + humanScore + " computer: " + computerScore;
        results.appendChild(result);
        console.log(rounds);
        if (rounds === 5) {
        final = document.createElement("p");
        if (humanScore === computerScore) final.textContent = "tied";
        else final.textContent = humanScore > computerScore ? "you win" : "you lose";
        results.appendChild(final);


        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
        }

    });
    

}

const rockBtn = document.getElementById("rockbtn");
const paperBtn = document.querySelector("#paperbtn");
const scissorsBtn = document.querySelector("#scissorsbtn");
const results = document.querySelector("#results");

playGame();

