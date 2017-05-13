
describe('A game', function() {
  var game;

  beforeEach(function(){
    game = new Game();
    frame = jasmine.createSpyObj('frame', ['rollOne','rollTwo','knockedPins','remainingPins'])
  });

    it('the starting score is displayed', function(){
      expect(game._currScore).toEqual(0);

    });

    it('starts with 10 frames', function(){
      expect(game.remainingFrames).toEqual(10);
    });

    it('decreases the number of frames as you play', function (){
      game.frameDecrease();
      game.frameDecrease();
      expect(game.remainingFrames).toEqual(8)
    });

    it('displays the players score at the end of each frame', function() {
      spyOn(Math, 'random').and.returnValue(0.4)
      game.updateScore();
      expect(game.playerScore()).toEqual(8);
      expect(game.remainingFrames).toEqual(9);
    });

    it('understands a gutter game', function(){
      spyOn(Math, 'random').and.returnValue(0);
      for(let i = 0; i > 11; i++){
        game.firstRoll();
        game.secondRoll();
        game.updateScore();
      }
      expect(game.playerScore()).toEqual(0);
    });


    describe('A completed frame', function(){
      it('will update the score after multiple frames', function (){
        spyOn(Math, 'random').and.returnValue(0.4)
        game.firstRoll();
        game.secondRoll();
        game.updateScore();
        game.firstRoll();
        game.secondRoll();
        game.updateScore();
        expect(game.playerScore()).toEqual(16);
      });

      });

    });
