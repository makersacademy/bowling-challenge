$( document ).ready(function() {

    var frame = new Frame();
    var scorecard = new ScoreCard();

    showAllFrames();
    // combinedScore();
  
    $('#roll').click(function() { 
        frame.rollOneToNine($('#roll_one').val(), $('#roll_two').val());
        showAllFrames();
    });

    $('#last_roll').click(function() { 
        frame.rollTen($('#last_roll_one').val(), $('#last_roll_two').val(), $('#last_roll_three').val());
        showAllFrames();
    });
    
    $('#calculate_total').click(function() { 
        let n =  scorecard.normalScores(frame._allFrames);
        let sp = scorecard.spares(frame._allFrames);
        let st = scorecard.strikes(frame._allFrames);
        let total = scorecard.total(frame._allFrames, n, sp, st)
        return scorecard.calculateTotal(total)
    });

      function showAllFrames(){
        $('#all_frames').text(frame._allFrames);
      }

    //   function combinedScore(){
    //     $('#combined_score').text(combinedScore);
    //   }

    // $('#decrease-temp').click(function() {
    //   thermostat.decreaseTemperature();
    //   updateTemperature();
    // });
  
    // $('#reset-temp').click(function() {
    //   thermostat.resetTemperature();
    //   updateTemperature();
    // });
  
    // $('#toggle-psm').click(function() {
    //   thermostat.powerSaveToggle();
    //   updatePowerSavingMode();
    // });
  
    // $('#select-city').submit(function(event) {
    //   event.preventDefault();
    //   var city = $('#current-city').val();
    //   displayWeather(city)
    // })
  
    // function updateTemperature() {
    //   $('#get-temp').text(thermostat.getTemperature());
    //   $('#get-temp').attr('class', thermostat.getUsage());
    // }
  
    // function updatePowerSavingMode() {
    //   $('#power-save').text(thermostat.powerSaveModeStatus());
    // }
  
  });