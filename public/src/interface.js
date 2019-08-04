$( document ).ready(function() {

    var frame = new Frame();
    var scorecard = new ScoreCard();

    showAllFrames();
    combinedScore();

    function getUrlParams( prop ) {
        var params = {};
        var search = decodeURIComponent( window.location.href.slice( window.location.href.indexOf( '?' ) + 1 ) );
        var definitions = search.split( '&' );
    
        definitions.forEach( function( val, key ) {
            var parts = val.split( '=', 2 );
            params[ parts[ 0 ] ] = parts[ 1 ];
        } );
        return ( prop && prop in params ) ? params[ prop ] : params;
    }
  
    $('#roll').click(function() { 
        frame.rollOneToNine(getUrlParams('roll_one'), getUrlParams('roll_two'));
    });

    $('#last_roll').click(function() { 
        frame.rollTen(getUrlParams('last_roll_one'), getUrlParams('last_roll_two'), getUrlParams('last_roll_three'));
    });
    
    $('#spares').click(function() { 
        var spares = scorecard.spares(frame._allFrames);
    });

    $('#strikes').click(function() { 
        var strikes = scorecard.strikes(frame._allFrames);
    });

    $('#other').click(function() { 
        var other = scorecard.normalScores(frame._allFrames);
    });

    $('#show_all_frames').click(function() { 
        var total = scorecard.total(frame._allFrames, other, spares, strikes)
    });

    $('#total_score').click(function() { 
        var combinedScore = scorecard.calculateTotal(total)
    });

      function showAllFrames(){
        $('#all_frames').text(frame._allFrames);
      }

      function combinedScore(){
        $('#combined_score').text(combinedScore);
      }
    


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