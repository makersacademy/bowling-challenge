function Checker() {}

Checker.prototype.strikeCheck = function(firstScore) {
  if (firstScore === 10) {
    return true;
  } else {
    return false;
  }
};

Checker.prototype.spareCheck = function(firstScore, secondScore) {
  if (firstScore != 10 && firstScore + secondScore === 10) {
    return true;
  } else {
    return false;
  }
};

Checker.prototype.firstRollStrikeOrSpare = function(
  firstScore,
  secondScore,
  turn
) {
  if (
    turn === 1 &&
    (this.strikeCheck(firstScore) || this.spareCheck(firstScore, secondScore))
  ) {
    return true;
  } else {
    return false;
  }
};

Checker.prototype.lastRollStrikeThisRollNot = function(
  lastFirstScore,
  firstScore
) {
  if (this.strikeCheck(lastFirstScore) && !this.strikeCheck(firstScore)) {
    return true;
  } else {
    return false;
  }
};

Checker.prototype.lastTwoStrikesThisRollNot = function(lastLastFirstScore, lastFirstScore, firstScore) {
  if (this.strikeCheck(lastLastFirstScore) &&
    this.strikeCheck(lastFirstScore) &&
    !this.strikeCheck(firstScore)) {
      return true
    } else {
      return false
    }
}

Checker.prototype.tripleStrike = function(lastLastFirstScore, lastFirstScore, firstScore) {
  if (this.strikeCheck(lastLastFirstScore) &&
    this.strikeCheck(lastFirstScore) &&
    this.strikeCheck(firstScore)) {
      return true
    } else {
      return false
    }
}
