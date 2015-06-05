describe('Scorecard', function(){

  beforeEach(function() {
    scorecard = new Scorecard();
    frame = new Frame();
  });

  it('can show the total for a frame', function() {
    frame.bowl1(7);
    frame.bowl2(2);
    expect(scorecard.total).toEqual(9);
  });

  it('cannot bowl twice after a strike', function(){
    frame.bowl1(10);
    expect(function(){frame.bowl2(1);}).toThrow('Strike, wait for next frame!');
  });

});