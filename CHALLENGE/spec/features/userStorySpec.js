describe ('*FEATURES', function() {

  var turn;

  beforeEach(function() {
    turn = new Turn();
  });

  describe ('USER STORY ONE', function() {
    // As a player,
    // So that I can be involved in a game,
    // I would like to be able to make a bowl.

    it ('A user can make two bowls and recieve a score', function() {
      turn.firstBowl(5);
      turn.secondBowl(4);
      expect(turn.overallScore.length).toBe(2);
      expect(turn.overallScore).toContain('5');
      expect(turn.overallScore).toContain('4');
    });
  });

  describe ('USER STORY TWO', function() {
    // As a player,
    // So that I can sit down again quickly,
    // I would like a strike to complete my turn.

    it ('A turn ends after a strike is scored', function() {
      turn.firstBowl(10);
      expect(turn.overallScore.length).toBe(2);
      expect(turn.overallScore).toContain('X');
      expect(turn.overallScore).toContain('-');
    });
  });

  describe ('USER STORY THREE', function() {
    // As a player,
    // So that I can get a big score,
    // I'd like a spare to be registered if I knock all the pins down on my second turn.

    it ('A turn registers a spare if the second bowl brings the players total to ten', function() {
      turn.firstBowl(5);
      turn.secondBowl(5);
      expect(turn.overallScore.length).toBe(2);
      expect(turn.overallScore).toContain('5');
      expect(turn.overallScore).toContain('/');

    });
  });

  describe ('USER STORY FOUR', function() {
    // As a player,
    // So that my turn can end,
    // I would like a completed turn to prevent further bowls.

    it ('After two bowls, the turn is completed', function() {
      turn.firstBowl(5);
      turn.secondBowl(4);
      expect(turn.turnCompleted).toEqual(true);
    });

    it ('A completed turn prevents further bowls', function() {
      turn.firstBowl(5);
      turn.secondBowl(4);
      expect(turn.turnCompleted).toEqual(true);
      expect(function() {turn.firstBowl(5);}).toThrowError("Next player's turn.");
      expect(function() {turn.secondBowl(5);}).toThrowError("Next player's turn.");
    });
  });
});
