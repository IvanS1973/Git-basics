const scoreTracker = {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
};

// roll dice function get random number from 1 - 6
function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    scoreTracker[roll] ++; // increase score for rolled number
    console.log(`You rolled a ${roll}`);

}

rollDice();

function displayScores() {
    console.log("Score Tracker:");
    for (const roll in scoreTracker) {
        console.log(`Number ${roll}: ${scoreTracker[roll]} times`);
    }
}

for (let i = 0; i < 50; i++) {
    rollDice();
}

// display final scores 
displayScores();
