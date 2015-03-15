describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('should be able to roll a gutter game', function() {
    bowling.gameRolls(0, 20);
    expect(bowling.currentScore()).toBe(0);
  });

   it('should score 20 when all ones are rolled', function() {
    bowling.gameRolls(1, 20);
    expect(bowling.currentScore()).toBe(20);
  });

});