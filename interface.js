$('#roll').click(function() {
  var game = new Bowling();
  game.addFrame();
  $('#frame').text(game.currentFrame());
  //updateFrame();
  //game.playRoll(1);
  //$('#pins1').text(game.pins1[game.currentFrame()-1]);
});

// $(document).click(function() {
//   game.playRoll(2);
//   $('#pins2').text(game.pins2[game.currentFrame()]);
//   updateFrame();
// });

// function updateFrame() {
//   var game = new Bowling();
//   game.addFrame();
//   $('#frame').text(game.currentFrame());
// }
