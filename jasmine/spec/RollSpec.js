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
  it('', function(){
    
  });

});
