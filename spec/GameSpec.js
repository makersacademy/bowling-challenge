describe("Game", function() {

  beforeEach(function() {
    frame = jasmine.createSpyObj('frame',['addScore','calculateScore','frameResult']);
    frame.calculateScore.and.returnValue(6);
    spyOn(window, "frame").and.returnValue(frame);
    game = new Game({frame: frame, strike: frame, spare: frame, final: frame});
  });

  describe('Adding frames', function() {
    it("should create new frame", function() {
      game.nextFrame();
      expect(frame).toHaveBeenCalled();
    });
    it("should save current frame", function() {
      game.nextFrame();
      expect(game.framesHistory).toEqual([frame]);
    });

    describe('adding bonus spare frame', function(){
      beforeEach(function() {
        frame.frameResult.and.returnValue('spare');
      });
      it("should create new bonus spare frame", function(){
        game.nextFrame();
        game.addScore(5);
        game.addScore(5);
        expect(game._nextFrameType()).toEqual('spare');
      });
    });

    describe('adding bonus strike frame', function(){
      beforeEach(function() {
        frame.frameResult.and.returnValue('strike');
      });
      it("should create new bonus strike frame", function(){
        game.nextFrame();
        game.addScore(10);
        expect(game._nextFrameType()).toEqual('strike');
      });
    });
  });

  describe('adding final frame', function(){
    beforeEach(function() {
      for (var i = 0; i < 9; i++) {
        game.nextFrame();
        frame.frameResult.and.returnValue('final');
      }
    });
    it("should create new bonus spare frame", function(){
      expect(game._nextFrameType()).toEqual('final');
    });
  });

  describe('Adding scores to frame', function() {
    it("should add score to new frame", function() {
      game.nextFrame();
      game.addScore(1);
      expect(frame.addScore).toHaveBeenCalled();
    });
  });

  describe('calculating scores for frame', function() {
    it('adds score from frame', function(){
      game.nextFrame();
      game.addScore(1);
      game.addScore(5);
      expect(game.calculateGameScore()).toEqual(6);
    });
  });




});
