describe('Bowling Score', function() {

  var score;
  var player;

  beforeEach(function() {
    player = jasmine.createSpyObj('player', ['bowl', 'secondBowl'])
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
    expect(score._scores[0]).toEqual([10, '/'])
  });



});
