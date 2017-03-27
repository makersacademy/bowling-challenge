describe("Turn", function() {
  describe("roll", function() {
    it("gives a score between 0 and however many pins there are", function() {
      var turn = new Turn();
      var pinCount = Math.floor(Math.random() * 11)
      var rollBall = turn.roll(pinCount);
      expect(rollBall >= 0 && rollBall <= pinCount).toBeTruthy();
    });
  });
});

describe("Frame", function() {
  var frame = new Frame(1);
  it("can store the frames scores", function() {
    expect(frame.pinsDown).toEqual([]);
  });
  describe("play", function() {
    it("accepts a frame number", function() {
      expect(frame.number).toEqual(1);
    });
    it("can give the frame's scores", function() {
      frame.play();
      var total = frame.pinsDown.reduce(function(a,b) {return a + b;}, 0);
      expect(total <= 10).toBeTruthy();
    });
    it("delegates to tenthFramePlay on the tenth frame", function() {
      var tenthFrame = new Frame(10);
      spyOn(tenthFrame, "tenthFramePlay");
      spyOn(Turn.prototype, "roll").and.returnValue(5);
      tenthFrame.play();
      expect(tenthFrame.tenthFramePlay).toHaveBeenCalledWith([5]);
    });
    it("can apply a bonus score for a strike", function() {
      var strikeFrame = new Frame(2);
      spyOn(Turn.prototype, "roll").and.returnValue(10);
      strikeFrame.play();
      expect(strikeFrame.scorer).toEqual(["X"]);
    });
    it("can apply a bonus score for a spare", function() {
      var spareFrame = new Frame(3);
      spyOn(Turn.prototype, "roll").and.returnValue(5);
      spareFrame.play();
      expect(spareFrame.scorer).toEqual([5,"/"]);
    });
  });
  describe("tenthFramePlay", function() {
    it("account for the logic of scoring strikes in the 10th frame", function() {
      var tenthFrame = new Frame(10);
      var scoreSoFar = [10];
      spyOn(Turn.prototype, "roll").and.returnValue(10);
      expect(tenthFrame.tenthFramePlay(scoreSoFar)).toEqual([10,10,10]);
    });
  });
});


describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  });

  describe('autoplay', function() {
    it("gives a list of all the frames from a full game", function() {
      spyOn(Turn.prototype, "roll").and.returnValue(10);
      var frames = game.autoplay();
      expect(frames[0]).toEqual(jasmine.objectContaining({
        pinsDown: [10]
      }));
      expect(frames[9]).toEqual(jasmine.objectContaining({
        pinsDown: [10,10,10]
      }));
    });
  });

  describe('begin', function() {
    it("sets up a game", function() {
      expect(game.begin()).toEqual([]);
    });
  });

});
