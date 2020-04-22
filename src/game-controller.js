"use strict";

$( document ).ready( () => {
  const game = new Game();

  function updateScoreCard() {
    for ( let i = 0; i < 10; i += 1 ) {
      if ( game.frame( i ).isSpare() ) {
        $( `#frame${i}-score1` ).text( game.frame( i ).score1 );
        $( `#frame${i}-score2` ).text( "/" );
      } else if ( game.frame( i ).isStrike() ) {
        $( `#frame${i}-score1` ).text( "" );
        $( `#frame${i}-score2` ).text( "X" );
      } else if ( i === 9 ) {
        $( `#frame${i}-score1` ).text( game.frame( i ).score1 );
        $( `#frame${i}-score2` ).text( game.frame( i ).score2 );

        let score3;

        if ( game.frame( i ).score3 === null && i === 9 ) {
          score3 = 0;
        } else {
          score3 = game.frame( i ).score3;
        }

        $( `#frame${i}-score3` ).text( score3 );
      } else {
        $( `#frame${i}-score1` ).text( game.frame( i ).score1 );
        $( `#frame${i}-score2` ).text( game.frame( i ).score2 );
      }

      $( `#frame${i}-total` ).text( game.frame( i ).total );
    }

    if ( game.isComplete() ) {
      $( "#game-total" ).text( game.currentScore );
      $( "#input-score-button" ).attr( "disabled", true );
    }
  }

  for ( let i = 0; i < 11; i += 1 ) {
    $( `#input-score-${i}` ).click( () => {
      game.addScore( i );
      updateScoreCard();
    } );
  }
} );
