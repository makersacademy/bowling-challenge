"use strict";

$( document ).ready( () => {
  const game = new Game();

  $( "#input-score-button" ).click( () => {
    const newScore = $( "#input-score" ).val();
    game.addScore( newScore );
    $( "#frame-1" ).text( game.frame( 1 ).score().total );
  } );
} );
