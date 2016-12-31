$(document).ready(function(){

  var calculator = new Calculator();
  var game = new Game();
  var strike = false;
  var spare  = false;

  displayAll();

  $('#my-form').submit(function(event) {
      event.preventDefault();
      var pins = $('#pins').val();

      if( game.finish === false ){
          $('#game-status').text( "Playing..." );
          passStrikeBonus( pins );
          passSpareBonus( pins );
          game.passScore( pins );
          displayAll();
          game.frame < 10 ? underTenFrame( pins ) : TenFrame( pins )
      }
  });

  function TenFrame( pins ){
     // check Spare
     if( isSpare() ){ game.thirdRoll = true }
     // check Strike
     if( pins === '10' ){ game.thirdRoll = true }
     // check whether this game has finished or not
     if ( game.isGameFinish() ){
       game.finish = true
       $('#game-status').text( "Your score is " + calculator.sum( game.scores ) + "!" );
     }
     game.increaseRoll();
  }

  function underTenFrame( pins ){
     // check Spare
     if( isSpare() ){ spare = new Spare() }

     // check Strike
     if( pins === '10' ){
       game.passStrikeSecondRollScore();
       displayAll();
       strike === false ? ( strike = new Strike() ) : strike.increaseCount();
     } else { game.changeRoll() }

     game.increaseFrame();
     game.clearFrameScores();

  }

  function isSpare(){
    return game.roll === 2 && calculator.sum( game.frameScores ) === 10
  }

  function passStrikeBonus( pins ){
    if( strike ){
      if( strike.count > 2 ){
        game.scores[ game.frame - 3 ][2] = strike.addBonus(pins)
      } else { game.scores[ game.frame - 2 ][2] = strike.addBonus(pins) }
      strike.decreaseCount();
      if( strike.count === 0 ){ strike = false }
    }
  }

  function passSpareBonus( pins ){
    if( spare ){
      game.scores[ game.frame - 2 ][2] = spare.addBonus(pins)
      spare = false
    }
  }

  function displayAll(){
    displayFrame();
    displayRoll();
    displayTable();
    displayTotalScore();
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
    for( i=0; i < game.scores.length; i++ ){
      for( j=0; j < game.scores[i].length; j++ ){
        place = '#' + (i+1) + '-' + (j+1)
        $(place.toString()).text( game.scores[i][j] );
      }
    }
  }

  function displayTotalScore(){
    $('#total').text( calculator.sum( game.scores ) );
  }

})
