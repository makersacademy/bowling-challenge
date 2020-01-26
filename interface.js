$(document).ready(function() {
  var game = new Game();
  // $('#frames').text(game.viewFrames())
  $('#total-score').text(game.viewScore())

  $('#new-frame').on('click', function() {
    var roll = Number($("#roll1").val())
    game.newFrame(roll)
    updateScore()
    // updateFrames()
    console.log(game.viewFrames())
  })

  function updateScore() {
    $('#total-score').text(game.viewScore())
  }


  function updateFrames() {
    $('#frames').text(game.viewFrames())
  }


})

// $("#temp-up").on("click", function() {
//   if (thermostat.isMaxTemp()) {
//     alert('Maximum Temperature Reached');
//   }
//   thermostat.up();
//   updateTemp()
// });

// $("#temp-reset").on("click", function() {
//   thermostat.reset();
//   updateTemp()
// });

// $('#selected-city').change(function() {
//   thermostat.setCity($("#selected-city").val())
//   updateAPI()
// })