/* eslint-disable no-underscore-dangle */

"use strict";

function ResetButtonController( onClickCallback ) {
  const _callback = onClickCallback;

  function _attachResetButtonListener() {
    $( "#reset-game" ).click( () => {
      _callback();
    } );
  }

  this.initialise = function initialise() {
    _attachResetButtonListener();
  };
}