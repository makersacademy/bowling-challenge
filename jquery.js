$(document).ready(function() {
  let bowling = new Bowling

  $('#roll1').change(function() {
    var value1 = parseInt($(this).val());
    console.log(typeof value1)
    bowling.roll(value1);
    console.log(bowling.score())
  });

  $('#roll2').change(function() {
    var value2 = parseInt($(this).val());
    console.log(value2)
    bowling.roll(value2);
    console.log(bowling.score())
  });

  $('#roll3').change(function() {
    var value3 = parseInt($(this).val());
    console.log(value3)
    bowling.roll(value3);
    console.log(bowling.score())
  });

  $('#roll4').change(function() {
    var value4 = parseInt($(this).val());
    console.log(value4)
    bowling.roll(value4);
    console.log(bowling.score())
  });

  $('#roll5').change(function() {
    var value5 = parseInt($(this).val());
    console.log(value5)
    bowling.roll(value5);
    console.log(bowling.score())
  });

  $('#roll6').change(function() {
    var value6 = parseInt($(this).val());
    console.log(value6)
    bowling.roll(value6);
    console.log(bowling.score())
  });

  $('#roll7').change(function() {
    var value7 = parseInt($(this).val());
    console.log(value7)
    bowling.roll(value7);
    console.log(bowling.score())
  });

  $('#roll8').change(function() {
    var value8 = parseInt($(this).val());
    console.log(value8)
    bowling.roll(value8);
    console.log(bowling.score())
  });

  $('#roll9').change(function() {
    var value9 = parseInt($(this).val());
    console.log(value9)
    bowling.roll(value9);
    console.log(bowling.score())
  });

  $('#roll10').change(function() {
    var value10 = parseInt($(this).val());
    console.log(value10)
    bowling.roll(value10);
    console.log(bowling.score())
  });

  $('#roll11').change(function() {
    var value11 = parseInt($(this).val());
    console.log(value11)
    bowling.roll(value11);
    console.log(bowling.score())
  });

  $('#roll12').change(function() {
    var value12 = parseInt($(this).val());
    console.log(value12)
    bowling.roll(value12);
    console.log(bowling.score())
  });

  $('#roll13').change(function() {
    var value13 = parseInt($(this).val());
    console.log(value13)
    bowling.roll(value13);
    console.log(bowling.score())
  });

  $('#roll14').change(function() {
    var value14 = parseInt($(this).val());
    console.log(value14)
    bowling.roll(value14);
    console.log(bowling.score())
  });

  $('#roll2').change(function() {
    var value2 = parseInt($(this).val());
    console.log(value2)
    bowling.roll(value2);
    console.log(bowling.score())
  });

  $('#roll15').change(function() {
    var value15 = parseInt($(this).val());
    console.log(value15)
    bowling.roll(value15);
    console.log(bowling.score())
  });

  $('#roll16').change(function() {
    var value16 = parseInt($(this).val());
    console.log(value16)
    bowling.roll(value16);
    console.log(bowling.score())
  });

  $('#roll17').change(function() {
    var value17 = parseInt($(this).val());
    console.log(value17)
    bowling.roll(value17);
    console.log(bowling.score())
  });

  $('#roll18').change(function() {
    var value18 = parseInt($(this).val());
    console.log(value18)
    bowling.roll(value18);
    console.log(bowling.score())
  });

  $('#roll19').change(function() {
    var value19 = parseInt($(this).val());
    console.log(value19)
    bowling.roll(value19);
    console.log(bowling.score())
  });

  $('#roll20').change(function() {
    var value20 = parseInt($(this).val());
    console.log(value20)
    bowling.roll(value20);
    console.log(bowling.score())

    $('#score').text(`${bowling.score()}`)

  });

});
