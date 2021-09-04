$(document).ready(function() {
  let game = new Game();
  let bowl = document.querySelector('#input-bowl')

  $('#submit').click( () => {
    game.input_bowl(parseInt(bowl.value));
    console.log(game)
    updateScore();
  })


  function updateScore() {
    $("#scores").text(game._score);
    // $("#temperature").attr("class", thermostat.energyUsage());
  }

})

// $('#power_save').click( () => {
//   thermostat.powerSavingSwitch();
//   if(thermostat.isPowerSaving() === true){
//     $("#powersave").text("on");
//   } else {
//     $("#powersave").text("off");
//   }
//   updateTemperature()
// })
