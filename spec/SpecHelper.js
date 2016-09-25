var helperModule = (function() {
  var helpers = {};

   helpers.playGame = function(n, game, round) {
    for (var i = 0; i < n; i++) {
      game.play(round);
    }
};
return helpers;
})();
