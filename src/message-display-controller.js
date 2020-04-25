"use strict";

function MessageDisplayController() {
  const messageDisplay = $( ".message-display" );

  this.displayMessage = function displayMessage( message ) {
    messageDisplay.text( message );
  };
}
