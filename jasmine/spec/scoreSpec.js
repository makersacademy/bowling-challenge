describe('Score', function() {

  var score;

  it('calculates game score', function() {
    score = new Score([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]]);
    score.calculate();
    expect(score.gameScore()).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 30, 30]);
  });

});
