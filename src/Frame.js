// CREATING A FRAME CLASS!!!! 
function Frame(roll1, roll2, roll3) {
  var first = roll1;
  var second = roll2;
  var third = roll3;

  if (first === 10) {
    return 10;
  } else if ((first + second) === 10) {
    return 10;
  } else {
    return [first + second + third];
  };
};

frame = new Frame();
console.log(frame);
