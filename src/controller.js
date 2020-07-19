let scorecard = new Card();
let myRoll = document.querySelector('a');


function setRoll() {
  let rollScore = prompt('Please enter what you rolled.');
  if (!rollScore) {
    setRoll();
  } else {
    localStorage.setItem('roll', rollScore);
    let rollAsInt = parseInt(rollScore);
    scorecard.roll(rollAsInt);
  }
  console.log(scorecard.frames);
}

// if (!localStorage.getItem('roll')) {
//   setRoll();
// } else {
//   let storedRoll = localStorage.getItem('roll');
//   myHeading.textContent = 'Welcome to the super awesome test website, ' + storedName;
// }

myRoll.onclick = function () {
  setRoll();
}

