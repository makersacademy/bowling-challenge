$(document).ready(function(){

  var game = new Game();
  var strike = false;
  var spare = false;

  displayAll();

  $('#my-form').submit(function(event) {
    event.preventDefault();
    var pins = $('#pins').val();
    $('#game-status').text( "Playing..." );

    if ( game.finish === false ){
    // game.frame < 10

        // pass Strike Bonus
        if( strike ){
          strike.count > 2 ? game.scores[ game.frame - 3 ][2] = strike.addBonus(pins) : game.scores[ game.frame - 2 ][2] = strike.addBonus(pins)
          strike.decreaseCount();
          if( strike.count === 0 ){ strike = false }
        }
        // pass Spare Bonus
        if( spare ){
          game.scores[ game.frame - 2 ][2] = spare.addBonus(pins)
          spare = false
        }

        game.passScore(pins);

        displayAll();

        // check Spare
        if( game.roll === 2 ){
              if( game.sumFrameScores() === 10 ){ spare = new Spare() }
              moveNextFrame();
        }

        // check Strike
        if( pins === '10' ){
              game.frameScores.push('-')
              game.scores[ game.frame - 1 ] = game.frameScores
              displayAll();
              moveNextFrame();
              strike === false ? ( strike = new Strike() ) : strike.increaseCount();
        } else {
              game.changeRoll();
        }

    }

  });

  function moveNextFrame(){
    game.clearFrameScores();
    game.increaseFrame();
  }

  function displayAll(){
    displayFrame();
    displayRoll();
    displayTable();
    displayTotalScore();
    $('#1').text( game.scores );
    $('#2').text( game.frameScores );
    if( strike ){
      $('#3').text( strike.bonus1 );
      $('#4').text( strike.bonus2 );
      $('#5').text( strike.count );
    }
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
