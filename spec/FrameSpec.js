'use strict';

describe("Frame", function() {

  var player
  var frame

  beforeEach(function() {
    frame = new Frame();
    player = new Player();
  });

  it("has a score of zero at the start", function() {
    expect(frame.firstScore).toEqual(0);
  });

  it("calculates the first score when player bowls", function() {
    spyOn(Math, 'random').and.returnValue(0.3);
    player.firstBowl();
    frame.calculateScore1();
    expect(frame.firstScore).toEqual(4);
  });

  it("calculates the second score when player bowls", function() {
    spyOn(Math, 'random').and.returnValue(0.2);
    player.firstBowl();
    frame.calculateScore1();
    frame.calculateScore2();
    expect(frame.secondScore).toEqual(2);
  });

});
