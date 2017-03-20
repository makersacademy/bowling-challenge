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
    expect(frame.points).toEqual([]);
  });
  describe("play", function() {
    it("accepts a frame number", function() {
      expect(frame.number).toEqual(1);
    });
    it("can give the frame's scores", function() {
      frame.play();
      var total = frame.points.reduce(function(a,b) {return a + b;}, 0);
      expect(total <= 10).toBeTruthy();
    });
    it("delegates to tenthFramePlay on the tenth frame", function() {
      var tenthFrame = new Frame(10);
      spyOn(tenthFrame, "tenthFramePlay");
      spyOn(Turn.prototype, "roll").and.returnValue(5);
      tenthFrame.play();
      expect(tenthFrame.tenthFramePlay).toHaveBeenCalledWith([5]);
    });
    it("can apply a bonus for a strike", function() {
      var strikeFrame = new Frame(2);
      spyOn(Turn.prototype, "roll").and.returnValue(10);
      strikeFrame.play();
      expect(strikeFrame.bonus).toEqual("X");
    });
    it("can apply a bonus for a spare", function() {
      var spareFrame = new Frame(3);
      spyOn(Turn.prototype, "roll").and.returnValue(5);
      spareFrame.play();
      expect(spareFrame.bonus).toEqual("/");
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

  describe('play', function() {
    it("gives a list of all the frames from a full game", function() {
      spyOn(Turn.prototype, "roll").and.returnValue(10);
      var frames = game.play();
      expect(frames[0]).toEqual(jasmine.objectContaining({
        points: [10]
      }));
      expect(frames[9]).toEqual(jasmine.objectContaining({
        points: [10,10,10]
      }));
    });
  });
});
