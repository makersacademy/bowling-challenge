describe("Game", function(){
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['isComplete', 'addRoll']);
  });

  it('has default score of 0', function(){
    expect(game.score()).toEqual(0);
  });

  it('has a maximum of ten frames', function(){
    for(var i=0; i<(game.MAX_FRAMES+5); i++){
      game.addFrame(frame);
    }
    expect(game.frames().length).toEqual(game.MAX_FRAMES);
  });

  describe('currentFrame', function(){
    it('is null at initialization', function(){
      expect(game.currentFrame()).toBe(undefined);
    });

    it('knows the current frame', function(){
      game.addFrame(frame);
      expect(game.currentFrame()).toBe(frame);
      expect(game.frames()).toContain(frame);
    });
  });

  describe('roll', function(){
    it('creates a new frame and adds the roll', function(){
      game.roll(5);
      expect(game.frames().length).toEqual(1);
      expect(game.score()).toEqual(5);
    });
  });

});
