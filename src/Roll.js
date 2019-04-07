
function Roll() {
  var output1 = 0;
  var output2 = 0;
  var output3 = 0;
  var randomRoll = Math.floor(Math.random() * 11);

  if (randomRoll === 10) {
    // return a strike..... 
    return [output1 = 10, output2, output3];
  } else if ((randomRoll + randomRoll) === 10) {
    // return a spare
    return [output1, output2 = 10, output3];
  } else {
    return [randomRoll];
  };
};

roll = new Roll();

console.log(roll);