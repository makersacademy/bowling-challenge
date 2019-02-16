beforeEach(function () {
  jasmine.addMatchers({
    toBePlaying: function () {
      return {
        compare: function (actual, expected) {
          var player = actual;

          return {
            pass: player.currentlyPlayingSong === expected && player.isPlaying
          };
        }
      };
    }
  });
});

function do_one_game_without_strikes_or_spares(game) {
  game.roll(1)
  game.roll(2)
  game.roll(3)
  game.roll(4)
  game.roll(5)
  game.roll(1)
  game.roll(2)
  game.roll(3)
  game.roll(4)
  game.roll(5)
  game.roll(1)
  game.roll(2)
  game.roll(3)
  game.roll(4)
  game.roll(5)
  game.roll(1)
  game.roll(2)
  game.roll(3)
  game.roll(4)
  game.roll(5)
}

function do_one_game_with_strikes(game) {
  game.roll(10)
  game.roll(3)
  game.roll(4)
  game.roll(5)
  game.roll(1)
  game.roll(2)
  game.roll(3)
  game.roll(4)
  game.roll(5)
  game.roll(1)
  game.roll(2)
  game.roll(10)
  game.roll(10)
  game.roll(2)
  game.roll(3)
  game.roll(4)
  game.roll(5)
}
