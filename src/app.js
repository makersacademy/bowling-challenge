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
      roll3 = '', 
      identifier = '#game' + gameNumber + ' .frame' + i;

      if(frame.isLastFrame()) {
        roll1 = roll1 === 10 ? 'X' : roll1;

        switch(frame.turns) {
          case 2:
            roll2 = game.gameRolls[frame.rollIndex + 1];
            roll2 = roll2 === 10 ? 'X' : roll2;
            roll2 = frame.isSpare() ? '/' : roll2; 
            break;
          case 3:
            roll2 = game.gameRolls[frame.rollIndex + 1];
            roll2 = roll2 === 10 ? 'X' : roll2;
            roll2 = roll1 + roll2 === 10 ? '/' : roll2; 
            roll3 = game.gameRolls[frame.rollIndex + 2]; 
            roll3 = roll3 === 10 ? 'X' : roll3;
            break;
        }
      } else if(frame.isFinished()) {
          if(frame.isStrike()) {
            roll1 = '';
            roll2 = 'X';
          } else {
            roll2 = frame.isSpare() ? '/' : game.gameRolls[frame.rollIndex + 1];
          }
        }

      $( identifier + ' .roll1' ).html('<p>' +  roll1 + '</p>');
      $( identifier + ' .roll2' ).html('<p>' +  roll2 + '</p>');
      $( identifier + ' .roll3' ).html('<p>' +  roll3 + '</p>');
      $( identifier + ' .frameScore' ).html('<p>' +  game.score(i) + '</p>' );
    });
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
