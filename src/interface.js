$(document).ready(function() {
  let game = new Game();
  let buttonArray = [0,1,2,3,4,5,6,7,8,9,10];

  updateScore();

  $('#roll-a-0').on('click', function() {
    game.recordRoll(0);
    disableButton(buttonArray);
    enterRoll(0, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
    enableButton();
  });

  $('#roll-a-1').on('click', function() {
    game.recordRoll(1);
    disableButton(buttonArray);
    enterRoll(1, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
    enableButton();
  });

  $('#roll-a-2').on('click', function() {
    game.recordRoll(2);
    disableButton(buttonArray);
    enterRoll(2, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
    enableButton();
  });

  $('#roll-a-3').on('click', function() {
    game.recordRoll(3);
    disableButton(buttonArray);
    enterRoll(3, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
    enableButton();
  });

  $('#roll-a-4').on('click', function() {
    game.recordRoll(4);
    disableButton(buttonArray);
    enterRoll(4, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
    enableButton();
  });

  $('#roll-a-5').on('click', function() {
    game.recordRoll(5);
    disableButton(buttonArray);
    enterRoll(5, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
    enableButton();
  });

  $('#roll-a-6').on('click', function() {
    game.recordRoll(6);
    disableButton(buttonArray);
    enterRoll(6, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
    enableButton();
  });

  $('#roll-a-7').on('click', function() {
    game.recordRoll(7);
    disableButton(buttonArray);
    enterRoll(7, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
    enableButton();
  });

  $('#roll-a-8').on('click', function() {
    game.recordRoll(8);
    disableButton(buttonArray);
    enterRoll(8, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
    enableButton();
  });

  $('#roll-a-9').on('click', function() {
    game.recordRoll(9);
    disableButton(buttonArray);
    enterRoll(9,game.frameCount, game.rollCount);
    updateScore(game.frameCount);
    enableButton();
  });

  $('#roll-a-10').on('click', function() {
    game.recordRoll(10);
    disableButton(buttonArray);
    enterRoll(10, game.frameCount, game.rollCount);
    updateScore(game.frameCount);
    enableButton();
  });

  $('#reset').on('click', function() {
    game = new Game();
    clear();
    disableButton(buttonArray);
    updateScore(game.frameCount);
  });

  function enterRoll(amount, f, r) {
    $(`#f${f}r${r}`).text(amount);
  }
  
  function disableButton(button) {
    button.forEach(function(element) {
      if(element > game.pins) {
        document.getElementById(`roll-a-${element}`).disabled = true;
      } else {
        document.getElementById(`roll-a-${element}`).disabled = false;
      }
    });
  }

  function enableButton() {
    if(game.rollCount == 0 || game.strikeBonus) {
      let button = document.getElementsByClassName('button');
      for (let i = 0; i < button.length; i++) {
        button[i].disabled = false;
      }
    }
  }

  function clear() {
    for(f = 1; f < 13; f++) {
      $(`#f${f}r${1}`).empty();
      $(`#f${f}r${2}`).empty();
      $(`#f${f}r${0}`).empty();
      $(`#frame-${f}-score`).empty();
    }
  }

  function updateScore(f) {
    $(`#frame-${f}-score`).text(game.score());
  }
});