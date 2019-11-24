$(document).ready(function() {


  $(":button").click(function() {

    var frame = new Frame();

    var frame1 = [Number($('frame1roll1').val()), Number($('frame1roll2').val())];
    var frame2 = [Number($("frame2roll1").val()), $("frame2roll2").val()];
    var frame3 = [$("frame3roll1").val(), $("frame3roll2").val()];
    var frame4 = [$("frame4roll1").val(), $("frame4roll2").val()];
    var frame5 = [$("frame5roll1").val(), $("frame5roll2").val()];

    frame.inputFrame(frame1);
    frame.inputFrame(frame2);
    frame.inputFrame(frame3);
    frame.inputFrame(frame4);
    frame.inputFrame(frame5);

    alert(frame.calcTotalScore());

    });
  });
