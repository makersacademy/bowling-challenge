describe("BowlingCard", function() {
  var bowlingCard;

  beforeEach(function() {
    bowlingCard = new BowlingCard()
  });

  describe('saveScore', function() {
    it('records the frame, roll and pins of each roll', function() {
      bowlingCard.saveScore(6);
      expect(bowlingCard.scoreCard).toEqual([{frame: 1, roll: 1, pins: 6}]);
    });
  });

  describe('endTurn', function() {
    it('updates the current frame# and roll# after each roll', function() {
      for (i=0; i < 3; i++) { bowlingCard.endTurn(1); }
      expect(bowlingCard.frameNumber).toEqual(2);
      expect(bowlingCard.rollNumber).toEqual(2);
    });
    it("ends the frame if player gets a strike", function() {
      bowlingCard.endTurn(10);
      expect(bowlingCard.frameNumber).toEqual(2);
      expect(bowlingCard.rollNumber).toEqual(1);
    });
    it('allows for 3 rolls in the 10th frame', function() {
      for (i=0; i < 10; i++) { bowlingCard.endTurn(10); }
      expect(bowlingCard.frameNumber).toEqual(10);
      expect(bowlingCard.rollNumber).toEqual(2);
      bowlingCard.endTurn(10);
      expect(bowlingCard.frameNumber).toEqual(10);
      expect(bowlingCard.rollNumber).toEqual(3);
    });
  });

  describe('record', function() {
    it('records rolls and updates the current roll#', function() {
      bowlingCard.record(6);
      bowlingCard.record(3);
      expect(bowlingCard.scoreCard).toEqual([{frame: 1, roll: 1, pins: 6}, {frame: 1, roll: 2, pins: 3}]);
      expect(bowlingCard.frameNumber).toEqual(2);
      expect(bowlingCard.rollNumber).toEqual(1);
    });
  });
});
