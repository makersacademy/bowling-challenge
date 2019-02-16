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
  game.frames[0].roll(1)
  game.frames[0].roll(2)
  game.frames[1].roll(3)
  game.frames[1].roll(4)
  game.frames[2].roll(5)
  game.frames[2].roll(1)
  game.frames[3].roll(2)
  game.frames[3].roll(3)
  game.frames[4].roll(4)
  game.frames[4].roll(5)
  game.frames[5].roll(1)
  game.frames[5].roll(2)
  game.frames[6].roll(3)
  game.frames[6].roll(4)
  game.frames[7].roll(5)
  game.frames[7].roll(1)
  game.frames[8].roll(2)
  game.frames[8].roll(3)
  game.frames[9].roll(4)
  game.frames[9].roll(5)
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
