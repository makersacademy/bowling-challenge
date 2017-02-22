game = new Game();

$("#perfectGameButton").click(function(){
  $("#fTotal").text(game._gameTotal = 0);
  game.playFrame1(10,0);
  $("#f1roll1").text(game._frame1._strikeType);
  $("#f1roll2").text(game._frame1._roll2);
  $("#f1Score").text(game._frame1._frameScore);

  game.playFrame2(10,0);
  $("#f2roll1").text(game._frame2._strikeType);
  $("#f2roll2").text(game._frame2._roll2);
  $("#f2Score").text(game._frame2._frameScore);
  $("#f1Score").text(game._frame1._frameScore);

  game.playFrame3(10,0);
  $("#f3roll1").text(game._frame3._strikeType);
  $("#f3roll2").text(game._frame3._roll2);
  $("#f3Score").text(game._frame3._frameScore);
  $("#f2Score").text(game._frame2._frameScore);
  $("#f1Score").text(game._frame1._frameScore);

  game.playFrame4(10,0);
  $("#f4roll1").text(game._frame4._strikeType);
  $("#f4roll2").text(game._frame4._roll2);
  $("#f4Score").text(game._frame4._frameScore);
  $("#f3Score").text(game._frame3._frameScore);
  $("#f2Score").text(game._frame2._frameScore);

  game.playFrame5(10,0);
  $("#f5roll1").text(game._frame5._strikeType);
  $("#f5roll2").text(game._frame5._roll2);
  $("#f5Score").text(game._frame5._frameScore);
  $("#f4Score").text(game._frame4._frameScore);
  $("#f3Score").text(game._frame3._frameScore);

  game.playFrame6(10,0);
  $("#f6roll1").text(game._frame6._strikeType);
  $("#f6roll2").text(game._frame6._roll2);
  $("#f6Score").text(game._frame6._frameScore);
  $("#f5Score").text(game._frame5._frameScore);
  $("#f4Score").text(game._frame4._frameScore);

  game.playFrame7(10,0);
  $("#f7roll1").text(game._frame7._strikeType);
  $("#f7roll2").text(game._frame7._roll2);
  $("#f7Score").text(game._frame7._frameScore);
  $("#f6Score").text(game._frame6._frameScore);
  $("#f5Score").text(game._frame5._frameScore);

  game.playFrame8(10,0);
  $("#f8roll1").text(game._frame8._strikeType);
  $("#f8roll2").text(game._frame8._roll2);
  $("#f8Score").text(game._frame8._frameScore);
  $("#f7Score").text(game._frame7._frameScore);
  $("#f6Score").text(game._frame6._frameScore);

  game.playFrame9(10,0);
  $("#f9roll1").text(game._frame9._strikeType);
  $("#f9roll2").text(game._frame9._roll2);
  $("#f9Score").text(game._frame9._frameScore);
  $("#f8Score").text(game._frame8._frameScore);
  $("#f7Score").text(game._frame7._frameScore);

  game.playFrame10(10,10);
  $("#f10roll1").text(game._frame10._strikeType);
  $("#f10roll2").text(game._frame10._strikeType);
  $("#f10roll3").text(game._frame10._strikeType);
  $("#f10Score").text(game._frame10._frameScore);
  $("#f9Score").text(game._frame9._frameScore);
  $("#f8Score").text(game._frame8._frameScore);
  $("#fTotal").text(game._gameTotal);
});


  $("#gutterGameButton").click(function(){
    $("#fTotal").removeClass(game._gameTotal);
    game.playFrame1(0,0);
    $("#f1roll1").text(game._frame1._roll1);
    $("#f1roll2").text(game._frame1._roll2);
    $("#f1Score").text(game._frame1._frameScore);

    game.playFrame2(0,0);
    $("#f2roll1").text(game._frame2._roll1);
    $("#f2roll2").text(game._frame2._roll2);
    $("#f2Score").text(game._frame2._frameScore);
    $("#f1Score").text(game._frame1._frameScore);

    game.playFrame3(0,0);
    $("#f3roll1").text(game._frame3._roll1);
    $("#f3roll2").text(game._frame3._roll2);
    $("#f3Score").text(game._frame3._frameScore);
    $("#f2Score").text(game._frame2._frameScore);
    $("#f1Score").text(game._frame1._frameScore);

    game.playFrame4(0,0);
    $("#f4roll1").text(game._frame4._roll1);
    $("#f4roll2").text(game._frame4._roll2);
    $("#f4Score").text(game._frame4._frameScore);
    $("#f3Score").text(game._frame3._frameScore);
    $("#f2Score").text(game._frame2._frameScore);

    game.playFrame5(0,0);
    $("#f5roll1").text(game._frame5._roll1);
    $("#f5roll2").text(game._frame5._roll2);
    $("#f5Score").text(game._frame5._frameScore);
    $("#f4Score").text(game._frame4._frameScore);
    $("#f3Score").text(game._frame3._frameScore);

    game.playFrame6(0,0);
    $("#f6roll1").text(game._frame6._roll1);
    $("#f6roll2").text(game._frame6._roll2);
    $("#f6Score").text(game._frame6._frameScore);
    $("#f5Score").text(game._frame5._frameScore);
    $("#f4Score").text(game._frame4._frameScore);

    game.playFrame7(0,0);
    $("#f7roll1").text(game._frame7._roll1);
    $("#f7roll2").text(game._frame7._roll2);
    $("#f7Score").text(game._frame7._frameScore);
    $("#f6Score").text(game._frame6._frameScore);
    $("#f5Score").text(game._frame5._frameScore);

    game.playFrame8(0,0);
    $("#f8roll1").text(game._frame8._roll1);
    $("#f8roll2").text(game._frame8._roll2);
    $("#f8Score").text(game._frame8._frameScore);
    $("#f7Score").text(game._frame7._frameScore);
    $("#f6Score").text(game._frame6._frameScore);

    game.playFrame9(0,0);
    $("#f9roll1").text(game._frame9._roll1);
    $("#f9roll2").text(game._frame9._roll2);
    $("#f9Score").text(game._frame9._frameScore);
    $("#f8Score").text(game._frame8._frameScore);
    $("#f7Score").text(game._frame7._frameScore);

    game.playFrame10(0,0);
    $("#f10roll1").text(game._frame10._roll1);
    $("#f10roll2").text(game._frame10._roll2);
    $("#f10roll3").text(0);
    $("#f10Score").text(game._frame10._frameScore);
    $("#f9Score").text(game._frame9._frameScore);
    $("#f8Score").text(game._frame8._frameScore);
    $("#fTotal").text(game._gameTotal);
  });

  $("#randomGame").click(function(){
    $("#fTotal").text(game._gameTotal = 0);
    game._frame1.playRandomRoll1();
    game._frame1.playRandomRoll2();
    $("#f1roll1").text(game._frame1._roll1);
    $("#f1roll2").text(game._frame1._roll2);
    $("#f1Score").text(game._frame1._frameScore);

    game._frame2.playRandomRoll1();
    game._frame2.playRandomRoll2();
    $("#f2roll1").text(game._frame2._roll1);
    $("#f2roll2").text(game._frame2._roll2);
    $("#f2Score").text(game._frame2._frameScore);
    $("#f1Score").text(game._frame1._frameScore);

    game._frame3.playRandomRoll1();
    game._frame3.playRandomRoll2();
    $("#f3roll1").text(game._frame3._roll1);
    $("#f3roll2").text(game._frame3._roll2);
    $("#f3Score").text(game._frame3._frameScore);
    $("#f2Score").text(game._frame2._frameScore);
    $("#f1Score").text(game._frame1._frameScore);

    game._frame4.playRandomRoll1();
    game._frame4.playRandomRoll2();
    $("#f4roll1").text(game._frame4._roll1);
    $("#f4roll2").text(game._frame4._roll2);
    $("#f4Score").text(game._frame4._frameScore);
    $("#f3Score").text(game._frame3._frameScore);
    $("#f2Score").text(game._frame2._frameScore);

    game._frame5.playRandomRoll1();
    game._frame5.playRandomRoll2();
    $("#f5roll1").text(game._frame5._roll1);
    $("#f5roll2").text(game._frame5._roll2);
    $("#f5Score").text(game._frame5._frameScore);
    $("#f4Score").text(game._frame4._frameScore);
    $("#f3Score").text(game._frame3._frameScore);

    game._frame6.playRandomRoll1();
    game._frame6.playRandomRoll2();
    $("#f6roll1").text(game._frame6._roll1);
    $("#f6roll2").text(game._frame6._roll2);
    $("#f6Score").text(game._frame6._frameScore);
    $("#f5Score").text(game._frame5._frameScore);
    $("#f4Score").text(game._frame4._frameScore);

    game._frame7.playRandomRoll1();
    game._frame7.playRandomRoll2();
    $("#f7roll1").text(game._frame7._roll1);
    $("#f7roll2").text(game._frame7._roll2);
    $("#f7Score").text(game._frame7._frameScore);
    $("#f6Score").text(game._frame6._frameScore);
    $("#f5Score").text(game._frame5._frameScore);

    game._frame8.playRandomRoll1();
    game._frame8.playRandomRoll2();
    $("#f8roll1").text(game._frame8._roll1);
    $("#f8roll2").text(game._frame8._roll2);
    $("#f8Score").text(game._frame8._frameScore);
    $("#f7Score").text(game._frame7._frameScore);
    $("#f6Score").text(game._frame6._frameScore);

    game._frame9.playRandomRoll1();
    game._frame9.playRandomRoll2();
    $("#f9roll1").text(game._frame9._roll1);
    $("#f9roll2").text(game._frame9._roll2);
    $("#f9Score").text(game._frame9._frameScore);
    $("#f8Score").text(game._frame8._frameScore);
    $("#f7Score").text(game._frame7._frameScore);

    game.playFrame10(game._frame10.playRandomRoll1(), game._frame10.playRandomRoll2());
    // console.log("YES" + game._frame10._roll1, game._frame10._roll2);
    $("#f10roll1").text(game._frame10._roll1);
    $("#f10roll2").text(game._frame10._roll2);
    $("#f10roll3").text(game._frame10._roll3);
    $("#f10Score").text(game._frame10._frameScore);
    $("#f9Score").text(game._frame9._frameScore);
    $("#f8Score").text(game._frame8._frameScore);
    $("#fTotal").text(game._gameTotal);

  });
