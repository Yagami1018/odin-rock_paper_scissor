const choices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const random = Math.floor(Math.random() * 3);
    return choices[random];
};

const getHumanChoice = () => {
    let choice = 0;
    let validInput = false;
    while (!validInput) {
        try {
            choice = Number.parseInt(prompt(`
                Rock-Paper-Scissors
                0 -> rock
                1 -> paper
                2 -> scissors
                what's your choice (0-2): `));
            if (!Number.isInteger(choice)) {
                throw new TypeError('Must be an integer');
            }
            if (choice >= 0 && choice <= 2) {
                validInput = true
            } else {
                throw new TypeError("Must be between 0 and 2");
            }
        } catch (err) {
            globalThis.alert(err);
        }
    }
    return choices[choice];
};

const playRound = () => {
    const computerChoice = getComputerChoice();
    const humanChoice = getHumanChoice();

    console.log(`
        Human Choice = ${humanChoice}
        Computer Choice = ${computerChoice}`);


    if (computerChoice === humanChoice) {
        return "It's a Tie";
    }

    switch (humanChoice) {
        case "rock":
            computerChoice === "paper" ? computerScore++ : humanScore++;
            return computerChoice === "paper" ? "You lose! Paper beats Rock" : "You win! Rock beats Paper";
        case "paper":
            computerChoice === "scissors" ? computerScore++ : humanScore++;
            return computerChoice === "scissors" ? "You lose! Scissor beats Paper" : "You win! Paper beats Rock";
        case "scissors":
            computerChoice === "rock" ? computerScore++ : humanScore++;
            return computerChoice === "rock" ? "You lose! Rock beats Scissors" : "You win! Scissors beats Paper";
    }
};

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`);
        console.log(playRound());
    }
    console.log(`
        Ties: ${5 - (humanScore + computerScore)}
        Human Score: ${humanScore}
        Computer Score: ${computerScore}
        `);

    if (humanScore > computerScore) {
        console.log(`Congrats, You are winner!`);
    } else {
        console.log(`Sorry, You are loser!`);
    }
}

playGame()