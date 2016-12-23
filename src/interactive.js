$(document).ready(function(){
  var controller;
  var frame;
  $('#roll').one('mouseenter',function () {
    game.roll(Math.floor(Math.random() * 11));
      frame = 1;
      controller = game.currentRoll;
      $("#frame-"+frame+"-roll-"+controller).text(game.rolls[controller-1]);
      frame = 1.5;
  });
  $('#roll').click(function () {
    game.roll(Math.floor(Math.random() * 11));
    controller = game.currentRoll;

    if (game.rolls ===10) {
      $("#frame-"+Math.floor(frame)+"-roll-"+controller).text('X');
      frame+=1;
    }
    else if (game.rolls[controller] + game.rolls[controller+1] === 10) {
      $("#frame-"+Math.floor(frame)+"-roll-"+controller).text(game.rolls[controller-1]);
      $("#frame-"+Math.floor(frame)+"-roll-"+(controller+1)).text('/');
      frame+=0.5;
    }
    else {

      $("#frame-"+Math.floor(frame)+"-roll-"+(controller)).text(game.rolls[controller-1]);
      frame+=0.5;

    }
    if (!isNaN(game.score())) {
      $('#total-score').text(game.score());
    }
  });
});
