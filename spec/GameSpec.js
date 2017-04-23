describe('Game', function() {
  var game;
  var score;
  var scorecard;
  var pins;
  var frameLog;

  beforeEach(function() {
    frameLog = jasmine.createSpyObj('frameLog', ['addScore'])
    scorecard = jasmine.createSpyObj('scorecard',['addScore'])
    pins = jasmine.createSpyObj('pins', ['get', 'update', 'reset'])
    game = new Game(frameLog, pins);
    score = jasmine.createSpyObj('score', ['new'])
  });

  it('initalizes with a new frameLog', function() {
    expect(game.frameLog).toEqual(frameLog);
  });
  it('initializes with pins', function() {
    expect(game.pins).toEqual(pins);
  });

  describe('play', function() {
    beforeEach(function() {
      spyOn(game, 'generate').and.returnValue(score);
      game.play();
    });
    it('records the score in frameLog', function(){
      expect(frameLog.addScore).toHaveBeenCalledWith(score);
    });
    it('updates the remaining pins', function(){
      expect(pins.update).toHaveBeenCalledWith(score);
    });
  });
});
