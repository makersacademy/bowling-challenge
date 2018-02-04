describe('Roll', function() {
  var roll;
  var score;

  beforeEach(function(){
    roll = new Roll();
  });

  it('returns my score', function() {
    roll.rollOne(7);
    expect(roll.frameScore).toEqual(7);
  });
  it('bowls a STRIKE (10 points in 1 ball)', function(){
    roll.rollOne(10);
    expect(roll.strikeStatus).toEqual(true);
  });
  it('bowls a SPARE (10 points in 2 balls)', function(){
    roll.rollOne(4);
    roll.rollTwo(6);
    expect(roll.spareStatus).toEqual(true);
  });
  it('bowls two balls that add up to less than 10', function(){
    roll.rollOne(1);
    roll.rollTwo(8);
    expect(roll.frameScore).toEqual(9);
  });

});
