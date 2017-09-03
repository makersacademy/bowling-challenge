function cell (game, index) {
  return "<td class=\"frame-holder\">" +
      "<table class=\"frame-" + index + "\">" +
        "<tr class=\"frame-" + index + "\">" +
          "<td class=\"ball\" id=\"frame-" + index + "-ball-0\"></td>" +
          "<td class=\"ball\" id=\"frame-" + index + "-ball-1\"></td>" +
        "</tr>" +
        "<tr class=\"frame-total\" id=\"frame-"+ index +"-total\">" +
          game.frames[index].total() +
        "</tr>" +
      "</table>" +
    "</td>";
}

function drawScoreTable (game) {
  string = "";
  for (var i = 0; i < 11; i++) {
    string += cell(game, i);
  }
  return string;
}

function drawControls (game) {
  string = "";
  max = 10 - game.currentFrame().total();
  for (var i = 0; i <= max; i++) {
    string += "<button id=\"score-button-" + i + "\" onclick=\"play(game, " + i + ")\">" + i + "</button>";
  }
  return string;
}

function reDraw (game) {

  if ( (game.frameIndex == 10 && game.frames[9].total() === 10) || game.frameIndex < 10) {
    document.getElementById("game-controls").innerHTML = drawControls(game);
  }
  else {
    document.getElementById("game-controls").innerHTML = "";
  }
  document.getElementById("game-table-row").innerHTML = drawScoreTable(game);
  document.getElementById("score-total").innerHTML = game.total();
}

function play (game, score) {
  game.ball(score);
  reDraw(game);
}
