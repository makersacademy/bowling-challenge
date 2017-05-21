describe('Bowling, throwing first ball and hitting 3 pins:', function() {
  var theDude;
  var _hook;
  var game;
  beforeEach(function() {
    game = new Game();
    game.newGame();
    theDude = new Bowling(game);
    spyOn(theDude, '_hook').and.returnValue(3);
    theDude.throw();
  });

  describe('the pins are counted as points', function() {
    it('sets first roll points to 3.', function() {
      expect(theDude._firstThrow).toEqual(3);
    });
  });
  describe('it keeps count of the frame', function() {
    it('returns \'currentFrame = 1\' after first roll', function() {
      expect(theDude.game.currentFrame).toEqual(1);
    });
  });
  describe('it moves to the next roll', function() {
    it('current roll is second', function() {
      expect(theDude._currentThrow).toEqual('second');
    });
  });
  describe('it stores the frame points', function() {
    it('framePoints equals 3 on the first throw', function() {
      expect(theDude.game.scoreCard[0][0]).toEqual(3);
    })
  })
  describe('the second roll hits 3 pins', function() {
    beforeEach(function() {
      theDude.throw();
    })
      it('stores secondThrows points', function() {
        expect(theDude._secondThrow).toEqual(3);
      })
      it('stores the points for the first, second roll and total', function(){
        expect(theDude._framePoints).toEqual(6);
      })
    it('stores the game so far on the scoreCard', function() {
      expect(theDude.game.scoreCard[0]).toEqual([3,3,6]);
    })
    it('current roll is second', function() {
      expect(theDude._currentThrow).toEqual('first')
    })
  });
});
