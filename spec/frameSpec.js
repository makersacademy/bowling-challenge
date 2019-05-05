describe('Frame', function(){

  var frame;
  var game;

  beforeEach(function() {
    game = new Game();
    frame = new Frame();
  });

  it('should recognise a strike', function(){
    frame.throws = [10, 0]
    expect(frame.isStrike).toBeTruthy()
  })

  it('should recognise a spare', function(){
    frame.throws = [5, 5]
    expect(frame.isSpare).toBeTruthy()
  })
});
