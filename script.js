function computerPlay() {
    let result = Math.floor(Math.random() * 3);
    switch (result) {
        case 0:
            return 'Rock';
        case 1:
            return 'Paper';
        case 2:
            return 'Scissors'
    }
}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === 'Rock') {
        if (computerChoice === 'Paper') {
            return 'Computer';
        } else if (computerChoice === 'Scissors') {
            return 'Player';
        }
    }
    else if (playerChoice === 'Paper') {
        if (computerChoice === 'Scissors') {
            return 'Computer';
        } else if (computerChoice === 'Rock') {
            return 'Player';
        }
    }
    else if (playerChoice === 'Scissors') {
        if (computerChoice === 'Rock') {
            return 'Computer';
        } else if (computerChoice === 'Paper') {
            return 'Player';
        }
    }
    return 'None';
}

function getGameResult(playerChoice, computerChoice) {
    if (playerChoice == null || playerChoice.length == 0) {
        return 'Uh-oh! Round skipped!'
    }
    playerChoice = playerChoice[0].toUpperCase() + playerChoice.substring(1).toLowerCase();
    if (playerChoice !== 'Rock' && playerChoice !== 'Paper' && playerChoice !== 'Scissors') {
        return 'Uh-oh! You can only pick rock or paper or scissors!';
    }
    
    let winner = getWinner(playerChoice, computerChoice);
    if (winner === 'Player') {
        return `You win! ${playerChoice} beats ${computerChoice}`;
    } else if (winner === 'Computer') {
        return `You lose! ${computerChoice} beats ${playerChoice}`;
    } else if (winner === 'None') {
        return `It's a draw! We both picked ${computerChoice}`;
    }
}

function playRound() {
    let playerChoice = prompt('Pick your choice! (rock / paper / scissors)');
    let result = getGameResult(playerChoice, computerPlay());
    alert(result);
}

function game() {
    alert("Hello! Welcome to rock-paper-scissors! Let's play 5 rounds!");
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    alert('Hope you had fun!')
}

game();