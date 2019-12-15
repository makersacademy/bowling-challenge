$(document).ready(function() {
  var game = new Game();

  $("#input-rolls").submit(function(event) {
    event.preventDefault();
    var values = $(this).serializeArray();
    var firstRoll = values[0].value;
    var secondRoll = values[1].value;

    game.roll([firstRoll, secondRoll]);

    $('#score-card tr:last').after(`<tr><td>${game.currentFrame}</td><td>${[firstRoll + ", " + secondRoll]}</td><td>${game.calculateTotalScore()}</td></tr>`);
  });

  // $("#input-rolls").submit(function(event) {
  //   $("#test").text("ciao")
  //   $("header").text("ciao")
  //   var firstRoll = $("#first-roll");
  //   var secondRoll = $("#second-roll")
  //   console.log(firstRoll, secondRoll);
  //   game.roll([firstRoll, secondRoll]);
  //   $('#score-card tr:last').after(`<tr>${game.currentFrame}</tr><tr>${[firstRoll, secondRoll]}</tr><tr>${game.calculateTotalScore()}</tr>`);
  // });
});

// $('#myForm').submit(function() {
//   // Get all the forms elements and their values in one step
//   var values = $(this).serialize();

// });
