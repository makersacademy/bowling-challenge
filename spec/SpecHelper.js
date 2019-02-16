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
  var basicGameWithoutStrikesOrSpares = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  game.run(basicGameWithoutStrikesOrSpares);
}

function do_one_game_with_strikes(game) {
  var gameWithStrikes = [10, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 10, 10, 2, 3, 4, 5]
  game.run(gameWithStrikes)
}
