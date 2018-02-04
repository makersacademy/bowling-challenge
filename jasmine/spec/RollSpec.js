describe('Roll', function() {
  var roll;
  var score;

  beforeEach(function(){
    roll = new Roll();
  });

  it('returns my score', function() {
    roll.roll(7);
    expect(roll.score).toEqual(7);
  });
  it('bowls a strike (10 points in one roll)', function(){
    roll.roll(10);
    expect(roll.strikeStatus).toEqual(true);
  });

});
