$(document).ready(function() {

  var bowling = new Bowling();
  var runScore = [];
  var rollCounter = 1;
  var counter = 1;


  $('#new-roll-0').click(function() {
    bowling.roll(0);
    $('#roll' + counter).append('0');
    rollCounter += 1
    if (rollCounter % 2 == 0 && rollCounter > 0) {
      counter += 1;
      rollCounter += 1;
    }
  });

  $('#new-roll-1').click(function() {
    bowling.roll(1);
    $('#roll' + counter).append('1');
    rollCounter += 1
    if (rollCounter % 2 == 0 && rollCounter > 0) {
      counter += 1;
      rollCounter += 1;
    }
  });

  $('#new-roll-2').click(function() {
    bowling.roll(2);
    $('#roll' + counter).append('2');
    rollCounter += 1
    if (rollCounter % 2 == 0 && rollCounter > 0) {
      counter += 1;
      rollCounter += 1;
    }
  });

  $('#new-roll-3').click(function() {
    bowling.roll(3);
    $('#roll' + counter).append('3');
    rollCounter += 1
    if (rollCounter % 2 == 0 && rollCounter > 0) {
      counter += 1;
      rollCounter += 1;
    }
  });

  $('#new-roll-4').click(function() {
    bowling.roll(4);
    $('#roll' + counter).append('4');
    rollCounter += 1
    if (rollCounter % 2 == 0 && rollCounter > 0) {
      counter += 1;
      rollCounter += 1;
    }
  });

  $('#new-roll-5').click(function() {
    bowling.roll(5);
    $('#roll' + counter).append('5');
    console.log('counter before' + counter)
    console.log('rollcounter before' + rollCounter)
    rollCounter += 1
    if (rollCounter % 2 == 0 && rollCounter > 0) {
      counter += 1;
      rollCounter += 1;
    }
  });

  $('#new-roll-6').click(function() {
    bowling.roll(6);
    $('#roll' + counter).append('6');
    rollCounter += 1
    if (rollCounter % 2 == 0 && rollCounter > 0) {
      counter += 1;
      rollCounter += 1;
    }
  });

  $('#new-roll-7').click(function() {
    bowling.roll(7);
    $('#roll' + counter).append('7');
    rollCounter += 1
    if (rollCounter % 2 == 0 && rollCounter > 0) {
      counter += 1;
      rollCounter += 1;
    }
  });

  $('#new-roll-8').click(function() {
    bowling.roll(8);
    $('#roll' + counter).append('8');
    rollCounter += 1
    if (rollCounter % 2 == 0 && rollCounter > 0) {
      counter += 1;
      rollCounter += 1;
    }
  });

  $('#new-roll-9').click(function() {
    bowling.roll(9);
    $('#roll' + counter).append('9');
    rollCounter += 1
    if (rollCounter % 2 == 0 && rollCounter > 0) {
      counter += 1;
      rollCounter += 1;
    }
  });

  $('#new-roll-10').click(function() {
    bowling.roll(10);
    $('#roll' + counter).append('10');
    rollCounter += 1
    if (rollCounter % 2 == 0 && rollCounter > 0) {
      counter += 1;
      rollCounter += 1;
    }
  });


    })
