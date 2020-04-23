"use strict";

$( document ).ready( () => {
  let game = new Game();

  function disableButton( button ) {
    button.addClass( "input-button__disabled" );
    button.prop( "disabled", true );
  }

  function enableButton( button ) {
    button.removeClass( "input-button__disabled" );
    button.prop( "disabled", false );
  }

  function disableInvalidInputButtons() {
    const maxNextScore = game.maxNextScore();
    for ( let i = 0; i < 11; i += 1 ) {
      if ( i > maxNextScore || game.isComplete() ) {
        disableButton( $( `#input-score-${i}` ) );
      } else {
        enableButton( $( `#input-score-${i}` ) );
      }
    }
  }

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
        disableInvalidInputButtons();
      } );
    }
  }

  function resetFrameScore( frameNumber ) {
    $( `#frame-${frameNumber}-score-1` ).text( "" );
    $( `#frame-${frameNumber}-score-2` ).text( "" );
    $( `#frame-${frameNumber}-total` ).text( "" );
  }

  function resetInputButtons() {
    for ( let i = 0; i < 11; i += 1 ) {
      enableButton( $( `#input-score-${i}` ) );
    }
  }

  function resetScorecard() {
    game = new Game();

    for ( let i = 0; i < 10; i += 1 ) {
      resetFrameScore( i );
    }

    $( `#frame-${9}-score-3` ).text( "" );
    $( "#game-total" ).text( "" );

    resetInputButtons();
  }

  function attachResetButtonListener() {
    $( "#reset-game" ).click( () => {
      resetScorecard();
    } );
  }

  function attachEventListeners() {
    attachScoreButtonListeners();
    attachResetButtonListener();
  }

  attachEventListeners();
} );
