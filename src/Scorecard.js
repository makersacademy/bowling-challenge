var Scorecard = function() {
  this.rolls = [];
  this.frameTotals = [];
};

Scorecard.prototype.roll = function(roll1, roll2, roll3) {
  if (typeof roll3 === 'undefined') {roll3 = 0;}
  if (roll1 > 10 || roll2 > 10 || roll3 > 10) {
    throw new Error("can't score more than 10!");
  }
  if (((roll1 + roll2) > 10) && (this.rolls.length != 9)) {
    throw new Error("You cannot score more than 10 from two rolls!");
  }
  if (this.rolls.length === 9) {
    if (((roll1 || roll2) < 10) && ((roll1 + roll2) < 10)) {
      if (roll3 > 0) {
        throw new Error("Cannot use 3rd roll as you did not have a strike");
      }
    } else {
      return this.rolls.push([roll1, roll2, roll3]);
    }
  }
  if (this.rolls.length === 10) {
    throw new Error("You cannot play more than 10 frames!");
  }
  this.rolls.push([roll1, roll2]);
};

Scorecard.prototype.frameTotal = function(i) {
  var f1r1 = (this.rolls[i - 1][0]); // f = frame , r = roll
  var f1r2 = (this.rolls[i - 1][1]);
  var f1r3 = (this.rolls[i - 1][2]);
  var total = (f1r1 + f1r2);

  if (this.rolls.length > i) {
    var f2r1 = (this.rolls[i][0]);
    var f2r2 = (this.rolls[i][1]);
  }

  if (this.rolls.length > i + 1) {
    var f3r1 = (this.rolls[i + 1][0]);
    var f3r2 = (this.rolls[i + 1][1]);
  }

  if ((i === 9) || (i === 10)) {
    if (i === (9)) {
      if ((f1r1 || f1r2) === 10) {
        return total += (f2r1 + f2r2);
      } else if (total === 10) {
        return total += f2r1;
      } else {
        return total;
      }
    } else {
      if (total > 9) {
        return total += f1r3;
      } else {
        return total;
      }
    }
  } else {
    if (((f1r1 || f1r2) === 10) && (f2r1) === 10) {
      return total += (f2r1 + f2r2 + f3r1);
    } else if ((f1r1 || f1r2) === 10) {
      return total += (f2r1 + f2r2);
    } else if (total === 10) {
      return total += f2r1;
    } else {
      return total;
    }
  }
};

Scorecard.prototype.runningTotal = function() {
  var total = 0;
  this.frameTotals = [];
  for (var i = 1; i < (this.rolls.length) + 1; i++) {
    if (isNaN(this.frameTotal(i))) {} else {
      this.frameTotals.push((this.frameTotal(i)));
    }
  }
  for (i = 0; i < (this.frameTotals.length); i++) {
    total += (this.frameTotals[i]);
  }
  return total;
};
