function ready(fn) {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

var game;

ready(function() {

  game = new Bowling();

  document.getElementById("play").addEventListener("click", function() {
    game.play();
    updateView();
  });

  document.getElementById("reset").addEventListener("click", function() {
    game = new Bowling();
    resetView();
  });


  function updateView() {
    resetView();
    el = document.getElementById("scores-body");
    var frames = game.scorecard.getAllFrames();
    for (var i = 1; i <= game.scorecard.getCurrentFrameNumber(); i++) {
      if (frames[i] === undefined) {
        return;
      }
      if (frames[i][2] === undefined) {
        frames[i][2] = "";
      }
      if (frames[i][3] === undefined) {
        frames[i][3] = "";
      }
      someHtml =  "<tr>" +
                    "<td>" + i + "</td>" +
                    "<td>" + frames[i][1] + "</td>" +
                    "<td>" + frames[i][2] + "</td>" +
                    "<td>" + frames[i][3] + "</td>" +
                    "<td>" + frames[i]["totalScore"] + "</td></tr>";
      el.innerHTML = el.innerHTML + someHtml;
    }
  }

  function resetView() {
    document.getElementById("scores-body").innerHTML = "";
  }

});
