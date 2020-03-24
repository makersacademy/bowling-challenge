$(document).ready(function() {
  var game = new Game();
  var frame1 = new Frame();

  // $('#roll1').change(function() {
  //   var number = $('#roll1').val();
  //   $.('#r1score').text(frame1.rollOne(number))
  // })

  $('#roll1').change(function() {
    console.log("I have changed #roll1");
  })

//   $('#roll2').change(function() {
//     var number = $('#roll2').val();
//     frame1.rollTwo(number)
//     return number
//   })

//   $('#submit-score').click(function() {
//     game.addScore('#roll1','#roll2');
//     updateFrameScore('#roll1','#roll2')
//     updateGameScore();
//   })

//   // function updateFrameScore() {
//   //   $('#frame-score').text('#roll1'+'#roll2');
//   // };

//   function updateGameScore() {
//     $('#game-score').text(game.score);
//   };
// });