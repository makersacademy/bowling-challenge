// console.log("start");
// console.log(frame._score)
// console.log(frame._ballsRemaining)
// console.log(frame._bonusBalls)
// console.log("end");
describe("Frame", function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
    lastFrame = new Frame(true);
  });

  it("should be able to indicate whether it's not yet complete", function() {
    expect(frame.isComplete()).toEqual(false);
  });

  it("should be able count how many balls are left", function() {
    expect(frame.ballsRemaining()).toEqual(2);
  });

  it("should decrement how many balls are left when a ball is played", function() {
    frame.play();
    expect(frame.ballsRemaining()).toEqual(1);
  });

  it("should be complete after two games if not last game", function() {
    frame.play();
    frame.play();
    expect(frame.isComplete()).toEqual(true);
  });

  it("should be able to set a frame as the last one", function() {
    expect(lastFrame.lastFrame()).toEqual(true);
  });


  it("should set bonus balls to two if a strike - X", function() {
    frame.play("X");
    expect(frame.bonusBalls()).toEqual(2);
    expect(frame.score()).toEqual(10);
    expect(frame.isComplete()).toEqual(true);
  });

  it("should set bonus balls to two if a strike - 10", function() {
    frame.play(10);
    expect(frame.bonusBalls()).toEqual(2);
    expect(frame.score()).toEqual(10);
    expect(frame.isComplete()).toEqual(true);
  });

  it("should set bonus balls to one if a spare - /", function() {
    frame.play("-");
    frame.play("/");
    expect(frame.bonusBalls()).toEqual(1);
    expect(frame.score()).toEqual(10);
    expect(frame.isComplete()).toEqual(true);
  });

  it("should set bonus balls to one if a spare - 10", function() {
    frame.play("-");
    frame.play(10);
    expect(frame.bonusBalls()).toEqual(1);
    expect(frame.score()).toEqual(10);
    expect(frame.isComplete()).toEqual(true);
  });

  it("should set bonus balls to one if a spare 3 & 7", function() {
    frame.play(3);
    frame.play(7);
    expect(frame.bonusBalls()).toEqual(1);
    expect(frame.score()).toEqual(10);
    expect(frame.isComplete()).toEqual(true);
  });

  it("shouldn't set bonus balls if not a strike or spare 3&6", function() {
    frame.play(3);
    frame.play(6);
    expect(frame.bonusBalls()).toEqual(0);
    expect(frame.score()).toEqual(9);
    expect(frame.isComplete()).toEqual(true);
  });


  it("should set balls remaining to two on last frame if a strike", function() {
    lastFrame.play(10);
    expect(lastFrame.ballsRemaining()).toEqual(2);
  });

  it("should set balls remaining to one on last frame if a spare", function() {
    lastFrame.play(3);
    lastFrame.play(7);
    expect(lastFrame.ballsRemaining()).toEqual(1);
  });

  describe("Last frame not a strike or spare", function() {

    beforeEach(function() {
      lastFrame = new Frame(true);
      lastFrame.play(3);
      lastFrame.play(6);
    });

    it("shouldn't set bonus balls on the last frame if not a strike or spare", function() {
      expect(lastFrame.bonusBalls()).toEqual(0);
    });

    it("shouldn't set balls remaining on the last frame if not a strike or spare", function() {
      expect(lastFrame.ballsRemaining()).toEqual(0);
    });

    it("should set score to 9 on last frame with 3 & 6 pins", function() {
      expect(lastFrame.score()).toEqual(9);
    });

    it("should set frame complete after two balls on last frame if score <10", function() {
      expect(lastFrame.isComplete()).toEqual(true);
    });

  });
  describe("Ensure correct pins added for each ball", function() {

    beforeEach(function() {
      frame = new Frame();
    });

    it("should set ball1 to X after strike", function() {
      frame.play("X");
      expect(frame._ball1).toEqual("X");
    });
    it("should set ball1 to - after first play", function() {
      frame.play("-");
      expect(frame._ball1).toEqual("-");
    });
    it("should set ball1 to 7 after first play", function() {
      frame.play(7);
      expect(frame._ball1).toEqual(7);
    });
    it("should set ball2 to / after spare", function() {
      frame.play("-");
      frame.play("/");
      expect(frame._ball2).toEqual("/");
    });
    it("should set ball2 to 7 after spare 3&7", function() {
      frame.play(3);
      frame.play(7);
      expect(frame._ball2).toEqual(7);
    });
    it("should set ball2 to 6 after second play", function() {
      frame.play(3);
      frame.play(6);
      expect(frame._ball2).toEqual(6);
    });
  });
});
