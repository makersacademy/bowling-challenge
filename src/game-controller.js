"use strict";

$( document ).ready( () => {
  const game = new Game();

  $( "#input-score-button" ).click( () => {
    const newScore = $( "#input-score" ).val();
    game.addScore( newScore );

    for ( let i = 0; i < 10; i += 1 ) {
      if ( game.frame( i ).isSpare() ) {
        $( `#frame${i}-score1` ).text( game.frame( i ).score1 );
        $( `#frame${i}-score2` ).text( "/" );
        $( `#frame${i}-total` ).text( game.frame( i ).total );
      } else {
        $( `#frame${i}-score1` ).text( game.frame( i ).score1 );
        $( `#frame${i}-score2` ).text( game.frame( i ).score2 );
        $( `#frame${i}-total` ).text( game.frame( i ).total );
      }
    }
  } );
} );
