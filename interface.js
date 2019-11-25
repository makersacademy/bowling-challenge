$(document).ready(function() {
  $('#button').click(function() {

    var game = new BowlingGame();

    roll1 = Number($('#frame1roll1').val())
    game.roll(roll1)
    if (roll1 != 10) {
        roll2 = Number($('#frame1roll2').val())
        game.roll(roll2)
    }

    roll3 = Number($('#frame2roll1').val())
    game.roll(roll3)
    if (roll3 != 10) {
        roll4 = Number($('#frame2roll2').val())
        game.roll(roll4)
    }

    roll5 = Number($('#frame3roll1').val())
    game.roll(roll5)
    if (roll5 != 10) {
        roll6 = Number($('#frame3roll2').val())
        game.roll(roll6)
    }

    roll7 = Number($('#frame4roll1').val())
    game.roll(roll7)
    if (roll7 != 10) {
        roll8 = Number($('#frame4roll2').val())
        game.roll(roll8)
    }

    roll9 = Number($('#frame5roll1').val())
    game.roll(roll9)
    if (roll9 != 10) {
        roll10 = Number($('#frame5roll2').val())
        game.roll(roll10)
    }

    roll11 = Number($('#frame6roll1').val())
    game.roll(roll11)
    if (roll11 != 10) {
        roll12 = Number($('#frame6roll2').val())
        game.roll(roll12)
    }

    roll13 = Number($('#frame7roll1').val())
    game.roll(roll13)
    if (roll13 != 10) {
        roll14 = Number($('#frame7roll2').val())
        game.roll(roll14)
    }

    roll15 = Number($('#frame8roll1').val())
    game.roll(roll15)
    if (roll15 != 10) {
        roll16 = Number($('#frame8roll2').val())
        game.roll(roll16)
    }

    roll17 = Number($('#frame9roll1').val())
    game.roll(roll17)
    if (roll17 != 10) {
        roll18 = Number($('#frame9roll2').val())
        game.roll(roll18)
    }

    roll19 = Number($('#frame10roll1').val())
    game.roll(roll19)
    roll20 = Number($('#frame10roll2').val())
    game.roll(roll20)
    roll21 = Number($('#frame10roll3').val())
    game.roll(roll21)

    $('#result').text(game.score());

  });
});
