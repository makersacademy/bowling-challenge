$(document).ready(function() {
  game = new Game();
  game.startFrame();

  $('#zero').click(function() {
    game.bowl(0);
    console.log('BOO! You hit none!');
    updateButtons();
    placeScore(0);
  });

  $('#one').click(function() {
    game.bowl(1);
    console.log('You hit 1 pin!');
    updateButtons();
    setTimeout(restoreButtons, 10);
    placeScore(1);
    counter++
  });

  $('#two').click(function() {
    game.bowl(2);
    console.log('You hit 2 pins!')
    updateButtons();
    setTimeout(restoreButtons, 10);
    placeScore(2);
    counter++
  });

  $('#three').click(function() {
    game.bowl(3);
    console.log('You hit 3 pins!')
    updateButtons();
    setTimeout(restoreButtons, 10);
    placeScore(3);
    counter++
  });

  $('#four').click(function() {
    game.bowl(4);
    console.log('You hit 4 pins!')
    updateButtons();
    setTimeout(restoreButtons, 10);
    placeScore(4);
    counter++
  });

  $('#five').click(function() {
    game.bowl(5);
    console.log('You hit 5 pins!')
    updateButtons();
    setTimeout(restoreButtons, 10);
    placeScore(5);
    counter++
  });

  $('#six').click(function() {
    game.bowl(6);
    console.log('You hit 6 pins!')
    updateButtons();
    setTimeout(restoreButtons, 10);
    placeScore(6);
    counter++
  });

  $('#seven').click(function() {
    game.bowl(7);
    console.log('You hit 7 pins!')
    updateButtons();
    setTimeout(restoreButtons, 10);
    placeScore(7);
    counter++
  });

  $('#eight').click(function() {
    game.bowl(8);
    console.log('You hit 8 pins!')
    updateButtons();
    setTimeout(restoreButtons, 10);
    placeScore(8);
    counter++
  });

  $('#nine').click(function() {
    game.bowl(9);
    console.log('You hit 9 pins!')
    updateButtons();
    setTimeout(restoreButtons, 10);
    placeScore(9);
    counter++
  });

  $('#ten').click(function() {
    game.bowl(10);
    console.log('You hit 10 pins!')
    placeScore('X');
    if (counter < 19) {
      counter++
    }
    counter++;
  });

  $('#remove').click(function() {
    updateButtons();
  });

  $('#restore').click(function() {
    restoreButtons();
  });

  var button = {};
  button[0] = 'zero';
  button[1] = 'one';
  button[2] = 'two';
  button[3] = 'three';
  button[4] = 'four';
  button[5] = 'five';
  button[6] = 'six';
  button[7] = 'seven';
  button[8] = 'eight';
  button[9] = 'nine';
  button[10] = 'ten';

  function updateButtons() {
    for (var i = 0; i < 11; i++) {
      if (i > game.currentFrame()._pins) {
        document.getElementById( button[i] ).style.display = 'none';
      }
    }
  };

  function restoreButtons(){
    if (game.currentFrame().firstBowl == null && game._frameNumber <= 10) {
      for (var i = 0; i < 11; i++) {
        document.getElementById( button[i] ).style.display = 'block';
      }
    }

    if ((game.currentFrame().firstBowl + game.currentFrame().secondBowl == 10) && game._frameNumber == 10) {
      for (var i = 0; i < 11; i++) {
        document.getElementById( button[i] ).style.display = 'block';
      }
    }
  }

  var counter = 1;

  function placeScore(score) {
    if (counter % 2 == 0 && game.isPreviousFrameSpare()) {
      document.getElementById(counter).innerHTML = '/';
    } else {
      document.getElementById(counter).innerHTML = score;
    }
  }

  
})
