$(document).ready(function(){

  var game = new Game();
  var strike = false;
  var spare  = false;

  displayAll();

  $('#my-form').submit(function(event) {
      event.preventDefault();
      var pins = $('#pins').val();

      if( game.finish === false ){
          $('#game-status').text( "Playing..." );
          game.frame < 10 ? underTenFrame( pins ) : TenFrame( pins )
      }
  });

  function TenFrame( pins ){

     passStrikeBonus( pins );
     passSpareBonus( pins );
     game.passScore( pins );
     displayAll();

     // check Spare
     if( game.roll === 2 && game.sumFrameScores() === 10 ){ game.thirdRoll = true }

     // check Strike
     if( pins === '10' ){ game.thirdRoll = true }

     // check whether this game has finished or not
     if ( game.isGameFinish() ){
       game.finish = true
       $('#game-status').text( "Your score is " + game.sumGameScores() + "!" );
     }

     game.increaseRoll();
  }


  function underTenFrame( pins ){

     passStrikeBonus( pins );
     passSpareBonus( pins );
     game.passScore( pins );
     displayAll();
     // check Spare
     if( game.roll === 2 ){
       if( game.sumFrameScores() === 10 ){ spare = new Spare() }
       moveNextFrame();
     }
     // check Strike
     if( pins === '10' ){
       game.passStrikeSecondRollScore();
       displayAll();
       moveNextFrame();
       strike === false ? ( strike = new Strike() ) : strike.increaseCount();
     } else {
       // when it is not strike
       game.changeRoll();
     }
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

  function moveNextFrame(){
    game.clearFrameScores();
    game.increaseFrame();
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
