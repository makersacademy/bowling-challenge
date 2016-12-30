$(document).ready(function(){

  var game = new Game();
  var strike;
  var spare;

  displayAll();

  $('#my-form').submit(function(event) {
    event.preventDefault();
    var pins = $('#pins').val();
    $('#game-status').text( "Playing..." );

    if( game.frame === 10 && game.finish === false ){

    } else {
    // game.frame < 10
      displayAll();
        // pass Strike Bonus
        if( strike ){
          game.scores[ game.frame - 2 ][2] = strike.addBonus(pins)
          if( strike.bonus.length === 2 ){ strike = null }
        }
        // pass Spare Bonus
        if( spare  ){
          game.scores[ game.frame - 2 ][2] = spare.addBonus(pins)
          spare = null
        }

        game.passScore(pins);

        displayAll();

        if( game.roll === 2 ){
              // check Spare
              if( game.sumFrameScores() === 10 ){ spare = new Spare() }
              game.clearFrameScores();
              game.increaseFrame();
        }

        // check Strike
        if( pins === '10' ){
              game.frameScores.push('-')
              game.scores[ game.frame - 1 ] = game.frameScores
              displayAll();
              game.clearFrameScores();
              game.increaseFrame();
              if( typeof(strike) === "undefined" || strike === null ){ strike = new Strike() }
        } else {
              game.changeRoll();
        }
        displayAll();
    }

  });

  function displayAll(){
    displayFrame();
    displayRoll();
    displayTable();
    displayTotalScore();
    $('#1').text( game.scores );
    $('#2').text( game.frameScores );
    if( strike ){ $('#3').text( strike.bonus ); }
  }

  function displayFrame(){
      $('#frame').text( game.frame );
  }

  function displayRoll(){
      $('#roll').text( game.roll );
  }

  function displayTable(){
    var i;
    var j;
    var place;
    for(i=0; i<game.scores.length; i++){
      for(j=0; j<game.scores[i].length; j++){
        place = '#' + (i+1) + '-' + (j+1)
        $(place.toString()).text( game.scores[i][j] );
      }
    }
  }

  function displayTotalScore(){
    $('#total').text( game.sumGameScores() );
  }

})
