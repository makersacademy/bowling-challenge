(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
var Game = require('./src/game')

$(document).ready(function () {

  var game = new Game

  $('#submit_score').on('click', function () {
    $('#input_score').val(function( index, value ) {
      var score = Number(value)
      game.roll(score)
      console.log(game.frames)
      updateTotalScore()
      updateFrameCard()
    })
  })

  function updateTotalScore() {
    var gameScore = game.calculateTotalScore()
    $('#total_score').text(gameScore)
  }

  function updateFrameCard() {
    var frames = game.frames
    var frameNumber = frames.length
    for (var i = 0; i < frameNumber; i++) {
      var idString = '#frame-' + (i+1)
      $(idString).text(frames[i].calculateTotalScore())
    }
  }
})


},{"./src/game":3}],2:[function(require,module,exports){
'use strict'

function Frame () {
  this.scores = []
}

Frame.prototype.addScore = function (score) {
  if (this.scores.length < 3) {
    this.scores.push(score)
  }
  this._closeFrameEarly()
}

Frame.prototype.calculateTotalScore = function () {
  const REDUCER = (accumulator, eachRollScore) => accumulator + eachRollScore
  return this.scores.reduce(REDUCER, 0)
}

Frame.prototype._closeFrameEarly = function () {
  if (this.scores.length === 2) {
    this._spareOrBetter()
  }
}

Frame.prototype._spareOrBetter = function () {
  if (this.calculateTotalScore() < 10) {
    this.scores.push(0)
  }
}

function frameFactory () {
  return new Frame()
}

// module.exports = Frame
module.exports = frameFactory

},{}],3:[function(require,module,exports){
'use strict'

var frameFactory = require('./frame')
var Pins = require('./pins')

function Game (args) {
  if (args === undefined) args = {}
  if (args.frameFactory === undefined) args.frameFactory = frameFactory
  if (args.pins === undefined) args.pins = new Pins()

  this.frameFactory = args.frameFactory
  this.frames = []
  this.needNewFrame = true
  this.pins = args.pins
}

Game.prototype.roll = function (rollScore) {
  this._isValidRoll(rollScore)
  this._makeNewFrame()
  this._sendFrames(rollScore)
  this._toggleNeedNewFrame(rollScore)
  this._pins().managePins(rollScore)
}

Game.prototype.calculateTotalScore = function () {
  const REDUCER = (accumulator, eachFrame) => accumulator + eachFrame.calculateTotalScore()
  return this.frames.reduce(REDUCER, 0)
}

Game.prototype._makeNewFrame = function () {
  if (this.frames.length === 10) {
    return
  }
  if (this.needNewFrame) {
    this.frames.push(this.frameFactory())
  }
}

Game.prototype._toggleNeedNewFrame = function (rollScore) {
  if (rollScore !== 10) {
    this.needNewFrame = !this.needNewFrame
  }
}

Game.prototype._sendFrames = function (rollScore) {
  for (let eachFrame of this.frames) {
    eachFrame.addScore(rollScore)
  }
}

Game.prototype._isValidRoll = function (score) {
  if (isNaN(score)) {
    throw new Error('Not a Number')
  }
  this._pins().isImpossibleScore(score)
}

Game.prototype._pins = function () {
  return this.pins
}

module.exports = Game

},{"./frame":2,"./pins":4}],4:[function(require,module,exports){
function Pins () {
  this.leftStanding = 10
  this.needReset = false
}

Pins.prototype.managePins = function (score) {
  if (this.needReset) {
    this.leftStanding = 10
  } else {
    this.leftStanding -= score
    this.needReset = true
  }
  this._resetAfterStrike(score)
}

Pins.prototype.isImpossibleScore = function (score) {
  if (score > this.leftStanding) {
    throw new Error('Not enough pins')
  }
}

Pins.prototype._resetAfterStrike = function (score) {
  if (score === 10) {
    this.leftStanding = 10
    this.needReset = false
  }
}

module.exports = Pins

},{}]},{},[1]);
