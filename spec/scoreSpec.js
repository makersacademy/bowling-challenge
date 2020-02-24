describe('score', function() {

  beforeEach( function(){
    score = new Score();
  });

  it('should have a total value', function() {
    expect(score.total).toBe(0);
  });

  it('.findScore() should set total to sum of all arrays', function() {
    sample1 = [[1,4], [3,5], [2]];
    score.findScore(sample1);
    expect(score.total).toBe(15);
  });

  // it('.findBonus() should calculate bonus', function() {
  //   sample2 = [[10], [8,2], [10], [10], [9,1]]
  //   score.findBonus(sample2);
  //   expect(score.findBonus(sample2)).toBe(60);
  // });

});
