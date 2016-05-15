describe('Frame', function() {

  var frame;
  var game;

  beforeEach(function() {
    frame = new Frame();
    game = new BowlingGame(frame);
    // game = jasmine.createSpyObj('game',['bowl'])
  });

  it('begins on frame 1', function() {
    expect(frame.getCount()).toEqual(1);
  });

  it('frame number is incremented at the end of every frame', function() {
    frame.next();
    expect(frame.getCount()).toEqual(2);
  });


  it('the bowl count should be one or two', function(){
    expect(frame.roll).toEqual(1);
    game.bowl(1);
    expect(frame.roll).toEqual(2);
  });



});
