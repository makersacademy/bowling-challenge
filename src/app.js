/*global $:false, Game, Frame */

$(document).ready(function() {
  var game, gameNumber, rollValue;

  gameNumber = 0;
  startNewGame();

  $( 'body' ).on( 'click', '#startNewGame', function() {
   $( '#userInterface > p' ).html( 'Click the number of pins to knock down' );
   game = new Game();
   gameNumber++;
   drawButtons();
   drawScoreCard();
  });

  $( 'body' ).on( 'click', '.btn', function() {
    rollValue = $(this).attr('data-value');
    game.roll( parseInt(rollValue) );
    updateScore();

    if( game.isGameOver() ) {
      startNewGame();
    } else {
      drawButtons();
    }
  })

  function startNewGame() {
    var newGame = '<button id="startNewGame" class="game-btn" type="button" ' +
                  'data-value="Play a new Game">Play a new Game</button>';
   $( '#buttonList' ).empty();
   $( '#userInterface > p' ).html(newGame);
  }

  function drawButtons() {
    var i,
        btn,
        numButtons,
        currentFrame = game.currentFrame(),
        pins = currentFrame.pins;

    if( isLastFrameReset() ) {
      numButtons = 10;
    } else {
      numButtons = pins < 10 ? 10 - pins : 20 - pins;
    }

    $( '#buttonList' ).empty();
    for( i = 0; i <= numButtons; i++ ) {
      btn  =  "<button id='btn" + i + "' type='button' class='btn' " +
              "data-value='" + i + "'>" + i + "</button>";
      $( '#buttonList' ).append(btn);
    }
  }

  function isLastFrameReset() {
    var currentFrame = game.currentFrame();

    return currentFrame.isLastFrame() && ( currentFrame.isStrike() ||
           currentFrame.pins === 20 || currentFrame.isSpare() );
  }

  function updateScore() {
    game.frames.forEach( function( frame, index ) {
      var startRoll   = frame.rollIndex,
          roll1       = game.gameRolls[startRoll],
          roll2       = '',
          roll3       = '',
          frameNumber = index + 1,
          identifier  = '#game' + gameNumber + ' .frame' + frameNumber;

      if(frame.isLastFrame()) {
        roll1 = roll1 === 10 ? 'X' : roll1;
        if(frame.turns > 1) {
          roll2 = valueRollTwo(frame, roll1, startRoll);
        }
        if(frame.turns > 2) {
          roll3 = valueRollThree(frame, roll1, startRoll);
        }

      } else if(frame.isFinished()) {
          if(frame.isStrike()) {
            roll1 = '';
            roll2 = 'X';
          } else {
            roll2 = frame.isSpare() ? '/' : game.gameRolls[startRoll + 1];
          }
        }

      $( identifier + ' .roll1' ).html('<p>' +  roll1 + '</p>');
      $( identifier + ' .roll2' ).html('<p>' +  roll2 + '</p>');
      $( identifier + ' .roll3' ).html('<p>' +  roll3 + '</p>');
      $( identifier + ' .frameScore' ).html('<p>' +
         game.score(frameNumber) + '</p>' );
    });
  }

  function valueRollTwo(frame, roll1, startRoll) {
    var roll2 = game.gameRolls[startRoll + 1];

    if(roll1 === 0 && roll2 === 10) { roll2 = '/'; }
    else if( roll1 + roll2 === 10 ) { roll2 = '/' }
    else if(roll1 === 'X' && roll2 === 10) { roll2 = 'X' }

    return roll2;
  }

  function valueRollThree(frame, roll1, startRoll) {
    var roll2 = game.gameRolls[startRoll + 1];
    var roll3 = game.gameRolls[startRoll + 2];

    if(roll2 === 0 && roll3 === 10) { roll3 = '/'; }
    else if( roll2 + roll3 === 10 ) { roll3 = '/' }
    else if(roll2 !== 0 && roll3 === 10) { roll3 = 'X' }

    return roll3;
  }

  function drawScoreCard() {

    var scoreCard = "<ul id='game" + gameNumber + "' class='scoreCard' >" +
    "      <li class='player1'></li>" +
    "      <li class='frame1'>" +
    "        <div class='frameNumber'>1</div>" +
    "        <div class='rolls'>" +
    "          <div class='emptyDiv'></div>" +
    "          <div class='roll1'></div>" +
    "          <div class='roll2'></div>" +
    "        </div>" +
    "        <div class='frameScore'></div>" +
    "      </li>" +
    "      <li class='frame2'>" +
    "        <div class='frameNumber'>2</div>" +
    "        <div class='rolls'>" +
    "          <div class='emptyDiv'></div>" +
    "          <div class='roll1'></div>" +
    "          <div class='roll2'></div>" +
    "        </div>" +
    "        <div class='frameScore'></div>" +
    "      </li>" +
    "      <li class='frame3'>" +
    "        <div class='frameNumber'>3</div>" +
    "        <div class='rolls'>" +
    "          <div class='emptyDiv'></div>" +
    "          <div class='roll1'></div>" +
    "          <div class='roll2'></div>" +
    "        </div>" +
    "        <div class='frameScore'></div>" +
    "      </li>" +
    "      <li class='frame4'>" +
    "        <div class='frameNumber'>4</div>" +
    "        <div class='rolls'>" +
    "          <div class='emptyDiv'></div>" +
    "          <div class='roll1'></div>" +
    "          <div class='roll2'></div>" +
    "        </div>" +
    "        <div class='frameScore'></div>" +
    "      </li>" +
    "      <li class='frame5'>" +
    "        <div class='frameNumber'>5</div>" +
    "        <div class='rolls'>" +
    "          <div class='emptyDiv'></div>" +
    "          <div class='roll1'></div>" +
    "          <div class='roll2'></div>" +
    "        </div>" +
    "        <div class='frameScore'></div>" +
    "      </li>" +
    "      <li class='frame6'>" +
    "        <div class='frameNumber'>6</div>" +
    "        <div class='rolls'>" +
    "          <div class='emptyDiv'></div>" +
    "          <div class='roll1'></div>" +
    "          <div class='roll2'></div>" +
    "        </div>" +
    "        <div class='frameScore'></div>" +
    "      </li>" +
    "      <li class='frame7'>" +
    "        <div class='frameNumber'>7</div>" +
    "        <div class='rolls'>" +
    "          <div class='emptyDiv'></div>" +
    "          <div class='roll1'></div>" +
    "          <div class='roll2'></div>" +
    "        </div>" +
    "        <div class='frameScore'></div>" +
    "      </li>" +
    "      <li class='frame8'>" +
    "        <div class='frameNumber'>8</div>" +
    "        <div class='rolls'>" +
    "          <div class='emptyDiv'></div>" +
    "          <div class='roll1'></div>" +
    "          <div class='roll2'></div>" +
    "        </div>" +
    "        <div class='frameScore'></div>" +
    "      </li>" +
    "      <li class='frame9'>" +
    "        <div class='frameNumber'>9</div>" +
    "        <div class='rolls'>" +
    "          <div class='emptyDiv'></div>" +
    "          <div class='roll1'></div>" +
    "          <div class='roll2'></div>" +
    "        </div>" +
    "        <div class='frameScore'></div>" +
    "      </li>" +
    "      <li class='frame10'>" +
    "        <div class='frameNumber'>10</div>" +
    "        <div class='rolls'>" +
    "          <div class='roll1'></div>" +
    "          <div class='roll2'></div>" +
    "          <div class='roll3'></div>" +
    "        </div>" +
    "        <div class='frameScore'></div>" +
    "      </li>" +
    "    </ul>";

    $( '#scoreCardContainer' ).append(scoreCard);
  }
});
