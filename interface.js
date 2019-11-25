$(document).ready(function() {
  $('#button').click(function() {

    game = new BowlingGame();

    // game.roll(Number($('#frame1roll1').val()));
    // game.roll(Number($('#frame1roll2').val()));
    // game.roll(Number($('#frame2roll1').val()));
    // game.roll(Number($('#frame2roll2').val()));
    // game.roll(Number($('#frame3roll1').val()));
    // game.roll(Number($('#frame3roll2').val()));
    // game.roll(Number($('#frame4roll1').val()));
    // game.roll(Number($('#frame4roll2').val()));
    // game.roll(Number($('#frame5roll1').val()));
    // game.roll(Number($('#frame5roll2').val()));
    // game.roll(Number($('#frame6roll1').val()));
    // game.roll(Number($('#frame6roll2').val()));
    // game.roll(Number($('#frame7roll1').val()));
    // game.roll(Number($('#frame7roll2').val()));
    // game.roll(Number($('#frame8roll1').val()));
    // game.roll(Number($('#frame8roll2').val()));
    // game.roll(Number($('#frame9roll1').val()));
    // game.roll(Number($('#frame9roll2').val()));
    // game.roll(Number($('#frame10roll1').val()));
    // game.roll(Number($('#frame10roll2').val()));
    // game.roll(Number($('#frame10roll3').val()));

    roll1 = Number($('#frame1roll1').val())
    roll2 = Number($('#frame1roll2').val())
    roll3 = Number($('#frame2roll1').val())
    roll4 = Number($('#frame2roll2').val())
    roll5 = Number($('#frame3roll1').val())
    roll6 = Number($('#frame3roll2').val())
    roll7 = Number($('#frame4roll1').val())
    roll8 = Number($('#frame4roll2').val())
    roll9 = Number($('#frame5roll1').val())
    roll10 = Number($('#frame5roll2').val())
    roll11 = Number($('#frame6roll1').val())
    roll12 = Number($('#frame6roll2').val())
    roll13 = Number($('#frame7roll1').val())
    roll14 = Number($('#frame7roll2').val())
    roll15 = Number($('#frame8roll1').val())
    roll16 = Number($('#frame8roll2').val())
    roll17 = Number($('#frame9roll1').val())
    roll18 = Number($('#frame9roll2').val())
    roll19 = Number($('#frame10roll1').val())
    roll20 = Number($('#frame10roll2').val())
    roll21 = Number($('#frame10roll3').val())

    game.roll(roll1)
    game.roll(roll2)
    game.roll(roll3)
    game.roll(roll4)
    game.roll(roll5)
    game.roll(roll6)
    game.roll(roll7)
    game.roll(roll8)
    game.roll(roll9)
    game.roll(roll10)
    game.roll(roll11)
    game.roll(roll12)
    game.roll(roll13)
    game.roll(roll14)
    game.roll(roll15)
    game.roll(roll16)
    game.roll(roll17)
    game.roll(roll18)
    game.roll(roll19)
    game.roll(roll20)
    game.roll(roll21)

    game.calculateScore();

    $('#result').text(game.result);

  });
});
