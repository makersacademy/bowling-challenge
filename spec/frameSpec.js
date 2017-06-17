describe('Frame features', function() {

  var frame;

  beforeEach(function () {
    frame = new Frame();
  });

  it('Gives the frame a result of a spare', function (){
    frame.results([5,5]);
    expect(frame.result).toEqual('SPARE');
  })
  it('Gives the frame a result of a split', function (){
    frame.results([10,0]);
    expect(frame.result).toEqual('STRIKE');
  })
  it('Gives the results in an array', function (){
    frame.roll(frame.rolls, 0)
    frame.calculateFrameScore(frame.rolls);
    expect(frame.score).not.toEqual([0,0]);
  })
  it('rolls a ball in the frame', function() {
    frame.roll(frame.rolls, 1)
    frame.calculateFrameScore(frame.rolls)
    expect(frame.score[1]).not.toEqual(0)

  })

})
