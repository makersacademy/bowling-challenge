'use strict';

function _whenFrame(scoreModified, gameScore, index) {
  scoreModified.push(gameScore[index].reduce((a, b) => a + b, 0))
}
function _whenSpare(gameScore, index, scoreModified) {
  let frameTotal = gameScore[index].reduce((a, b) => a + b, 0)
  let score = gameScore[index + 1][0]
  scoreModified.push(frameTotal + score)
}
function _whenStrike(gameScore, index, scoreModified) {
  let indexPlusOne = gameScore[index + 1].reduce((a, b) => a + b, 0)
  let indexPlusTwo = gameScore[index + 2][0]
  let score = gameScore[index + 1][0] === 10 ? indexPlusOne + indexPlusTwo : indexPlusOne
  let frameTotal = gameScore[index][0]
  scoreModified.push(frameTotal + score)
}
