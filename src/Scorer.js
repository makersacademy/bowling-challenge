function Scorer () {
  this.rolls = []
  this.bonus = []
  this.notes = []

  this.totalScore = 0
}

Scorer.prototype.storeScore = function (number, id) {
  this.rolls[id] = parseInt(number, 10)
}

Scorer.prototype.setBonusToNull = function (i) {
  this.notes[(i + 1) / 2] = ''
  this.bonus[(i + 1) / 2] = null
}

Scorer.prototype.logSpare = function (i) {
  this.bonus[(i + 1) / 2] = this.rolls[(i + 2)]
  this.notes[(i + 1) / 2] = 'Spare'
}

Scorer.prototype.checkSpare = function (i) {
  return (this.rolls[i] < 10) && ((this.rolls[i] + this.rolls[(i + 1)]) === 10)
}

Scorer.prototype.checkStrike = function (i) {
  return (this.rolls[i] === 10)
}

Scorer.prototype.logStrike = function (i) {
  this.notes[(i + 1) / 2] = 'Strike'
  this.logStrikeBonus(i)
}

Scorer.prototype.bonusCalculator = function () {
  var i = 1
  for (i = 1; i < 21; i += 2) {
    if (this.checkSpare(i)) this.logSpare(i)
    if (this.checkStrike(i)) this.logStrike(i)
  }
}

Scorer.prototype.logStrikeBonus = function (i) {
  if ((this.rolls[(i + 2)] === 10) && (i < 19)) {
    this.bonus[(i + 1) / 2] = (this.rolls[(i + 2)] + this.rolls[(i + 4)])
  } else {
    this.bonus[(i + 1) / 2] = (this.rolls[(i + 2)] + this.rolls[(i + 3)])
  }
}

Scorer.prototype.updatedBonusNotes = function () {
  var i = 1
  for (i = 1; i < 20; i++) {
    if (i) {
      $('#bonus-' + i).text(this.bonus[i]);
      $('#note-' + i).text(this.notes[i])
    }
  }
}

Scorer.prototype.calculateTotalScore = function () {
  var totalScoreArray = this.rolls.slice(1, 21).concat(this.bonus)
  const reducer = (accumulator, currentValue) => accumulator + currentValue
  this.totalScore = totalScoreArray.reduce(reducer)
}

Scorer.prototype.removeNullsFromRolls = function () {
  this.rolls = this.rolls.map(function (val, i) {
    return isNaN(val) ? 0 : val
  })
}
