"use strict";

function GameController() {
  let game = new Game();

  function enableButton( button ) {
    button.removeClass( "input-button__disabled" );
    button.addClass( "input-button__enabled" );
    button.prop( "disabled", false );
  }

  function disableButton( button ) {
    button.addClass( "input-button__disabled" );
    button.removeClass( "input-button__enabled" );
    button.prop( "disabled", true );
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

  function updateSpareFrame( frameNumber ) {
    const frame = game.frame( frameNumber );
    $( `#frame-${frameNumber}-score-1` ).text( frame.score1 );
    $( `#frame-${frameNumber}-score-2` ).text( "/" );
  }

  function updateStrikeFrame( frameNumber ) {
    $( `#frame-${frameNumber}-score-1` ).text( "" );
    $( `#frame-${frameNumber}-score-2` ).text( "X" );
  }

  function updateNormalFrame( frameNumber ) {
    const frame = game.frame( frameNumber );
    $( `#frame-${frameNumber}-score-1` ).text( frame.score1 );
    $( `#frame-${frameNumber}-score-2` ).text( frame.score2 );
  }

  function updateTenthFrame( frameNumber ) {
    const frame = game.frame( frameNumber );

    if ( frame.score1 === 10 ) {
      $( `#frame-${frameNumber}-score-1` ).text( "X" );

      if ( frame.score2 === 10 ) {
        $( `#frame-${frameNumber}-score-2` ).text( "X" );
      } else {
        $( `#frame-${frameNumber}-score-2` ).text( frame.score2 );
      }
    } else if ( frame.score1 + frame.score2 === 10 ) {
      $( `#frame-${frameNumber}-score-1` ).text( frame.score1 );
      $( `#frame-${frameNumber}-score-2` ).text( "/" );
    } else {
      $( `#frame-${frameNumber}-score-1` ).text( frame.score1 );
      $( `#frame-${frameNumber}-score-2` ).text( frame.score2 );
    }

    if ( frame.score3 === 10 ) {
      $( `#frame-${frameNumber}-score-3` ).text( "X" );
    } else {
      $( `#frame-${frameNumber}-score-3` ).text( frame.score3 );
    }
  }

  function updateScoreCard() {
    for ( let i = 0; i < game.currentFrameNumber + 1; i += 1 ) {
      if ( game.frame( i ).isSpare() ) {
        updateSpareFrame( i );
      } else if ( game.frame( i ).isStrike() ) {
        updateStrikeFrame( i );
      } else if ( i === 9 ) {
        updateTenthFrame( i );
      } else {
        updateNormalFrame( i );
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

  function attachEventListeners() {
    attachResetButtonListener();
    attachScoreButtonListeners();
  }

  this.initialise = function initialise() {
    attachEventListeners();
    resetInputButtons();
  };
}
