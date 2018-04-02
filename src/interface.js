'use strict'

$(document).ready(function() {
  let game;
  let roundCounter = 0;

  gameSetup();

  $('#pins-remaining').on('click','button', function(event) {
    play(parseInt(event.currentTarget.id));
  });

  function play(pinsKnockedOver) {
    game.roll(pinsKnockedOver);
    updateGameScore();
  //  writeRounds();
    updatePinsRemainingButtons();
    //console.log(game);
  }

  function gameSetup() {
    let emptyFrames = [];
    for (let i = 1; i <= 9; i++) {
      emptyFrames.push(new Frame());
    }
    emptyFrames.push(new Frame(true));
    game = new Game(emptyFrames);
  };

  function updateGameScore(){
  //    console.log(game.score());
  }



  // function writeRounds() {
  //   let count = 0;
  //   let frames = game._frames;
  //
  //   for (let i = 0; i <= frames.length - 1; i++) {
  //     for (let k = 0; k <= frames[i]._rounds.length; k++) {
  //       if (frames[i]._rounds[k] == null) { break; }
  //
  //       if (frames[i].isStrike()) {
  //         $(`#r${count}`).html('X');
  //         count++
  //         $(`#r${count}`).html('-');
  //         count++
  //       }
  //     }
  //   }
  // };

  //         if (frames[i].isStrike() {
  //           $(`#r${count}`).html('X');
  //           count++
  //           $(`#r${count}`).html('-');
  //           count++
  //         } else {
  //           $(`#r${count}`).html(frames[i]._rounds[k].score());
  //           count++
  //         };
  //       }
  //     }
  //   }
  //
  // };

  function updatePinsRemainingButtons() {
    let pinsRemaining = (10 - game.score()) === 0 ? 10 : (10 - game.score());
    // empty div
    $('#pins-remaining').empty();
    // create new button map
    for(var i = 0; i <= pinsRemaining; i++) {
      $(`<button>${i}</button>`).attr({ 'id': i, 'class': 'btn'}).appendTo($('#pins-remaining'));
    };
  };
});
