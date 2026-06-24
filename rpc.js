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


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
    if (computerChoice == humanChoice) return "tie";
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

    console.log (playRound(getHumanChoice(), getComputerChoice()));
    console.log (playRound(getHumanChoice(), getComputerChoice()));
    console.log (playRound(getHumanChoice(), getComputerChoice()));
    console.log (playRound(getHumanChoice(), getComputerChoice()));
    console.log (playRound(getHumanChoice(), getComputerChoice()));

    return humanScore > computerScore ? "you win" : "you lose";
}

console.log(playGame());
