var Frame = require('../src/frame.js');

describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });
  
  it ("should have a frame score of 0 on initialization", function() {
    expect(frame.score()).toEqual(0)
  });

  it ("should have a score of 7 when 7 pins knocked down on first roll", function() {
    frame.inputRoll(7)
    expect(frame.score()).toEqual(7)
  });

  it ("should have a score of 9 when 7 and 2 are rolled and the frame should end", function() {
    frame.inputRoll(7)
    frame.inputRoll(2)
    expect(frame.score()).toEqual(9)
    expect(frame.isEnded()).toEqual(true)
  });

  it ("should end the frame if a strike is rolled", function() {
    frame.inputRoll(10)
    expect(frame.score()).toEqual(10)
    expect(frame.isEnded()).toEqual(true)
  });

  it ("allow for 2 extras if a strike is rolled", function() {
    frame.inputRoll(10)
    expect(frame.extras()).toEqual(2)
  });
  
});
