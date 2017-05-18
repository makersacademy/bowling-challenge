describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("roll", function() {
    describe('One frame', function() {

      it("allows a player to bowl two rolls and knock down a specified number of pins", function() {
        game.roll(1);
        game.roll(2);
        expect(game.rollScore()).toEqual(3);
      });
    });

    describe('Spare bonus', function() {

      it("allows a player to have a spare and adds up its related bonus", function() {
        game.roll(5);
        game.roll(5);
        game.roll(3);
        expect(game.rollScore()).toEqual(16);
      });

      it("adds up the spare bonus only for roll after the spare", function() {
        game.roll(5);
        game.roll(5);
        game.roll(3);
        game.roll(3);
        expect(game.rollScore()).toEqual(19);
      });

      it("detects a spare frame after a normal frame", function() {
        game.roll(1);
        game.roll(1);
        game.roll(5);
        game.roll(5);
        game.roll(1);
        game.roll(1);
        expect(game.rollScore()).toEqual(15);
      });
    });

    describe('Strike bonus', function() {

      it("allows a player to have a strike and adds up its related bonus", function() {
        game.roll(10);
        game.roll(2);
        game.roll(2);
        expect(game.rollScore()).toEqual(18);
      });

      it("detects a strike frame after a normal frame", function() {
        game.roll(1);
        game.roll(1);
        game.roll(10);
        game.roll(5);
        game.roll(3);
        expect(game.rollScore()).toEqual(28);
      });
    });

    describe('Strike and Spare', function() {

      it("detects a strike followed by a spare", function() {
        game.roll(1);
        game.roll(1);
        game.roll(10);
        game.roll(5);
        game.roll(5);
        game.roll(5);
        expect(game.rollScore()).toEqual(42);
      });

      it("detectsa spare followed by a strike", function() {
        game.roll(0);
        game.roll(0);
        game.roll(5);
        game.roll(5);
        game.roll(10);
        game.roll(1);
        game.roll(1);
        expect(game.rollScore()).toEqual(34);
      });
    });

    describe('Game Over', function() {

      it("returns an error when the 10 frames have been played", function() {
        game.roll(3);
        game.roll(1);
        game.roll(1);
        game.roll(5);
        game.roll(4);
        game.roll(1);
        game.roll(1);
        game.roll(1);
        game.roll(1);
        game.roll(5);
        game.roll(4);
        game.roll(1);
        game.roll(1);
        game.roll(4);
        game.roll(5);
        game.roll(1);
        game.roll(1);
        game.roll(1);
        game.roll(1);
        game.roll(5);

        expect(function() {
          game.roll(2);
        }).toThrowError("Game over");
      });

      it("returns an error when the 10 frames have been played including two strikes", function() {
        game.roll(1);
        game.roll(1);
        game.roll(1);
        game.roll(1);
        game.roll(5);
        game.roll(4);
        game.roll(1);
        game.roll(1);
        game.roll(4);
        game.roll(5);
        game.roll(1);
        game.roll(1);
        game.roll(1);
        game.roll(1);
        game.roll(5);
        game.roll(4);
        game.roll(10);
        game.roll(10);

        expect(function() {
          game.roll(2);
        }).toThrowError("Game over");
      });

    });
  });

  describe('isAgutterGame', function() {
    it("allows a player to complete a game without knocking down any pins", function() {

      var i;
      for (i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.isAgutterGame()).toBe(true);
    });

    it("returns false if invoked when a game is not completed and returning 0 as total sum", function() {
      var i;
      for (i = 0; i < 19; i++) {
        game.roll(0);
      }
      expect(game.isAgutterGame()).toBe(false);
    });
  });

});
