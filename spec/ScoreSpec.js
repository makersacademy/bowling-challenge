describe('Bowling Score', function() {

  var score;
  var player;

  beforeEach(function() {
    player = jasmine.createSpyObj('player', ['bowl', 'secondBowl']);
    score = new Score(player);
  });

  it('should display return players score when player bowls', function() {
    player.bowl.and.returnValue(7)
    score.round()
    expect(score._scores[0][0]).toEqual(7);
  });

  it('should give score of players second bowl of first turn', function() {
    player.secondBowl.and.returnValue(2)
    score.round()
    expect(score._scores[0][1]).toEqual(2)
  });

  it('should give an array of 10, / if a strike is scored', function() {
    player.bowl.and.returnValue(10)
    score.round()
    expect(score._scores[0]).toEqual(['/'])
  });

  it('should give an array of first score and / when spare is scored', function() {
    player.bowl.and.returnValue(6)
    player.secondBowl.and.returnValue(4)
    score.round()
    expect(score._scores[0]).toEqual([6, '/']);
  });

  it('should calculate a total score for the game', function() {
    player.bowl.and.returnValue(5);
    player.secondBowl.and.returnValue(4);
    score.round();
    score.round();
    score.round();
    score.totalCalculator();
    expect(score._total).toEqual(27);
  });

  it('should calculate the score for a strike', function() {
    player.bowl.and.returnValue(10);
    score.round();
    player.bowl.and.returnValue(5);
    player.secondBowl.and.returnValue(4);
    score.round();
    score.totalCalculator();
    expect(score._total).toEqual(28);
  });

});
