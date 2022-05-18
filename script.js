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

function displayResult(playerChoice, computerChoice, winner) {
    const infoDiv = document.querySelector('#info');
    if (winner === 'Player') {
        infoDiv.innerText = `You win! ${playerChoice} beats ${computerChoice}`;
    } else if (winner === 'Computer') {
        infoDiv.innerText = `You lose! ${computerChoice} beats ${playerChoice}`;
    } else if (winner === 'None') {
        infoDiv.innerText = `It's a draw! We both picked ${computerChoice}`;
    }
}

function updateScore(scores, winner) {
    if (winner === 'Player') {
        scores[0] += 1;
    } else if (winner === 'Computer') {
        scores[1] += 1;
    }
    const scoreDiv = document.querySelector('#score');
    scoreDiv.innerText = `Player: ${scores[0]} | Computer: ${scores[1]}`;
}

function displayResult(playerChoice, computerChoice, winner) {
    const infoDiv = document.querySelector('#info');
    if (winner === 'Player') {
        infoDiv.innerText = `You win! ${playerChoice} beats ${computerChoice}`;
    } else if (winner === 'Computer') {
        infoDiv.innerText = `You lose! ${computerChoice} beats ${playerChoice}`;
    } else if (winner === 'None') {
        infoDiv.innerText = `It's a draw! We both picked ${computerChoice}`;
    }
}

function playRound(playerChoice, scores) {
    const computerChoice = computerPlay();
    let winner = getWinner(playerChoice, computerChoice);
    updateScore(scores, winner)
    displayResult(playerChoice, computerChoice, winner);

}

let scores = [0, 0];

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id, scores))
});