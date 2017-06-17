$(document).ready(function() {
  var frame1 = new Frame(1);
$('#frameNo').text(frame1.idNumber)

$('#frameTotal').text(frame1.frameTotal)

$('#firstScoreSubmit').on('click', function() {
  frame1.addFirstScore(5);
  $('#frameTotal').text(frame1.frameTotal)
})

$('#secondScoreSubmit').on('click', function() {
  frame1.addSecondScore(5);
  $('#frameTotal').text(frame1.frameTotal)
})

})
