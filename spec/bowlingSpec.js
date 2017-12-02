describe('Bowling', function ()  {

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('#throw', function() {
    it('Throw the ball to knock over 10 pins', function () {
      expect(bowling.throw(10)).toEqual(10);
    });
  });

  describe('#record', function() {
    it('Record the score of the throw', function() {
      bowling.lastScore = 10;
      bowling.record();
      expect(bowling.points[1]).toEqual(10)
    });
  });
  describe('#reducePins', function () {
    it('Reduce pins of the actual frame', function() {
      bowling.throw(5);
      bowling.reducePins(5);
      expect(bowling.frames[bowling.turn].pins).toEqual(5)
    });
  });
  describe('#increaseActualFrame', function () {
    it('increase actual frame by one if turn is even', function () {
      bowling.increaseTurn();
      bowling.increaseActualFrame();
      expect(bowling.actualFrame).toEqual(2)
    });
  });

  describe('#recordInFrame', function () {
    it("The score of each lunch is saved inside the Frame variable firstStrike or secondStrike", function() {
      bowling.throw(5);
      bowling.recordInFrame(5);
      expect(bowling.frames[bowling.actualFrame].firstStrike).toEqual(5)
    });
  });
  describe('#recordInFrame', function () {
    it("The score the first launch is saved inside the Frame variable firstStrike", function() {
      bowling.throw(5);
      bowling.recordInFrame(5);
      expect(bowling.frames[bowling.actualFrame].firstStrike).toEqual(5)
    });
  });
  describe('#recordInFrame', function () {
    it("The score the first launch is saved inside the Frame variable secondStrike", function() {
      bowling.turn = 2
      bowling.throw(5);
      bowling.recordInFrame(5);
      expect(bowling.frames[bowling.actualFrame].secondStrike).toEqual(5)
    });
  });
  describe('#reducePins', function () {
    it("reduce the pins of a given frame.", function() {
      bowling.reducePins(5);
      expect(bowling.frames[bowling.actualFrame].pins).toEqual(5)
    });
  });
  describe('#increaseTurn', function () {
    it("increase by the variable turn", function() {
      bowling.increaseTurn();
      expect(bowling.turn).toEqual(2)
    });
  });
  describe('#isGutter', function () {
    it("If no score is made, you automatically get 20 points", function() {
      bowling.isGutter();
      finalScore = bowling.points.reduce((a, b) => a + b)
      expect(finalScore).toEqual(20)
    });
  });
  describe('#resetPoint_Lscore_turn', function () {
    it("points , lastScore and turn variable are reseted", function() {
      bowling.points = 10
      bowling.lastScore = 10
      bowling.turn = 10
      bowling.resetPoint_Lscore_turn();
      expect(bowling.points).toEqual([0])
      expect(bowling.lastScore).toEqual(0)
      expect(bowling.turn).toEqual(1)
    });
  });
  describe('#spareBonus', function () {
    it("if in the previous frame you did spare, the first score of the next frame is doubled ", function() {
      bowling.throw(5);
      bowling.recordInFrame(5);
      bowling.reducePins(5)
      bowling.increaseActualFrame();
      bowling.increaseTurn();
      bowling.throw(5);
      bowling.recordInFrame(5);
      bowling.reducePins(5)
      bowling.increaseActualFrame();
      bowling.increaseTurn();
      bowling.throw(5);
      bowling.spareBonus();
      expect(bowling.frames[bowling.actualFrame - 1].secondStrike).toEqual(10)
    });
  });
  describe('#StrikeBonus', function () {
    it("IF you do strike, your turn increase by 2 and your frame increase by 1", function() {
      bowling.throw(10);
      bowling.recordInFrame(10);
      bowling.reducePins(10)
      bowling.increaseTurn();
      bowling.increaseActualFrame();
      expect(bowling.turn).toEqual(3)
      expect(bowling.actualFrame).toEqual(2)
    });
  });
  describe('#StrikeBonus', function () {
    it("IF you do strike, that score increase by the next two rolls of the next frame", function() {
      bowling.throw(10);
      bowling.recordInFrame(10);
      bowling.reducePins(10)
      bowling.increaseTurn();
      bowling.increaseActualFrame();
      bowling.throw(5);
      bowling.recordInFrame(5);
      bowling.reducePins(5)
      bowling.increaseActualFrame();
      bowling.increaseTurn();
      bowling.throw(5);
      bowling.recordInFrame(5);
      bowling.reducePins(5);
      bowling.strikeBonus();
      expect(bowling.frames[bowling.actualFrame - 1].firstStrike).toEqual(20)
    });
  });
});
