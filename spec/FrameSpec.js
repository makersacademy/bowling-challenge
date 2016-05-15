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

  it('the number of pins knocked down should be recorded', function() {
    game.bowl(2);
    expect(frame.current).toEqual([2]);
  });

  it('the pins knocked down in each frame should be logged', function() {
    game.bowl(2);
    game.bowl(2);
    expect(frame.log).toEqual([[2, 2]]);
    game.bowl(2);
    game.bowl(2);
    expect(frame.log).toEqual([[2, 2], [2, 2]]);
  });

  it('should know if the frame was a spare', function(){
    game.bowl(5);
    game.bowl(5);
    expect(frame.lastIsSpare()).toEqual(true);
  });

  it('should know if the frame was a strike', function(){
    game.bowl(10);
    expect(frame.lastIsStrike()).toEqual(true);
  });

  it('should know if the frame was a spare2', function(){
    // game.bowl(5);
    // game.bowl(5);
    expect(frame.lastIsSpare()).toEqual(false);
  });

  it('should know if the frame was a strike2', function(){
    // game.bowl(10);
    expect(frame.lastIsStrike()).toEqual(false);
  });


  // it('the score is calculated', function(){
  //   game.bowl(2);
  //   game.bowl(2);
  //   expect(frame.calculateScore).toHaveBeenCalled();
  // });


});
