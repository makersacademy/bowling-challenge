'use strict';

describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it ("keeps score", function() {
    expect(bowling.getScore()).toEqual(0);
  });

  describe ("Knocking down pins (playing)", function() {
    it ("can play and returns the number of pins knocked down", function() {
      var result = bowling.play();
      expect(result).toEqual(jasmine.any(Number));
      expect(result).toBeGreaterThan(-1);
      expect(result).toBeLessThan(11);
    });
    it ("second roll, cannot knock more pins than what was left", function() {
      bowling._roll = function() { return 9; };
      bowling.play();
      bowling._roll = Bowling.prototype._roll;
      var result = bowling.play();
      expect(result).toBeGreaterThan(-1);
      expect(result).toBeLessThan(2);
    });
    it ("second roll, moves on to the next frame and puts 10 pins again", function() {
      bowling._currentRoll = 2;
      bowling.play();
      expect(bowling.getCurrentFrameNumber()).toEqual(2);
      expect(bowling._pinsLeft).toEqual(10);
    });
    it ("second roll on frame 10, strike moves on to the third roll", function() {
      bowling._currentFrame = 10;
      bowling._currentRoll = 2;
      bowling._roll = function() { return 10; };
      bowling.play();
      expect(bowling._currentRoll).toEqual(3);
    });
  });

  describe ("Frame", function() {
    it ("can get the current frame scores", function() {
      var scores = {1: null, 2: null};
      expect(bowling.getCurrentFrame()).toEqual(scores);
    });
  });

  describe ("Frame number", function() {
    it ("can get the current frame number", function() {
      expect(bowling.getCurrentFrameNumber()).toEqual(1); 
    });
    it ("increases the frame number after a couple of plays", function() {
      bowling._roll = function() { return 1; };
      bowling.play();
      expect(bowling.getCurrentFrameNumber()).toEqual(1);
      bowling.play();
      expect(bowling.getCurrentFrameNumber()).toEqual(2);
    });
    it ("jumps straight to the next frame number after a strike", function() {
      bowling._roll = function() { return 10; };
      bowling.play();
      expect(bowling.getCurrentFrameNumber()).toEqual(2);
    });
    it ("unable to play after reaching Frame 11 (doesn't exist)", function() {
      bowling._currentFrame = 10;
      bowling._currentRoll = 3;
      bowling.play();
      expect(bowling.play()).toEqual(false);
    });
  });

  describe ("Keeping Score", function() {

    beforeEach(function() {
      bowling._roll = function() { return 5; };
    });
    it ("adds the points to the score", function() {
      var points = bowling.play();
      expect(bowling.getScore()).toEqual(points);
    });
    it ("records the score inside the frame object", function() {
      var frame = bowling.getCurrentFrameNumber();
      var points = bowling.play();
      expect(bowling.getFrame(frame)[1]).toEqual(points);
    });

    describe("Bonus Points", function() {
      it ("correctly adds bonus points", function() {
        bowling._hasBonusPoints = 1;
        var result = bowling.play();
        expect(bowling.getScore()).toEqual(result * 2);
      });
      it ("reduces the amount of bonus point rolls", function() {
        bowling._hasBonusPoints = 2;
        bowling.play();
        expect(bowling._hasBonusPoints).toEqual(1);
      });
      it ("gives one spare bonus if player knocked all pins on second roll", function() {
        bowling.play();
        bowling.play();
        expect(bowling._hasBonusPoints).toEqual(1);
      });
      it ("gives two spare bonuses if player striked on first roll", function() {
        bowling._roll = function() { return 10; };
        bowling.play();
        expect(bowling._hasBonusPoints).toEqual(2);
      });
    });

  });

});
