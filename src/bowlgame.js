function Game() {
};
Game.prototype.reset = function() {
  bowl.rolls = [];
};
Game.prototype.score = function() {
  var total = 0;
  for (var i = 0, l = bowl.rolls.length; i < l; i++) {
    if (strike()) {
      strikeScore();
    } else if (spare()) {
      spareScore();
      i+=1;
    } else {
      normalScore();
      i+=1;
    };
  };
  return total;

  function spare() {
    return bowl.rolls[i] + bowl.rolls[i+1] === 10;
  };

  function spareScore() {
    return total += 10 + bowl.rolls[i+2];
  };

  function strike() {
    return bowl.rolls[i] === 10;
  };

  function strikeScore() {
    return total += bowl.rolls[i] + bowl.rolls[i+1] + bowl.rolls[i+2];
  };

  function normalScore() {
    return total += bowl.rolls[i] + bowl.rolls[i+1];
  };
};

// Game.prototype.score = function() {
//   var total = 0;
//   var i = 0;
//   for (var frame = 0; frame < 10; frame++) {
//     if (spare()) {
//       spareScore();
//       i+=2;
//     } else if (strike()) {
//       strikeScore();
//       i+=1;
//     } else {
//       normalScore();
//       i+=2;
//     };
//   };
//   return total;
//
//   function spare() {
//     return bowl.rolls[i] + bowl.rolls[i+1] === 10;
//   };
//
//   function spareScore() {
//     return total += 10 + bowl.rolls[i+2];
//   };
//
//   function strike() {
//     return bowl.rolls[i] === 10;
//   };
//
//   function strikeScore() {
//     return total += bowl.rolls[i] + bowl.rolls[i+1] + bowl.rolls[i+2];
//   };
//
//   function normalScore() {
//     return total += bowl.rolls[i] + bowl.rolls[i+1];
//   };
// };

function Bowl() {
  this.rolls = [];
};
Bowl.prototype.roll = function(skittles) {
  this.rolls.push(skittles);
};
Bowl.prototype.roll0 = function() {
  bowl.roll(0);
  this.rolls.push(0);
};
Bowl.prototype.roll1 = function() {
  bowl.roll(1);
  this.rolls.push(1);
};
Bowl.prototype.roll2 = function() {
  bowl.roll(2);
  this.rolls.push(2);
};
Bowl.prototype.roll3 = function() {
  bowl.roll(3);
  this.rolls.push(3);
};
Bowl.prototype.roll4 = function() {
  bowl.roll(4);
  this.rolls.push(4);
};
Bowl.prototype.roll5 = function() {
  bowl.roll(5);
  this.rolls.push(5);
};
Bowl.prototype.roll6 = function() {
  bowl.roll(6);
  this.rolls.push(6);
};
Bowl.prototype.roll7 = function() {
  bowl.roll(7);
  this.rolls.push(7);
};
Bowl.prototype.roll8 = function() {
  bowl.roll(8);
  this.rolls.push(8);
};
Bowl.prototype.roll9 = function() {
  bowl.roll(9);
  this.rolls.push(9);
};
Bowl.prototype.roll10 = function() {
  bowl.roll(10);
  this.rolls.push(10);
};

var bowl = new Bowl();
var game = new Game();
