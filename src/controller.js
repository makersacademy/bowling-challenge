const scorecard = new Card();
const myRoll = document.querySelector('a');

function setRoll() {
  const rollScore = prompt('Please enter what you rolled.');
  if (!rollScore) {
    setRoll();
  } else {
    localStorage.setItem('roll', rollScore);
    const rollAsInt = parseInt(rollScore);
    scorecard.roll(rollAsInt);
  }
  console.log(scorecard.frames);
}

myRoll.onclick = function () {
  setRoll();
};
