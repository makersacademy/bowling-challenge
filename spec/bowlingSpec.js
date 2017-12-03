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
      expect(bowling.frames[bowling.actualFrame].pins).toEqual(5)
    });
  });
  describe('#increaseActualFrame', function () {
    it('increase actual frame by one if framePoins.length === 2', function () {
      bowling.recordInFrame(2)
      bowling.recordInFrame(2)
      bowling.increaseActualFrame();
      expect(bowling.actualFrame).toEqual(2)
    });
  });

  describe('#recordInFrame', function () {
    it("The score of the first roll is saved inside the framePoins array", function() {
      bowling.throw(5);
      bowling.recordInFrame(5);
      expect(bowling.frames[bowling.actualFrame].framePoints[0]).toEqual(5)
    });
  });
  describe('#recordInFrame', function () {
    it("The score of the second roll is saved inside the framePoins array", function() {
      bowling.throw(5);
      bowling.recordInFrame(5);
      bowling.throw(2);
      bowling.recordInFrame(2);
      expect(bowling.frames[bowling.actualFrame].framePoints[1]).toEqual(2)
    });
  });
  describe('#reducePins', function () {
    it("reduce the pins of a given frame.", function() {
      bowling.reducePins(5);
      expect(bowling.frames[bowling.actualFrame].pins).toEqual(5)
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
      bowling.throw(5);
      bowling.recordInFrame(5);
      bowling.reducePins(5)
      bowling.increaseActualFrame();
      bowling.throw(5);
      bowling.recordInFrame(5);
      bowling.spareBonus();
      expect(bowling.frames[bowling.actualFrame - 1].framePoints[1]).toEqual(10)
    });
  });
  describe('#StrikeBonus', function () {
    it("IF you do strike, your frame increase immediately by 1 also if you have done only 1 roll", function() {
      bowling.throw(10);
      bowling.recordInFrame(10);
      bowling.reducePins(10)
      bowling.increaseActualFrame();
      expect(bowling.actualFrame).toEqual(2)
    });
  });
  describe('#StrikeBonus', function () {
    it("IF you do strike, that score increase by the next two rolls of the next frame", function() {
      bowling.throw(10);
      bowling.recordInFrame(10);
      bowling.reducePins(10)
      bowling.increaseActualFrame();
      bowling.throw(5);
      bowling.recordInFrame(5);
      bowling.reducePins(5)
      bowling.increaseActualFrame();
      bowling.throw(5);
      bowling.recordInFrame(5);
      bowling.reducePins(5);
      bowling.strikeBonus();
      expect(bowling.frames[bowling.actualFrame - 1].framePoints[0]).toEqual(20)
    });
  });
  describe('#StrikeBonus', function () {
    it("IF you do strike, strike, 3 - 2. The first strike should get a bonus score of 13 and the second one of 5", function() {
      throw_records_bonus_increaseTurnAndFrame(10);
      throw_records_bonus_increaseTurnAndFrame(10);
      throw_records_bonus_increaseTurnAndFrame(3);
      bowling.throw(2);
      bowling.recordInFrame(2);
      bowling.reducePins(2);
      bowling.spareBonus();
      bowling.strikeBonus();
      expect(bowling.frames[bowling.actualFrame - 2].framePoints[0]).toEqual(23)
      expect(bowling.frames[bowling.actualFrame - 1].framePoints[0]).toEqual(15)
    });
  });
  describe('PointsBonus array', function() {
    it('The spare bonus points goes in the pointsBonus array', function() {
      throw_records_bonus_increaseTurnAndFrame(5);
      throw_records_bonus_increaseTurnAndFrame(5);
      bowling.throw(2);
      bowling.record(2);
      bowling.recordInFrame(2);
      bowling.reducePins(2);
      bowling.spareBonus();
      expect(bowling.pointsBonus.reduce((a, b) => a + b)).toEqual(2)
    });
    it('The strike bonus points goes in the pointsBonus array', function() {
      throw_records_bonus_increaseTurnAndFrame(10);
      throw_records_bonus_increaseTurnAndFrame(5);
      bowling.throw(2);
      bowling.record(2);
      bowling.recordInFrame(2);
      bowling.reducePins(2);
      bowling.strikeBonus();
      expect(bowling.pointsBonus.reduce((a, b) => a + b)).toEqual(7)
    });
    it('The strike bonus points of two strikes in a row goes in the pointsBonus array', function() {
      throw_records_bonus_increaseTurnAndFrame(10);
      throw_records_bonus_increaseTurnAndFrame(10);
      throw_records_bonus_increaseTurnAndFrame(3);
      bowling.throw(2);
      bowling.recordInFrame(2);
      bowling.reducePins(2);
      bowling.spareBonus();
      bowling.strikeBonus();
      expect(bowling.pointsBonus.reduce((a, b) => a + b)).toEqual(18)
    });
  });
  describe('Gutter game', function () {
    it("Generate a gutter game, where the player doesn't make any points", function() {
      for (i = 0; i < 20; i++) {
        throw_records_bonus_increaseTurnAndFrame(0);
      }
      bowling._isGutter();
      expect(bowling.points.reduce((a, b) => a + b)).toEqual(20)
    });
  });
  describe('Game with one spare', function () {
    it("Generate a spare game, where the player makes 1 spare and check if the final points are correct", function() {
      for (i = 0; i < 14; i++) {
        throw_records_bonus_increaseTurnAndFrame(2);
      }
      throw_records_bonus_increaseTurnAndFrame(5);
      throw_records_bonus_increaseTurnAndFrame(5);
      throw_records_bonus_increaseTurnAndFrame(8);
      for (i = 0; i < 3; i++) {
        throw_records_bonus_increaseTurnAndFrame(0);
      }
      bowling._isGutter();
      expect(bowling.wholeGameScore()).toEqual(54)
    });
  });
});
