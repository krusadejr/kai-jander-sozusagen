let tallyCount = 0;
const scoreDisplay = document.getElementById("score");
const tallyContainer = document.getElementById("tally-container");
const increaseButton = document.getElementById("increaseButton");
const resetButton = document.getElementById("resetButton");

function increaseTally() {
    tallyCount++;
    scoreDisplay.textContent = tallyCount;
}

function resetTally() {
    tallyCount = 0;
    scoreDisplay.textContent = tallyCount;
}

tallyContainer.addEventListener("click", increaseTally);
increaseButton.addEventListener("click", increaseTally);
resetButton.addEventListener("click", resetTally);

document.addEventListener("keydown", function (event) {
    if (event.key === " ") {
        increaseTally();
    }
});
