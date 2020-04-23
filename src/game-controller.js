"use strict";

$( document ).ready( () => {
  let game = new Game();

  function updateScoreCard() {
    for ( let i = 0; i < game.currentFrameNumber + 1; i += 1 ) {
      if ( game.frame( i ).isSpare() ) {
        $( `#frame-${i}-score-1` ).text( game.frame( i ).score1 );
        $( `#frame-${i}-score-2` ).text( "/" );
      } else if ( game.frame( i ).isStrike() ) {
        $( `#frame-${i}-score-1` ).text( "" );
        $( `#frame-${i}-score-2` ).text( "X" );
      } else if ( i === 9 ) {
        $( `#frame-${i}-score-1` ).text( game.frame( i ).score1 );
        $( `#frame-${i}-score-2` ).text( game.frame( i ).score2 );
        $( `#frame-${i}-score-3` ).text( game.frame( i ).score3 );
      } else {
        $( `#frame-${i}-score-1` ).text( game.frame( i ).score1 );
        $( `#frame-${i}-score-2` ).text( game.frame( i ).score2 );
      }

      $( `#frame-${i}-total` ).text( game.frame( i ).total );
    }

    if ( game.isComplete() ) {
      $( "#game-total" ).text( game.currentScore );
    }
  }

  function attachScoreButtonListeners() {
    for ( let i = 0; i < 11; i += 1 ) {
      $( `#input-score-${i}` ).click( () => {
        game.addScore( i );
        updateScoreCard();
      } );
    }
  }

  function resetFrameScore( frameNumber ) {
    $( `#frame-${frameNumber}-score-1` ).text( "" );
    $( `#frame-${frameNumber}-score-2` ).text( "" );
    $( `#frame-${frameNumber}-total` ).text( "" );
  }

  function attachResetButtonListener() {
    $( "#reset-game" ).click( () => {
      game = new Game();

      for ( let i = 0; i < 10; i += 1 ) {
        resetFrameScore( i );
      }

      $( `#frame-${9}-score-3` ).text( "" );
      $( "#game-total" ).text( "" );
    } );
  }

  function attachEventListeners() {
    attachScoreButtonListeners();
    attachResetButtonListener();
  }

  attachEventListeners();
} );
