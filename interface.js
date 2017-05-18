$(document).ready(function() {
  var game = new Game();
  var number = 1;

  function isEven(number) {
    if (number % 2 == 0) {
      return true;
    } else {
      return false;
    }
  }

  $('#roll-0').click(function() {
    game.roll(0);
    $(`#r${number}`).text('0');
    if (isEven(number) === true) {
      $(`#r${number}total`).text(game.rollScore());
    }
    number += 1;
  });

  $('#roll-1').click(function() {
    game.roll(1);
    $(`#r${number}`).text('1');
    if (isEven(number) === true) {
      $(`#r${number}total`).text(game.rollScore());
    }
    number += 1;
  });

  $('#roll-2').click(function() {
    game.roll(2);
    $(`#r${number}`).text('2');
    if (isEven(number) === true) {
      $(`#r${number}total`).text(game.rollScore());
    }
    number += 1;
  });

  $('#roll-3').click(function() {
    game.roll(3);
    $(`#r${number}`).text('3');
    if (isEven(number) === true) {
      $(`#r${number}total`).text(game.rollScore());
    }
    number += 1;
  });

  $('#roll-4').click(function() {
    game.roll(4);
    $(`#r${number}`).text('4');
    if (isEven(number) === true) {
      $(`#r${number}total`).text(game.rollScore());
    }
    number += 1;
  });

  $('#roll-5').click(function() {
    game.roll(5);
    $(`#r${number}`).text('5');
    if (isEven(number) === true) {
      $(`#r${number}total`).text(game.rollScore());
    }
    number += 1;
  });

  $('#roll-6').click(function() {
    game.roll(6);
    $(`#r${number}`).text('6');
    if (isEven(number) === true) {
      $(`#r${number}total`).text(game.rollScore());
    }
    number += 1;
  });

  $('#roll-7').click(function() {
    game.roll(7);
    $(`#r${number}`).text('7');
    if (isEven(number) === true) {
      $(`#r${number}total`).text(game.rollScore());
    }
    number += 1;
  });

  $('#roll-8').click(function() {
    game.roll(8);
    $(`#r${number}`).text('8');
    if (isEven(number) === true) {
      $(`#r${number}total`).text(game.rollScore());
    }
    number += 1;
  });

  $('#roll-9').click(function() {
    game.roll(9);
    $(`#r${number}`).text('9');
    if (isEven(number) === true) {
      $(`#r${number}total`).text(game.rollScore());
    }
    number += 1;
  });

  $('#roll-10').click(function() {
    game.roll(10);
    $(`#r${number}`).text('10');
    number += 1;
    if (isEven(number) === true) {
      $(`#r${number}total`).text(game.rollScore());
    }
    number += 1;
  });

  $('#reset').on('click', function(){
    game = new Game();
    number = 1;
    $('td').text('');
  })

});
