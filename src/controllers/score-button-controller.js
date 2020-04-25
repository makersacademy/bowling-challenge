"use strict";

function ScoreButtonController( onClickCallback, frameNumber ) {
  const _callback = onClickCallback;
  const _frameNumber = frameNumber;
  const _button = $( `#input-score-${_frameNumber}` );
  _button.click( () => {
    _callback( _frameNumber );
  } );

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
}
