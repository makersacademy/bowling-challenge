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

function FrameScoreController( frame, frameNumber ) {
  const _frame = frame;
  const _frameNumber = frameNumber;

  function updateSpareFrame() {
    $( `#frame-${_frameNumber}-score-1` ).text( _frame.score1 );
    $( `#frame-${_frameNumber}-score-2` ).text( "/" );
  }

  function updateStrikeFrame() {
    $( `#frame-${_frameNumber}-score-1` ).text( "" );
    $( `#frame-${_frameNumber}-score-2` ).text( "X" );
  }

  function updateNormalFrame() {
    $( `#frame-${_frameNumber}-score-1` ).text( _frame.score1 );
    $( `#frame-${_frameNumber}-score-2` ).text( _frame.score2 );
  }

  function updateTenthFrame() {
    if ( _frame.score1 === 10 ) {
      displayFirstBallStrike();
    } else if ( _frame.score1 + _frame.score2 === 10 ) {
      displaySecondBallSpare();
    } else {
      displayNormalFirstTwoScores();
    }

    if ( _frame.score3 === 10 ) {
      displayThirdBallStrike();
    } else {
      displayThirdBallNormal();
    }

    function displayFirstBallStrike() {
      $( `#frame-${_frameNumber}-score-1` ).text( "X" );

      if ( _frame.score2 === 10 ) {
        $( `#frame-${_frameNumber}-score-2` ).text( "X" );
      } else {
        $( `#frame-${_frameNumber}-score-2` ).text( _frame.score2 );
      }
    }

    function displaySecondBallSpare() {
      $( `#frame-${_frameNumber}-score-1` ).text( _frame.score1 );
      $( `#frame-${_frameNumber}-score-2` ).text( "/" );
    }

    function displayNormalFirstTwoScores() {
      $( `#frame-${_frameNumber}-score-1` ).text( _frame.score1 );
      $( `#frame-${_frameNumber}-score-2` ).text( _frame.score2 );
    }

    function displayThirdBallStrike() {
      $( `#frame-${_frameNumber}-score-3` ).text( "X" );
    }

    function displayThirdBallNormal() {
      $( `#frame-${_frameNumber}-score-3` ).text( _frame.score3 );
    }
  }

  this.resetScores = function resetScores() {
    $( `#frame-${_frameNumber}-score-1` ).text( "" );
    $( `#frame-${_frameNumber}-score-2` ).text( "" );

    if ( _frameNumber === 9 ) {
      $( `#frame-${_frameNumber}-score-3` ).text( "" );
    }

    $( `#frame-${_frameNumber}-total` ).text( "" );
  };

  this.updateScores = function updateScores() {
    if ( _frame.isSpare() ) {
      updateSpareFrame();
    } else if ( _frame.isStrike() ) {
      updateStrikeFrame();
    } else if ( _frameNumber === 9 ) {
      updateTenthFrame();
    } else {
      updateNormalFrame();
    }

    $( `#frame-${_frameNumber}-total` ).text( _frame.total );
  };
}

function GamecardController() {
  function _updateScoreCard() {
    for ( let i = 0; i < _game.currentFrameNumber + 1; i += 1 ) {
      _frameScoreControllers[ i ].updateScores();
    }

    if ( _game.isComplete() ) {
      $( "#game-total" ).text( _game.currentScore );
    }
  }

  function _disableInvalidScoreButtons() {
    const maxNextScore = _game.maxNextScore();

    _scoreButtonControllers.forEach( ( controller, index ) => {
      if ( index > maxNextScore || _game.isComplete() ) {
        controller.disableButton();
      } else {
        controller.enableButton();
      }
    } );
  }

  function _onClickScoreButton( frameNumber ) {
    _game.addScore( frameNumber );
    _updateScoreCard();
    _disableInvalidScoreButtons();
  }

  function _resetScoreButtons() {
    _scoreButtonControllers.forEach( ( controller ) => {
      controller.enableButton();
    } );
  }

  function _resetScorecard() {
    _game = new Game();
    _initialiseFrameControllers();

    _frameScoreControllers.forEach( ( controller ) => {
      controller.resetScores();
    } );

    $( "#game-total" ).text( "" );

    _resetScoreButtons();
  }

  function _initialiseButtonControllers() {
    for ( let i = 0; i < 11; i += 1 ) {
      const controller = new ScoreButtonController( _onClickScoreButton, i );
      controller.initialise();
      _scoreButtonControllers.push( controller );
    }
    _resetButtonController.initialise();
  }

  function _initialiseFrameControllers() {
    _frameScoreControllers = [];
    for ( let i = 0; i < 10; i += 1 ) {
      const controller = new FrameScoreController( _game.frame( i ), i );
      _frameScoreControllers.push( controller );
    }
  }

  this.initialise = function initialise() {
    _initialiseButtonControllers();
    _resetScoreButtons();
    _initialiseFrameControllers();
  };

  let _game = new Game();
  let _frameScoreControllers = [];
  const _scoreButtonControllers = [];
  const _resetButtonController = new ResetButtonController( _resetScorecard );
}
