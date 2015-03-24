describe('Bowling', function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it('should be able to roll a gutter game', function() {
    bowling.gameRolls(0, 20);
    expect(bowling.currentScore()).toEqual(0);
  });

   it('should score 20 when all ones are rolled', function() {
    bowling.gameRolls(1, 20);
    expect(bowling.currentScore()).toEqual(20);
  });

  it('should roll a spare', function() {
    bowling.roll(4);
    bowling.roll(4);
    bowling.roll(2);
    bowling.roll(3);
    bowling.gameRolls(0, 16);
    expect(bowling.currentScore()).toEqual(13);
  });

});