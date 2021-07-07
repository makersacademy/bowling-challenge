'use strict';

  function Frame() {
    this.rolls = new Array()
    this.bonus = 0
  }

  Frame.prototype.getFrameScore = function() {
    var score = 0
    $.each(this.rolls, function(index, value) {
      score += value.getRollScore()
    })
//    return score + this.getFrameBonus()
    return score
  }

  Frame.prototype.getFrameBonus = function() {
    return this.bonus
  }

  Frame.prototype.setFrameBonus = function(score) {
    this.bonus = score
  }

  Frame.prototype.addRoll = function(score) {
    this.rolls.push(new Roll(score))
  }

  Frame.prototype.getScores = function() {
    var scores = new Array()
    $.each(this.rolls, function(index, value) {
      scores.push(value.getRollScore())
    })
    return scores
  }

  Frame.prototype.getIndividualScore = function(roll) {
    return this.rolls[roll].getRollScore()
  }

  Frame.prototype.getNumberOfRolls = function() {
    return this.rolls.length
  }

  Frame.prototype.getStatus = function() {
    if (this.getNumberOfRolls() == 0) return "norolls"
    if (this.getIndividualScore(0) == 10) return "strike"
    if (this.getNumberOfRolls() == 2 && this.getFrameScore() == 10) return "spare"
    if (this.getNumberOfRolls() == 2 && this.getFrameScore() == 0) return "missed"
    if (this.getNumberOfRolls() == 2) return "over"
    return "notover"
  }
