const choices = ['👊', '✋', '✌️'];
const playerChoice = document.getElementById('pChoice');
const computerChoice = document.getElementById('cChoice');
const result = document.getElementById('result');
const pScore = document.getElementById('pScore');
const cScore = document.getElementById('cScore');
const ties = document.getElementById('ties');
const roundNum = document.getElementById('roundNum');
const winner = document.getElementById('winner');

let humanScore = 0;
let computerScore = 0;
let tiesCount = 0;
let roundsCount = 1;

const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3);
    computerChoice.textContent = `Computer Choice: ${choices[random]}`;
    return choices[random];
};

const getHumanChoice = humanChoice => {
    switch (humanChoice) {
        case 'rock':
            playerChoice.textContent = 'Player Choice: 👊';
            return '👊';
        case 'paper':
            playerChoice.textContent = 'Player Choice: ✋';
            return '✋';
        case 'scissors':
            playerChoice.textContent = 'Player Choice: ✌️';
            return '✌️';
    }
};

const playRound = (player, computer) => {
    switch (player) {
        case '👊':
            if (computer == '✋') {
                computerScore++;
                result.textContent = 'Result: You lose! Paper beats Rock';
            } else {
                humanScore++;
                result.textContent = 'Result: You win! Rock beats Paper';
            }
            break;
        case '✋':
            if (computer == '✌️') {
                computerScore++;
                result.textContent = 'Result: You lose! Scissor beats Paper';
            } else {
                humanScore++;
                result.textContent = 'Result: You win! Paper beats Rock';
            }
            break;
        case '✌️':
            if (computer == '👊') {
                computerScore++;
                result.textContent = 'Result: You lose! Rock beats Scissors';
            } else {
                humanScore++;
                result.textContent = 'Result: You win! Scissors beats Paper';
            }
    }
};

const playGame = pChoice => {
    if (humanScore === 5 || computerScore === 5) return;
    roundsCount++;
    const humanChoice = getHumanChoice(pChoice);
    const computerChoice = getComputerChoice();

    if (computerChoice == humanChoice) {
        result.textContent = "Result: It's a Tie";
        tiesCount++;
    } else {
        playRound(humanChoice, computerChoice);
    }

    pScore.textContent = `Player Score: ${humanScore}`;
    cScore.textContent = `Computer Score: ${computerScore}`;
    ties.textContent = `Ties: ${tiesCount}`;
    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === computerScore) {
            winner.textContent = "It's Tied";
            winner.classList.add('result');
        } else if (humanScore > computerScore) {
            winner.textContent = `Congrats, You are the winner!`;
            winner.classList.add('pChoice');
        } else {
            winner.textContent = `Sorry, You are the loser!`;
            winner.classList.add('cChoice');
        }
    } else {
        roundNum.textContent = `Round: ${roundsCount}`;
    }
};
