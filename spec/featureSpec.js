describe('single frame, no spare/strike', function() {
  it('correctly gives score for 1 frame', function(){
    var frame1
    var score1

    frame1 = new Frame
    score1 = new Score(frame1)
    frame1.roll1(2)
    frame1.roll2(6)

    expect(score1.score()).toEqual(8);
  });
});
