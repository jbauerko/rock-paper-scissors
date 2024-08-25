function getComputerChoice() {
    //Generate a random number from 0 to 2
    randomNum = Math.floor(Math.random() * 3)

    //Check what value the random number is
    switch (randomNum) {
        case (0):
            return 'rock';
            break;
        case (1):
            return 'paper';
            break;
        case (2):
            return 'scissors';
            break;
    }
}

function getHumanChoice() {
    playerChoice = prompt('Enter rock, paper or scissors: ');
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors'){
        return playerChoice;
    }
    return -1;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log('Draw!');
        }
        else if (humanChoice === 'rock' && computerChoice === 'scissors'
            || humanChoice === 'paper' && computerChoice === 'rock'
            || humanChoice === 'scissors' && computerChoice === 'paper'
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
            humanScore++;
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore++;
        }
    }

    for (let i=0; i < 5; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Player: ${humanScore} Computer: ${computerScore}`);
    }
}

playGame();
