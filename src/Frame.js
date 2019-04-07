// trying to encapsulate a frame class. 
function Frame(roll1, roll2 = 0, roll3 = 0) {
  var first = roll1;
  var second = roll2;
  var third = roll3;

  if (first === 10) {
    return 10;
  } else if ((first + second) === 10) {
    return 10;
  } else {
    return (first + second + third);
  };
};
