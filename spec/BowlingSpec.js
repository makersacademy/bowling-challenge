describe('Bowling', function() {
  var bowling;

  it("starts on frame 1", function() {
    bowling = new Bowling();
    expect(bowling.frame).toEqual(1);
  });

  it("starts with score of 0", function() {
    bowling = new Bowling();
    expect(bowling.score).toEqual(0);
  });

  it("basic score increases by pins knocked down", function() {
    bowling = new Bowling();
    bowling.roll(4);
    bowling.roll(4);
    bowling.roll(0);
    bowling.roll(0);
    expect(bowling.score).toEqual(8);
  });

  it("ends after 10 frames", function() {
    bowling = new Bowling();
    for (var i = 1; i <= 10; i++) {
      bowling.roll(2);
      bowling.roll(4);
    };
    expect(bowling.isGameInPlay()).toEqual(false)
  });

  it("perfect game score is 300", function() {
    bowling = new Bowling();
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(0);
    bowling.roll(0);
    expect(bowling.score).toEqual(300);
  });

  it("is still active after 10 frames if last ball is strike", function() {
    bowling = new Bowling();
    this.scorecard = [[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[1,2],[10,0]];
    expect(bowling.isGameInPlay()).toEqual(true)
  });

  describe("frame", function() {

    it("begins with ten pins", function() {
      bowling = new Bowling();
      expect(bowling.pinCount).toEqual(10);
    });

    it("can have two rolls", function() {
      bowling = new Bowling();
      bowling.roll(2);
      expect(bowling.frameRoll).toEqual(2)
    });

    it("has maximum of two rolls", function() {
      bowling = new Bowling();
      bowling.roll(2);
      bowling.roll(2);
      expect(bowling.frame).toEqual(2);
      expect(bowling.frameRoll).toEqual(1);
    });

    it("has one roll when there is a strike", function() {
      bowling = new Bowling();
      bowling.roll(10);
      expect(bowling.frame).toEqual(2);
    });

    it("incurs bonus for strike", function() {
      bowling = new Bowling();
      bowling.roll(10);
      bowling.roll(2);
      bowling.roll(4);
      bowling.roll(0);
      bowling.roll(0);
      expect(bowling.score).toEqual(22);
    });

    it("incurs bonus for spare", function() {
      bowling = new Bowling();
      bowling.roll(4);
      bowling.roll(6);
      bowling.roll(4);
      bowling.roll(0);
      bowling.roll(0);
      bowling.roll(0);
      expect(bowling.score).toEqual(18);
    });

    it("incurs multiple bonuses for 2 strikes", function() {
      bowling = new Bowling();
      bowling.roll(10);
      bowling.roll(10);
      bowling.roll(4);
      bowling.roll(0);
      bowling.roll(0);
      bowling.roll(0);
      bowling.roll(0);
      bowling.roll(0);
      expect(bowling.score).toEqual(42);
    });

    it("incurs multiple bonuses for 3 strikes", function() {
      bowling = new Bowling();
      bowling.roll(10);
      bowling.roll(10);
      bowling.roll(10);
      bowling.roll(4);
      bowling.roll(2);
      bowling.roll(0);
      bowling.roll(0);
      expect(bowling.score).toEqual(76);
    });

  });




  describe('',function() {

  });
});