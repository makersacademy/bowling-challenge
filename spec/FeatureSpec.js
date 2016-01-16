describe('Feature tests', function(){
  var frame;
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
    frame = new Frame();
  });

  it('sums the scores of a bowling game for one player', function() {
    var i = 0;
    for(i=0; i<3; i++) {
      bowling.play(5,5);
      bowling.completeFrame();
      bowling.play(10,0);
      bowling.completeFrame();
      bowling.play(4,3);
      bowling.completeFrame();
    }
    bowling.play(3,5);
    bowling.completeFrame();
    bowling.calculateTotalScore();
    console.log(bowling.frames);
    expect(bowling.totalScore).toEqual(140)
  })
});
