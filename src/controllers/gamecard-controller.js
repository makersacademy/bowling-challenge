"use strict";

function GamecardController() {
  let _game = new Game();
  let _frameScoreControllers = [];
  const _scoreButtonControllers = [];
  const _resetButtonController = new ResetButtonController( _resetScorecard );
  const _messageDisplayController = new MessageDisplayController();
  let _frameDisplayWasLastChanged = 0;

  function _handleMessageDisplay() {
    function updateDisplayForFrameScores() {
      if ( _game.frame( _game.currentFrameNumber - 1 ).isStrike() ) {
        _messageDisplayController.displayStrike();
      } else if ( _game.frame( _game.currentFrameNumber - 1 ).isSpare() ) {
        _messageDisplayController.displaySpare();
      } else {
        _messageDisplayController.displayMessage( "" );
      }
    }

    const isNewFrameSinceLastUpdate = _game.currentFrameNumber !== _frameDisplayWasLastChanged;
    const isTimeToUpdate = _game.currentFrameNumber > 0 && isNewFrameSinceLastUpdate;
    if ( isTimeToUpdate ) {
      updateDisplayForFrameScores();
      _frameDisplayWasLastChanged = _game.currentFrameNumber;
    }
  }

  function _updateScoreCard() {
    for ( let i = 0; i < _game.currentFrameNumber + 1; i += 1 ) {
      _frameScoreControllers[ i ].updateScores();
    }

    _handleMessageDisplay();

    if ( _game.isComplete() ) {
      $( "#game-total" ).text( _game.currentScore );

      if ( _game.currentScore === 0 ) {
        _messageDisplayController.displayGutterGame();
      } else if ( _game.currentScore === 300 ) {
        _messageDisplayController.displayPerfectGame();
      }
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
    _messageDisplayController.resetDisplay();
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
    _messageDisplayController.resetDisplay();
  }

  function _initialiseButtonControllers() {
    for ( let i = 0; i < 11; i += 1 ) {
      const controller = new ScoreButtonController( _onClickScoreButton, i );
      _scoreButtonControllers.push( controller );
    }
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
