/*global $:false, Game, Frame */

$(document).ready(function() {
  var game,
      gameNumber = 0,
      rollValue;

  startNewGame();

  $( 'body' ).on( 'click', '#startNewGame', function(event) {
   $( '#userInterface > p' ).html( 'Click the number of pins to knock down' ); 
   game = new Game();
   gameNumber++;
   drawButtons();
   drawScoreCard();
  });

  $( 'body' ).on('click', '.btn', function(event) {
    rollValue = $(this).attr('data-value');

    game.roll( parseInt(rollValue) );
    updateScore();
    game.isGameOver() ? startNewGame() : drawButtons();
  })


  function startNewGame() {
    var newGame = '<button id="startNewGame" type="button" ' +
                  'data-value="Play a new Game">Play a new Game</button>';
   $( '#buttonList' ).empty();
   $( '#userInterface > p' ).html(newGame); 
  }

  function drawButtons() {
    var i, btn, numButtons,
        currentFrame = game.currentFrame();
    
    if( currentFrame.isLastFrame() && 
       ( currentFrame.isStrike() || 
         currentFrame.pins === 20 ||
         currentFrame.isSpare() ) ) {
      numButtons = 10; 
    } else {
      numButtons = 10 - currentFrame.pins;
    }

    $( '#buttonList' ).empty();

    for( i = 0; i <= numButtons; i++ ) {
      btn  = "<button id='btn" + i + "' type='button' class='btn' " + 
        "data-value='" + i + "'>" + i + "</button>";
      $( '#buttonList' ).append(btn);
    }
  }

  function updateScore() {
    game.frames.forEach( function( frame, index ) {   
      var i = frame.frameIndex + 1,
      roll1 = game.gameRolls[frame.rollIndex],
      roll2 = '',
      identifier = '#game' + gameNumber + ' .frame' + i;

      if(frame.isStrike()) { 
        roll1 = 'X';
      } else if( frame.isSpare() ) {
        roll2 = '/'; 
      } else if ( frame.isFinished()) {
        roll2 = game.gameRolls[frame.rollIndex + 1];
      }

      $( identifier + ' .roll1' ).html('<p>' +  roll1 + '</p>');
      $( identifier + ' .roll2' ).html('<p>' +  roll2 + '</p>');
      $( identifier + ' .frameScore' ).html('<p>' +  game.score(i) + '</p>' );
    });
  }
  
  function drawScoreCard() {
  
    var scoreCard = "<ul id='game" + gameNumber + "' class='scoreCard' >" + 
    "      <li class='player1'></li>" +
    "      <li class='frame1'>" +
    "        <div class='frameNumber'>1</div>" +
    "        <div class='frameScore'></div>" +
    "        <div class='roll1'></div>" +
    "        <div class='roll2'></div>" +
    "      </li>" +
    "      <li class='frame2'>" +
    "        <div class='frameNumber'>2</div>" +
    "        <div class='frameScore'></div>" +
    "        <div class='roll1'></div>" +
    "        <div class='roll2'></div>" +
    "      </li>" +
    "      <li class='frame3'>" +
    "        <div class='frameNumber'>3</div>" +
    "        <div class='frameScore'></div>" +
    "        <div class='roll1'></div>" +
    "        <div class='roll2'></div>" +
    "      </li>" +
    "      <li class='frame4'>" +
    "        <div class='frameNumber'>4</div>" +
    "        <div class='frameScore'></div>" +
    "        <div class='roll1'></div>" +
    "        <div class='roll2'></div>" +
    "      </li>" +
    "      <li class='frame5'>" +
    "        <div class='frameNumber'>5</div>" +
    "        <div class='frameScore'></div>" +
    "        <div class='roll1'></div>" +
    "        <div class='roll2'></div>" +
    "      </li>" +
    "      <li class='frame6'>" +
    "        <div class='frameNumber'>6</div>" +
    "        <div class='frameScore'></div>" +
    "        <div class='roll1'></div>" +
    "        <div class='roll2'></div>" +
    "      </li>" +
    "      <li class='frame7'>" +
    "        <div class='frameNumber'>7</div>" +
    "        <div class='frameScore'></div>" +
    "        <div class='roll1'></div>" +
    "        <div class='roll2'></div>" +
    "      </li>" +
    "      <li class='frame8'>" +
    "        <div class='frameNumber'>8</div>" +
    "        <div class='frameScore'></div>" +
    "        <div class='roll1'></div>" +
    "        <div class='roll2'></div>" +
    "      </li>" +
    "      <li class='frame9'>" +
    "        <div class='frameNumber'>9</div>" +
    "        <div class='frameScore'></div>" +
    "        <div class='roll1'></div>" +
    "        <div class='roll2'></div>" +
    "      </li>" +
    "      <li class='frame10'>" +
    "        <div class='frameNumber'>10</div>" +
    "        <div class='frameScore'></div>" +
    "        <div class='roll1'></div>" +
    "        <div class='roll2'></div>" +
    "      </li>" +
    "    </ul>"; 

    $( '#scoreCardContainer' ).append(scoreCard);
  }
});
