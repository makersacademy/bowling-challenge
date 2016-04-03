$(document).ready(function () {
  var frame = new Frame();
  var game = new Game(frame);

  createScoreTable();

  function createScoreTable() {
    for (var i = 1; i <= 10; i ++) {
      $("#score-table").append("<tr><td>" + i + "</td><td>" + 1 + "</td><td id='frame" + i + "-roll1'></td><td><td></tr>");
      $("#score-table").append("<tr><td>" + i + "</td><td>" + 2 + "</td><td id='frame" + i + "-roll2'></td><td><td></tr>");
    }
    $("#score-table").append("<tr><td>" + 10 + "</td><td>" + 3 + "</td><td id='frame" + 10 + "-roll3'></td><td><td></tr>");
  };

});
