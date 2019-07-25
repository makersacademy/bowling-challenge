$(document).ready(function() {
  var scorecard = new Scorecard();

  var new_frame = $('.new_frame').html()

  populate_frame()

  function populate_frame() {
    var score = scorecard.score;
    var frame = scorecard.frame;
    $('.total_score').html(`Score: ${score}`);
    $('.frame_number').html(`Frame: ${frame}`);
    $('.frame_number').attr('class','finished_frame')
  }

  function generate_frame() {
    $('.master_container').append(new_frame)
    populate_frame()
  }

  $(document).on('click', '.submit_score', function(){

      var first = parseInt($("#first_roll").val(),10)
      var second = parseInt($("#second_roll").val(),10)
      scorecard.submit(first,second)
      $("#first_roll").attr('id','finished_roll')
      $("#second_roll").attr('id','finished_roll')
      $('.submit_score').attr('hidden',true)
      $('.submit_message').attr('hidden',false)
      generate_frame()

  })

});
