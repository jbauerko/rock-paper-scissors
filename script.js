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

    if (playerChoice === 'rock' || playerChoice === 'paper' || playerChoice === 'scissors'){
        return playerChoice;
    }
    return -1;
}