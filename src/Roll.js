// CREATING A ROLL CLASS!!!!!
function Roll() {
  var output1 = 0;
  var output2 = 0;
  var output3 = 0;
  var randomRoll = Math.floor(Math.random() * 11);
  var randomRoll2 = Math.floor(Math.random() * 11);

  if (randomRoll === 10) {
    // return a strike..... 
    return [output1 = 10, output2, output3];
  } else if ((randomRoll + randomRoll2) >= 10) {
    // return a spare
    return [output1, output2 = 10, output3];
  } else {
    /* 
    just return a random number 1-10, to represent
    a roll which wasnt a strike or spare. Has to be a second 
    random generator... else will return same number. 
    */ 
    return [randomRoll, randomRoll2, 0];
  };
};

roll = new Roll();
console.log(roll);
