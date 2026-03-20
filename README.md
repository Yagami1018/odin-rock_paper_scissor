Rock Paper Scissors
A console-based Rock Paper Scissors game built with vanilla JavaScript as part of The Odin Project curriculum.

About
This project is one of the first JavaScript projects in The Odin Project's Foundations course. The player competes against a computer opponent over 5 rounds. All input and output is handled through the browser console using prompt() and console.log().

How to Play
Clone or download the repo and open index.html in your browser
Open the browser console (F12 → Console)
When prompted, type rock, paper, or scissors
The computer randomly selects its choice
The round result and running score are logged to the console
The game runs for 5 rounds
What I Learned
Function Scope
Defining playRound inside playGame reinforced how scope works in JavaScript — inner functions have access to the outer function's context, but must be defined before they are called since arrow functions are not hoisted.

Loops
Building the playGame function taught me how a for loop repeats an action a fixed number of times and how each iteration can collect fresh data independently.

Separation of Concerns
I practiced splitting logic into focused functions — playRound handles a single round, playGame drives the overall flow. This made the code easier to read and debug.

Built With
HTML
CSS
JavaScript (vanilla)
Acknowledgements
The Odin Project — for the project prompt and curriculum
Author
Hector Cuza
