describe('Game tests', function(){

var game; var pins;

beforeEach(function(){
  game = new Game();
});

  describe('game set up', function(){
    it('game should contain an array of frames', function(){
      expect(game.frames).toEqual([]);
    });
    it('should start game with zero frames', function(){
      expect(game.frames.length).toEqual(0);
    });
  });

  describe('#bowl function', function(){
    it('should add frame to array of frames when bowl', function(){
      game.bowl(pins);
      expect(game.frames.length).toEqual(1);
    });
    // it('should create a new Frame instance', function(){
    //   // frame = createSpyObj('frame', ['?'])
    //   game.bowl(pins);
    //   expect(frame.new).toHaveBeenCalled();
    // });
  });


  describe('game score calculation', function(){
    it('can calculate gutter game score as zero', function(){
      gameOfFrames([0,0]);
      console.log(game.score());
      expect(game.score()).toEqual(0);
    });
  });

  function gameOfFrames(frame) {
    for(i = 0; i < 9; i++) {
      game.bowl(frame);
    }
  }


});
