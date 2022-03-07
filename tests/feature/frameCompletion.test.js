const Frame = require('../../frame')
const Scoreboard = require('../../scoreboard')

describe ('test for completing a single frame', () => {
  it ('passes two throws and confirms the frame is completed', () => {
    let scoreboard = new Scoreboard
    expect(scoreboard.frame.currentFrame).toBe(1)
    scoreboard.singleRoll(4)
    scoreboard.singleRoll(3)
    expect(scoreboard.frame.currentFrame).toBe(2)
  });
});