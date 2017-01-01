$(document).ready(function(){

  var calculator;
  var game;
  var strike = false;
  var spare  = false;

  $('.start-btn').click(function() {
      if( game ){
        game.scores = [['-','-','-'],['-','-','-'],['-','-','-'],['-','-','-'],['-','-','-'],['-','-','-'],['-','-','-'],['-','-','-'],['-','-','-'],['-','-','-']]
        displayAll();
      }
      $('#game-status').text("Ready to start a new game :-)");
      $('#special').text("Press the number you knocked down.");
      calculator = new Calculator();
      game = new Game();
      displayAll();
  });

  $('.btn').click(function() {
      var pins = this.id;
      if( game.frameScores[0] + Number(pins) > 10 && game.frame < 10 ){
        $('#special').text( "You can't knock down more than 10 pins." );
      } else {
        if( game.finish === false ){
            $('#game-status').text("Playing...");
            $('#special').text( "Press the number you knocked down." );
            passStrikeBonus( pins );
            passSpareBonus( pins );
            game.passScore( pins );
            displayAll();
            game.frame < 10 ? underTenFrame( pins ) : TenFrame( pins )
        }
      }
  });

  function TenFrame( pins ){
     // check Spare
     if( isSpare() ){
       game.thirdRoll = true
       $('#special').text( "SPARE!!!!!" )
      }
     // check Strike
     if( pins === '10' ){
       game.thirdRoll = true
       $('#special').text( "STRIKE!!!!!" );
     }
     // check whether this game has finished or not
     if ( game.isGameFinish() ){
       game.finish = true
       $('#game-status').text( "Your score is " + calculator.sum( game.scores ) + "!" );
       if( calculator.sum( game.scores ) === 300 ){
         $('#special').text( "Perfect Game!!!!!!!!!!!" );
       } else if( calculator.sum( game.scores ) === 0 ){
         $('#special').text( "Gutter Game... what's wrong with you..." );
       } else {
         $('#special').text( "Press [ NEW GAME ] to start again" );
       }
     }
     game.increaseRoll();
  }

  function underTenFrame( pins ){

     // check Spare
     if( isSpare() ){
       spare = new Spare()
       $('#special').text( "SPARE!!!!!" );
     }

     // check Strike
     if( pins === '10' ){
       game.passStrikeSecondRollScore();
       displayAll();
       strike === false ? ( strike = new Strike() ) : strike.increaseCount();
       $('#special').text( "STRIKE!!!!!" );
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
    displayProcess();
    displayTable();
    displayTotalScore();
  }

  function displayProcess(){
    $('#where').text( 'Frame ' + game.frame + ', Roll ' + game.roll );
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
