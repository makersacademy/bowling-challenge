describe ('A turn', function() {

  var turn;

  beforeEach(function() {
    turn = new Turn();
  });

  describe ('can include two bowls', function() {

    it ('#firstBowl can set #firstBowlScore', function() {
      turn.firstBowl(5);
      expect(turn.firstBowlScore).not.toBeNull();
    });

    it ('#secondBowl can set #secondBowlScore', function() {
      turn.firstBowl(5);
      turn.secondBowl(4);
      expect(turn.secondBowlScore).not.toBeNull();
    });

    it ('and complete the turn', function() {
      turn.firstBowl(5);
      turn.secondBowl(4);
      expect(turn.firstBowlScore + turn.secondBowlScore).toEqual(9);
    });

    it ('and post both scores to the #overallScore array', function() {
      turn.firstBowl(5);
      turn.secondBowl(4);
      expect(turn.overallScore).toContain('5');
      expect(turn.overallScore).toContain('4');
    });
  });

  describe ('when there is a strike', function() {

    it ('the #overallScore includes 2 characters', function() {
      turn.firstBowl(10);
      expect(turn.overallScore.length).toBe(2);
    });

    it ('the #overallScore includes a "-"', function() {
      turn.firstBowl(10);
      expect(turn.overallScore).toContain('-');
    });

    it ('the #overallScore includes a "X"', function() {
      turn.firstBowl(10);
      expect(turn.overallScore).toContain('X');
    });
  });

  describe ('when there is a spare', function() {

    it ('the #firstBowlScore and #secondBowlScore add up to ten', function() {
      turn.firstBowl(5);
      turn.secondBowl(5);
      expect(turn.firstBowlScore + turn.secondBowlScore).toEqual(10);
    });

    it ('the #overallScore includes "/"', function() {
      turn.firstBowl(5);
      turn.secondBowl(5);
      expect(turn.overallScore).toContain('5');
      expect(turn.overallScore).toContain('/');
    });
  });

});
