/* eslint-disable no-underscore-dangle */
"use strict";

function ResetButtonController( onClickCallback ) {
  const callback = onClickCallback;

  function attachResetButtonListener() {
    $( "#reset-game" ).click( () => {
      callback();
    } );
  }

  this.initialise = function initialise() {
    attachResetButtonListener();
  };
}

function ScoreButtonController( onClickCallback, frameNumber ) {
  const _callback = onClickCallback;
  const _frameNumber = frameNumber;
  let _button = null;

  this.disableButton = function disableButton() {
    _button.addClass( "input-button__disabled" );
    _button.removeClass( "input-button__enabled" );
    _button.prop( "disabled", true );
  };

  this.enableButton = function enableButton() {
    _button.removeClass( "input-button__disabled" );
    _button.addClass( "input-button__enabled" );
    _button.prop( "disabled", false );
  };

  function attachScoreButtonListener() {
    _button.click( () => {
      _callback( _frameNumber );
    } );
  }

  this.initialise = function initialise() {
    _button = $( `#input-score-${_frameNumber}` );
    attachScoreButtonListener();
  };
}

function GamecardController() {
  let game = new Game();

  function resetFrameScore( frameNumber ) {
    $( `#frame-${frameNumber}-score-1` ).text( "" );
    $( `#frame-${frameNumber}-score-2` ).text( "" );
    $( `#frame-${frameNumber}-total` ).text( "" );
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

  function _onClickScoreButton( frameNumber ) {
    game.addScore( frameNumber );
    updateScoreCard();
    _disableInvalidInputButtons();
  }

  const _scoreButtonControllers = [];
  const _resetButtonController = new ResetButtonController( resetScorecard );

  function _disableInvalidInputButtons() {
    const maxNextScore = game.maxNextScore();

    _scoreButtonControllers.forEach( ( controller, index ) => {
      if ( index > maxNextScore || game.isComplete() ) {
        controller.disableButton();
      } else {
        controller.enableButton();
      }
    } );
  }

  function _resetInputButtons() {
    _scoreButtonControllers.forEach( ( controller ) => {
      controller.enableButton();
    } );
  }

  function resetScorecard() {
    game = new Game();

    for ( let i = 0; i < 10; i += 1 ) {
      resetFrameScore( i );
    }

    $( `#frame-${9}-score-3` ).text( "" );
    $( "#game-total" ).text( "" );

    _resetInputButtons();
  }

  function _initialiseButtonControllers() {
    for ( let i = 0; i < 11; i += 1 ) {
      const controller = new ScoreButtonController( _onClickScoreButton, i );
      controller.initialise();
      _scoreButtonControllers.push( controller );
    }
    _resetButtonController.initialise();
  }

  this.initialise = function initialise() {
    _initialiseButtonControllers();
    _resetInputButtons();
  };
}
