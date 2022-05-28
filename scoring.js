const calculateScore = (userInput) => {
  let scores = userInput.map((arr, i) => {
    if ((arr[0] === 10) && (i < 9)) {
      return 10 + userInput[i+1].reduce((a, b) => a + b); // strike
    } else if (((arr.reduce((a,b) => a + b)) === 10) && (i < 9)) {
      return 10 + userInput[i+1][0]; // spare
    } else {
      return arr.reduce((a,b) => a + b);
    };
  });
  return scores.reduce((a,b) => a + b);
};

module.exports = calculateScore;