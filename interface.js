$( document ).ready(function() {
  console.log("Ready to go!")
  var game = new Game();
  var frame = new Frame();

  $('#0').on('click', function(){
    frame.firstBowl(0);
    $('#first_bowl').text(frame._firstBowlScore)
  })

  $('#2').on('click', function(){
    frame.secondBowl(2)
    $('#second_bowl').text(frame._secondBowlScore)
      $('#current_score').text(frame.viewScore())
  })

  $('#current_score')





});



// window.onload = function() {
//     if (window.jQuery) {
//         // jQuery is loaded
//         alert("Yeah!");
//     } else {
//         // jQuery is not loaded
//         alert("Doesn't Work");
//     }
// }
