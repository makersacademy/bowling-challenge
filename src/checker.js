function Checker () {
}

Checker.prototype.strikeCheck = function (firstScore) {
  if (firstScore === 10) {
    return true
  }
}

Checker.prototype.spareCheck = function (firstScore, secondScore) {
  if (firstScore != 10 && firstScore + secondScore === 10) {
    return true
  }
}

Checker.prototype.firstRollStrikeOrSpare = function(firstScore, secondScore, turn) {
  if (turn === 1) {
    if (this.strikeCheck(firstScore) || this.spareCheck(firstScore, secondScore)) {
      return true
  }
}
}

Checker.prototype.lastRollStrikeThisRollNot = function(lastFirstScore, firstScore) {
  if (this.strikeCheck(lastFirstScore) && !this.strikeCheck(firstScore)) {
      return true
    }
}
