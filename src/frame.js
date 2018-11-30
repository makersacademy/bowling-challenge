'use strict';

  function Frame() {
    this.rolls = new Array()
  }

  Frame.prototype.getFrameTotalScore = function() {
    var score = 0
    $.each(this.rolls, function(index, value) {
      score += value.getRollScore()
    })
    return score
  }

  Frame.prototype.addRoll = function(score) {
    this.rolls.push(new Roll(score))
  }

  Frame.prototype.getFrameScores = function() {
    var scores = new Array()
    $.each(this.rolls, function(index, value) {
      scores.push(value.getRollScore())
    })
    return scores
  }

  Frame.prototype.getIndividualFrameScore = function(roll) {
    return this.rolls[roll].getRollScore()
  }
