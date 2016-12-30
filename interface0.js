$(document).ready(function(){

  var game = new Game();
  var strike;
  var spare;

  displayAll();

  $('#my-form').submit(function(event) {
    event.preventDefault();
    var pins = $('#pins').val();

    if( game.frame === 10 $$ game.finish === false ){

        if( spare  ){ game.scores[ game.frame - 2 ][2] = spare.addBonus(pins) }
        if( strike ){
          game.scores[ game.frame - 2 ][2] = strike.addBonus(pins)
          if( strike.bonus.length === 2 ){ strike = null }
        }
        game.passScore(pins);

        if( game.isLastRoll(spare,strike) ){
          game.finish = true;
          $('#game-status').text( "Your score is " + game.sumGameScores() + "!" );
        }

        displayAll();
        game.increaseRoll();

    } else if( game.frame < 10 ) {
        $('#game-status').text( "Playing..." );


        if( game.roll === 2 ){
          game.passScore(pins);
          if( strike ){
            game.scores[ game.frame - 2 ][2] = strike.addBonus(pins)
            if( strike.bonus.length === 2 ){ strike = null }
          }
          if( game.sumFrameScores() === 10 ){ spare = new Spare() };
          displayAll();
          game.increaseFrame();
          game.changeRoll();
          game.clearFrameScores();
          // game.clearStrikeBonus();
        } else {
          if( spare  ){ game.scores[ game.frame - 2 ][2] = spare.addBonus(pins) }
          if( strike ){
            game.scores[ game.frame - 2 ][2] = strike.addBonus(pins)
            if( strike.bonus.length === 2 ){ strike = null }
          }
          if( pins === '10' ){
            if( strike ){
                game.scores[ game.frame - 2 ][2] = strike.addBonus(pins)
                if( strike.bonus.length === 2 ){ strike = null }
              } else { strike = new Strike() }
              game.passStrike()
              displayAll();
              game.increaseFrame();
              game.clearFrameScores();
          } else {
            if( strike ){
                game.scores[ game.frame - 2 ][2] = strike.addBonus(pins)
                if( strike.bonus.length === 2 ){ strike = null }
              }
            game.passScore(pins);
            spare = null;
            displayAll();
            game.changeRoll();
          }
        }
    }
  })

  function displayAll(){
    displayFrame();
    displayRoll();
    displayTable();
    displayTotalScore();
    $('#1').text( game.scores );
    $('#2').text( game.frameScores );
    $('#3').text( strike.bonus );
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
