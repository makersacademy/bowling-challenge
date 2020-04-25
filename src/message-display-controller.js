"use strict";

function MessageDisplayController() {
  const messageDisplay = $( ".message-display" );
  let timeout = null;

  this.displayMessage = function displayMessage( message ) {
    messageDisplay.text( message );
  };

  this.displayStrike = function displayStrike() {
    messageDisplay.text( "Strike!!" );
    messageDisplay.addClass( "strike-display" );
    timeout = setTimeout( () => { messageDisplay.removeClass( "strike-display" ); }, 3000 );
  };

  this.displaySpare = function displaySpare() {
    messageDisplay.text( "Spare!" );
    messageDisplay.addClass( "spare-display" );
    timeout = setTimeout( () => { messageDisplay.removeClass( "spare-display" ); }, 2000 );
  };

  this.displayPerfectGame = function displayPerfectGame() {
    messageDisplay.text( "Perfect!" );
    messageDisplay.addClass( "perfect-game-display" );
  };

  this.displayGutterGame = function displayGutterGame() {
    messageDisplay.text( "Oh no! Gutter Game!" );
    messageDisplay.addClass( "gutter-game-display" );
  };

  this.resetDisplay = function resetDisplay() {
    messageDisplay.removeClass( "strike-display" );
    messageDisplay.removeClass( "spare-display" );
    messageDisplay.removeClass( "perfect-game-display" );
    messageDisplay.removeClass( "gutter-game-display" );

    if ( timeout !== null ) {
      clearTimeout( timeout );
    }
  };
}
