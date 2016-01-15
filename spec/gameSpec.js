describe('Game', function() {
  var game;
  var frame;

  beforeEach(function () {
    game  = new Game();
    frame = {getFrameInfo: function(){}, roll: function(){},};
  });

  describe('#storeFrame', function() {
    beforeEach( function () {
      spyOn(frame, 'roll').and.returnValue(null);
      spyOn(frame, 'getFrameInfo').and.returnValue({1:{rolls: [4,3],
                                                      accumulator: 7,
                                                      bonus: null}});
    });

    describe('stores info for one frame', function () {
      it('without strike', function(){
        game.firstRoll  = 4;
        game.secondRoll = 3;
        game.storeFrame();
        expect(game.getGameInfo()).toEqual({1: {rolls: [4,3],
                                                accumulator: 7,
                                                bonus: null}});
      });

      it('with a strike', function () {
        game.firstRoll = 10;
        game.storeFrame();
        expect(game.getGameInfo()).toEqual({1: {rolls: [10,0],
                                                accumulator: 10,
                                                bonus: 'strike'}});
      });
    });
  });

  describe('#getTotal', function () {
    describe('returns total score when no bonus at any frame', function () {
      it('with gutter at both rolls', function () {
        for (var i = 1; i <= 10 ; i++) {
          game.firstRoll  = 0;
          game.secondRoll = 0;
          game.storeFrame();
        }
        expect(game.getTotal()).toEqual(0);
      });

      it('without gutter', function () {
        for (var i = 1; i <= 10 ; i++) {
          game.firstRoll  = 4;
          game.secondRoll = 3;
          game.storeFrame();
        }
        expect(game.getTotal()).toEqual(70);
      });
    });

    describe('returns total score when bonus with', function () {
      describe('spare', function () {
        it('at first frame',function () {
          game.firstRoll = 5;
          game.secondRoll = 5;
          game.storeFrame();
          for (var i = 2; i <= 10; i++) {
            game.firstRoll = 4;
            game.secondRoll = 3;
            game.storeFrame();
          }
          expect(game.getTotal()).toEqual(77);
        });

        it('at first two frames',function () {
          for (var i = 1; i <= 2; i++) {
            game.firstRoll = 5;
            game.secondRoll = 5;
            game.storeFrame();
          }
          for (var x = 3; x <= 10; x++) {
            game.firstRoll = 4;
            game.secondRoll = 3;
            game.storeFrame();
          }
          expect(game.getTotal()).toEqual(85);
        });

        it('at second frame',function () {
          game.firstRoll = 4;
          game.secondRoll = 3;
          game.storeFrame();
          game.firstRoll = 5;
          game.secondRoll = 5;
          game.storeFrame();
          for (var i = 3; i <= 10; i++) {
            game.firstRoll = 4;
            game.secondRoll = 3;
            game.storeFrame();
          }
          expect(game.getTotal()).toEqual(77);
        });
      });
    });
  });
});
