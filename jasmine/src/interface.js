$(document).ready(function() {

  $('#button').click(function() {

    user = new User();

    frame1 = [Number($('#frame1roll1').val()), Number($('#frame1roll2').val())];
    frame2 = [Number($('#frame2roll1').val()), Number($('#frame2roll2').val())];
    frame3 = [Number($('#frame3roll1').val()), Number($('#frame3roll2').val())];
    frame4 = [Number($('#frame4roll1').val()), Number($('#frame4roll2').val())];
    frame5 = [Number($('#frame5roll1').val()), Number($('#frame5roll2').val())];
    frame6 = [Number($('#frame6roll1').val()), Number($('#frame6roll2').val())];
    frame7 = [Number($('#frame7roll1').val()), Number($('#frame7roll2').val())];
    frame8 = [Number($('#frame8roll1').val()), Number($('#frame8roll2').val())];
    frame9 = [Number($('#frame9roll1').val()), Number($('#frame9roll2').val())];
    frame10 = [Number($('#frame10roll1').val()), Number($('#frame10roll2').val()), Number($('#frame10roll3').val())];

    user.addFrame(frame1);
    user.addFrame(frame2);
    user.addFrame(frame3);
    user.addFrame(frame4);
    user.addFrame(frame5);
    user.addFrame(frame6);
    user.addFrame(frame7);
    user.addFrame(frame8);
    user.addFrame(frame9);
    user.addFrame(frame10);

    user.calculateScore();

    $('#result').text(user.result);

  });
});
