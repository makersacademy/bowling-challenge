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
      turn.secondBowl(4);
      expect(turn.secondBowlScore).not.toBeNull();
    });

    it ('and complete the turn', function() {
      turn.firstBowl(5);
      turn.secondBowl(4);
      expect(turn.overallScore.reduce(function(a, b) { return a + b; }, 0)).toEqual(9);
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
  //
  // describe ('once completed', function() {
  //
  //   it ('has an #overallScore that includes two seperate scores', function() {
  //     turn.firstBowl();
  //     turn.secondBowl();
  //     expect(turn.overallScore.length).toBe(2);
  //   });
  // });
  //
});
