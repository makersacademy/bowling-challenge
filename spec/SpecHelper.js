var helperModule = (function() {
  var helpers = {};

   helpers.playGame = function(n, game) {
    for (var i = 0; i < n; i++) {
      game.play();
    }
};
return helpers;
})();
