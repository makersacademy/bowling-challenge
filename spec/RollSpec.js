describe('Roll', function(){
  beforeEach(function(){
    testScore = 10
    testRollNumber = 1
    roll = new Roll(testScore,testRollNumber)
  });
  
  it('Returns the score for the roll', function(){
    expect(roll.score()).toEqual(testScore);
  });

  it('Returns the roll number (within a frame)', function(){
    expect(roll.number()).toEqual(testRollNumber);
  });
});
