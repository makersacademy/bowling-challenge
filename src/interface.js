$(document).ready(function() {


  $("button").click(function() {

    var frame = new Frame();

    var frame1 = [Number($('#frame1roll1').val()), Number($('#frame1roll2').val())];
    var frame2 = [Number($("#frame2roll1").val()), Number($("#frame2roll2").val())];
    var frame3 = [Number($("#frame3roll1").val()), Number($("#frame3roll2").val())];
    var frame4 = [Number($("#frame4roll1").val()), Number($("#frame4roll2").val())];
    var frame5 = [Number($("#frame5roll1").val()), Number($("#frame5roll2").val())];
    var frame6 = [Number($('#frame6roll1').val()), Number($('#frame6roll2').val())];
    var frame7 = [Number($("#frame7roll1").val()), Number($("#frame7roll2").val())];
    var frame8 = [Number($("#frame8roll1").val()), Number($("#frame8roll2").val())];
    var frame9 = [Number($("#frame9roll1").val()), Number($("#frame9roll2").val())];
    var frame10 = [Number($("#frame10roll1").val()), Number($("#frame10roll2").val())];

    frame.inputFrame(frame1);
    frame.inputFrame(frame2);
    frame.inputFrame(frame3);
    frame.inputFrame(frame4);
    frame.inputFrame(frame5);
    frame.inputFrame(frame6);
    frame.inputFrame(frame7);
    frame.inputFrame(frame8);
    frame.inputFrame(frame9);
    frame.inputFrame(frame10);

    $('#frame1score').text(frame.calcFrameScore(0));
    $('#frame2score').text(frame.calcFrameScore(1));
    $('#frame3score').text(frame.calcFrameScore(2));
    $('#frame4score').text(frame.calcFrameScore(3));
    $('#frame5score').text(frame.calcFrameScore(4));
    $('#frame6score').text(frame.calcFrameScore(5));
    $('#frame7score').text(frame.calcFrameScore(6));
    $('#frame8score').text(frame.calcFrameScore(7));
    $('#frame9score').text(frame.calcFrameScore(8));
    $('#frame10score').text(frame.calcFrameScore(9));

    $('#totalscore').text(frame.calcTotalScore());

    var game = new Game();
    gutter = game.isGutter(frame.frames);
    if (gutter) {
      alert('Gutter game, bad luck!')
    } else {
      alert("Congrats, good game!")
    };

    });
  });
