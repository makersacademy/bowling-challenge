"use strict"

var GameModel = function(FrameModel) {
  this.framesConstructor = FrameModel

  this.startGame = function() {
    this.resetGame()
    this.newFrame()
  }

  this.resetGame = function() {
    this.framesArray = []
    this.frame = 0
    this.roll = 1
    this.total = 0
    this.isGameComplete = false
  }

  this.newFrame = function() {
    this.frame += 1
    this.roll = 1
    this.framesArray.push(new this.framesConstructor(this.frame))
  }

  this.numButtons = function(selection = 10) {
    if (this.roll == 1 || this.roll == 3 || selection == 10) {
      return 10
    }
    else {
      return (10 - selection)
    }
  }

  // return id, frame, and roll to update
  this.addRoll = function(selection) {
    var newScore = {'score': selection, 'frame': this.frame, 'roll': this.roll}
    if (selection == 10) {
      newScore['score'] = 'X'
      if (this.frame !== 10) {
        newScore['roll'] = 2
      }
    }
    else if (this.roll == 2 && (selection + this.lastRoll) == 10) {
      newScore['score'] = '/'
    }
    return newScore
  }

  // return array of frame totals to be updated
  this.updateScores = function(selection) {
    this.updateFrames(selection)
    this.updateGame(selection)
    return this.newScores
  }

  this.updateFrames = function(selection) {
    this.newScores = []
    this.framesArray = this.framesArray.filter(frame => this.evalFrame(frame, selection))
  }

  this.evalFrame = function(frame, selection) {
    var score = frame.addRoll(selection)
    if (score) {
      this.total += score[0]
      this.newScores.push({'total': this.total, 'frame': score[1]})
    }
    else {
      return true
    }
  }

  this.updateGame = function(selection) {
    // provide functionality for final frame
    if (this.frame == 10) {
      if (this.roll == 1 ) {
        this.roll = 2
      }
      else if (this.roll == 2) {
        if (this.lastRoll == 10 || (this.lastRoll + selection) == 10) {
          this.roll = 3
        }
        else {
          this.isGameComplete = true
        }
      }
      else {
        this.isGameComplete = true
      }
    }
    else {
      if (this.roll == 2 || selection == 10) {
        this.newFrame()
      }
      else {
        this.roll = 2
      }
    }
  }
}
