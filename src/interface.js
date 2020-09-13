$(document).ready(function () {
  var bowling = new Bowling();
  var count = 0
  var num = 1
  var sn1 = 1
  var sn2 = 2

  $('#update').click(function () {
    if (count == 0) {
      var score1 = parseInt((document.getElementById(`s${sn1}`).value), 10);
      var score2 = parseInt((document.getElementById(`s${sn2}`).value), 10);
      console.log(score1)
      console.log(score2)
      var total = bowling.firstTurn(score1, score2);
      var element = document.getElementById("fs1");
      element.innerHTML = `${total}`;
      console.log(total)
      count += 1
      num += 1
      sn1 += 1
      sn2 += 2
    } else {
      var score3 = parseInt((document.getElementById(`s${sn1}`).value), 10);
      var score4 = parseInt((document.getElementById(`s${sn2}`).value), 10);
      var total = bowling.nextTurn(score3, score4);
      console.log(total)
      var element = document.getElementById(`fs${num}`);
      element.innerHTML = `${total}`;
      num += 1
      sn1 += 1
      sn2 += 2
    }
  });


});