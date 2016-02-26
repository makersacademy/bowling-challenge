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
});
