describe("BowlingCard", function() {
  var scoreCard;

  beforeEach(function() {
    scoreCard = new BowlingCard()
  });

  describe('saveScore', function() {
    it('records the frame, roll and pins of each roll', function() {
      scoreCard.saveScore(6);
      expect(scoreCard.scoreCard).toEqual([{frame: 1, roll: 1, pins: 6}]);
    });
  });

  describe('endTurn', function() {
    it('updates the current frame# and roll# after each roll', function() {
      for (i=0; i < 3; i++) { scoreCard.endTurn(1); }
      expect(scoreCard.frameNumber).toEqual(2);
      expect(scoreCard.rollNumber).toEqual(2);
    });
    it("ends the frame if player gets a strike", function() {
      scoreCard.endTurn(10);
      expect(scoreCard.frameNumber).toEqual(2);
      expect(scoreCard.rollNumber).toEqual(1);
    });
    it('allows for 3 rolls in the 10th frame', function() {
      for (i=0; i < 10; i++) { scoreCard.endTurn(10); }
      expect(scoreCard.frameNumber).toEqual(10);
      expect(scoreCard.rollNumber).toEqual(2);
      scoreCard.endTurn(10);
      expect(scoreCard.frameNumber).toEqual(10);
      expect(scoreCard.rollNumber).toEqual(3);
    });
  });

  describe('roll', function() {
    it('records rolls and updates the current roll#', function() {
      scoreCard.roll(6);
      scoreCard.roll(3);
      expect(scoreCard.scoreCard).toEqual([{frame: 1, roll: 1, pins: 6}, {frame: 1, roll: 2, pins: 3}]);
      expect(scoreCard.frameNumber).toEqual(2);
      expect(scoreCard.rollNumber).toEqual(1);
    });
  });
});
