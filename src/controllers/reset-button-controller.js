"use strict";

function ResetButtonController( onClickCallback ) {
  const _callback = onClickCallback;
  $( "#reset-game" ).click( () => {
    _callback();
  } );
}
