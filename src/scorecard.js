'use strict';

  function Scorecard() {
    this.frames = new Array()
    this.addFrame()
  }

  Scorecard.prototype.getCurrentScore = function() {
    var score = 0
    $.each(this.frames, function(index, value) {
      score += value.getFrameScore()
    })
    return score
  };

  Scorecard.prototype.addScore = function(score) {
    if (this.lastFrameEnded() === true) this.addFrame()
    this.lastFrame().addRoll(score)
  }

  Scorecard.prototype.lastFrame = function() {
    return this.frames[this.frames.length - 1]
  }

  Scorecard.prototype.lastFrameEnded = function() {
    status = this.getLastFrameStatus()
    return !(status === "norolls" || status === "notover")
  }

  Scorecard.prototype.getLastFrameStatus = function() {
    return this.lastFrame().getStatus()
  }

  Scorecard.prototype.addFrame = function() {
    this.frames.push(new Frame())
  }
