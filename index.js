$(document).ready(function(){
  var frame = new Frame();

  $('#zero').click(function() {
    frame.roll(0);
    $('#tot').text(frame.tot());
  });

  $('#one').click(function() {
    frame.roll(1);
    $('#tot').text(frame.tot());
  });

  $('#two').click(function() {
    frame.roll(2);
    $('#tot').text(frame.tot());
  });

  $('#three').click(function() {
    frame.roll(3);
    $('#tot').text(frame.tot());
  });

  $('#four').click(function() {
    frame.roll(4);
    $('#tot').text(frame.tot());
  });

  $('#five').click(function() {
    frame.roll(5);
    $('#tot').text(frame.tot());
  });

  $('#six').click(function() {
    frame.roll(6);
    $('#tot').text(frame.tot());
  });

  $('#seven').click(function() {
    frame.roll(7);
    $('#tot').text(frame.tot());
  });

  $('#eight').click(function() {
    frame.roll(8);
    $('#tot').text(frame.tot());
  });

  $('#nine').click(function() {
    frame.roll(9);
    $('#tot').text(frame.tot());
  });

  $('#ten').click(function() {
    frame.roll(10);
    $('#tot').text(frame.tot());
  });

});
