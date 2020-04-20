
$(document).ready(function() {
    var scorecard = new Scorecard();
    roundTotal();

    $('#enterFirstBowl').on('click', function() {
      scorecard.firstBowl();
    });

    $('#enterSecondBowl').on('click', function() {
      scorecard.secondBowl();
    });

    $('#calculateScore').on('click', function() {
      scorecard.roundSummary();
    });

  function roundTotal() {
      $('#roundTotal').text(scorecard.roundSummary());
  };
})

/*
function updateTemperature() {
    $('#temperature').text(thermostat.temperature);
};
});


$( "form" ).submit(function( event ) {
  if ( $( "input:first" ).val() === "javatpoint" ) {
    $( "span" ).text( "Submitted Successfully." ).show();
    return;
  }

/*
Scorecard = function() {
  this.bowlOne = [];
  this.bowlTwo = [];
  this.frameTotal = [];
};

Scorecard.prototype.firstBowl = function(num) {
  this.bowlOne.push(num);
  return this.bowlOne
}

Scorecard.prototype.secondBowl = function(num) {
  this.bowlTwo.push(num);
  return this.bowlTwo
}

Scorecard.prototype.roundSummary = function() {
  if (this.bowlOne == 10) {
  }


  this.frameTotal.push(this.bowlOne[0] + this.bowlTwo[0]);
  return this.frameTotal
}

*/
