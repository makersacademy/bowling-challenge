$(document).ready(function() {


  $(":button").click(function() {

    var frame = new Frame();

    var frame1 = [Number($('#frame1roll1').val()), Number($('#frame1roll2').val())];
    var frame2 = [Number($("#frame2roll1").val()), Number($("#frame2roll2").val())];
    var frame3 = [Number($("#frame3roll1").val()), Number($("#frame3roll2").val())];
    var frame4 = [Number($("#frame4roll1").val()), Number($("#frame4roll2").val())];
    var frame5 = [Number($("#frame5roll1").val()), Number($("#frame5roll2").val())];

    frame.inputFrame(frame1);
    frame.inputFrame(frame2);
    frame.inputFrame(frame3);
    frame.inputFrame(frame4);
    frame.inputFrame(frame5);

    $('#frame1score').text(frame.calcFrameScore(frame1));

    alert(frame.calcTotalScore());

    });
  });
