$(document).ready(function() {
  var game = new Game();

  $('#total_score').text(game.calculateScore());

  $('#zero').on('click', function() {
    submitSkittles('#zero');
  });

  $('#one').on('click', function() {
    submitSkittles('#one');
  });

  $('#two').on('click', function() {
    submitSkittles('#two');
  });

  $('#three').on('click', function() {
    submitSkittles('#three');
  });

  $('#four').on('click', function() {
    submitSkittles('#four');
  });

  $('#five').on('click', function() {
    submitSkittles('#five');
  });

  $('#six').on('click', function() {
    submitSkittles('#six');
  });

  $('#seven').on('click', function() {
    submitSkittles('#seven');
  });

  $('eight').on('click', function() {
    submitSkittles('#eight');
  });

  $('#nine').on('click', function() {
    submitSkittles('#nine');
  });

  $('#ten').on('click', function() {
    submitSkittles('#ten');
  });


  function submitSkittles(number) {
    var score = +($(number).text());
    console.log("skittles down: " + score);
    console.log("frame number" + game.calculateFrameNumber());
    game.bowl(score);
    updateScore();
  }

  function updateScore() {
    $('#total_score').text(game.calculateScore());
    console.log("total score" + game.calculateScore())
  }















});
