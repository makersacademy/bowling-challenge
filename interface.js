$(document).ready(function() {
  var scorecard = new BowlingScorecard();
  updateFrame()

  function updateFrame() {
  $('#frame').text(scorecard.getFrame());
  $('#score').text(scorecard.getScore());
  }

  $('#0').on('click', function() { // event listener
  scorecard.checkRoll(roll=0); // update model
  // updateTemperature(); // update view
  updateFrame()
  })

  $('#1').on('click', function() { // event listener
  scorecard.checkRoll(roll=1); // update model
  // updateTemperature(); // update view
  updateFrame()
  })

  $('#2').on('click', function() { // event listener
  scorecard.checkRoll(roll=2); // update model
  // updateTemperature(); // update view
  updateFrame()
  })

  $('#3').on('click', function() { // event listener
  scorecard.checkRoll(roll=3); // update model
  // updateTemperature(); // update view
  updateFrame()
  })

  $('#4').on('click', function() { // event listener
  scorecard.checkRoll(roll=4); // update model
  // updateTemperature(); // update view
  updateFrame()
  })

  $('#5').on('click', function() { // event listener
  scorecard.checkRoll(roll=5); // update model
  // updateTemperature(); // update view
  updateFrame()
  })

  $('#6').on('click', function() { // event listener
  scorecard.checkRoll(roll=6); // update model
  // updateTemperature(); // update view
  updateFrame()
  })

  $('#7').on('click', function() { // event listener
  scorecard.checkRoll(roll=7); // update model
  // updateTemperature(); // update view
  updateFrame()
  })

  $('#8').on('click', function() { // event listener
  scorecard.checkRoll(roll=8); // update model
  // updateTemperature(); // update view
  updateFrame()
  })

  $('#9').on('click', function() { // event listener
  scorecard.checkRoll(roll=9); // update model
  // updateTemperature(); // update view
  updateFrame()
  })

  $('#10').on('click', function() { // event listener
  scorecard.checkRoll(roll=10); // update model
  // updateTemperature(); // update view
  updateFrame()
  })




})
