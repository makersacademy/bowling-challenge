/* eslint-disable no-underscore-dangle */

"use strict";

function GamecardController() {
  let _game = new Game();
  let _frameScoreControllers = [];
  const _scoreButtonControllers = [];
  const _resetButtonController = new ResetButtonController( _resetScorecard );

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
}
