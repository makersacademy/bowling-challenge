describe('Roll', function() {
  var roll;
  var score;

  beforeEach(function(){
    roll = new Roll();
  });

  // it('returns my score', function() {
  //   roll.rollOne(7);
  //   // roll.rollTwo(2);
  //   expect(roll.frameScore).toEqual([7, false]);
  // });
  // it('bowls a STRIKE (10 points in 1 ball)', function(){
  //   roll.rollOne(10);
  //   expect(roll.isStrike).toEqual(true);
  // });
  it('bowls a SPARE (10 points in 2 balls)', function(){
    roll.rollOne(4);
    roll.rollTwo(6);
    expect(roll.isSpare).toEqual(true);
  });

});
