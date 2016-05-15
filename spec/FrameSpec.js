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

  it('begins with 10 pins standing', function() {
    expect(frame.pinsStanding).toEqual(10);
  });

  it('pins standing is reduced after a successful bowl', function() {
    game.bowl(5);
    expect(frame.pinsStanding).toEqual(5);
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

  it('should calculate the score', function(){
    game.bowl(5);
    game.bowl(1);
    expect(frame.gameScore).toEqual(6);
  });

  it('should apply a bonus score for a spare', function(){
    game.bowl(5);
    game.bowl(5);
    game.bowl(5);
    game.bowl(1);
    expect(frame.gameScore).toEqual(21);
  });

  it('should apply a bonus score for a strike', function(){
    game.bowl(10);
    game.bowl(5);
    game.bowl(1);
    expect(frame.gameScore).toEqual(22);
  });

  it('should return the last competed frame', function(){
    game.bowl(5);
    game.bowl(1);
    expect(frame.lastCompletedFrame()).toEqual([5, 1]);
  });


});
