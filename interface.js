$(document).ready(function() {
  var match;

  new_match();

  $('#score0').on('click', function() { play(0); })
  $('#score1').on('click', function() { play(1); })
  $('#score2').on('click', function() { play(2); })
  $('#score3').on('click', function() { play(3); })
  $('#score4').on('click', function() { play(4); })
  $('#score5').on('click', function() { play(5); })
  $('#score6').on('click', function() { play(6); })
  $('#score7').on('click', function() { play(7); })
  $('#score8').on('click', function() { play(8); })
  $('#score9').on('click', function() { play(9); })
  $('#score10').on('click', function() { play(10); })
  $('#newGame').on('click', function() {new_match()})

  function hide_buttons() {
    for ( i=1; i<=10; i++ ) {
      if (i <= match.pinsRemaining() || match.currentFrame().isComplete()) {
        $('#score' + i).fadeIn();
      } else {
        $('#score' + i).fadeOut();
      }
    }
  }

  function match_over() {
    for ( i=0; i<=10; i++ ) { $('#score' + i).hide(); }
    $('#newGame').show();
  }

  function clear_scores() {
    for ( i=1; i<=10; i++) {
      $('#game' + i + ' #ball1').text('');
      $('#game' + i + ' #ball2').text('');
      if ( i == 10 ) { $('#game' + i + ' #ball3').text('')}
      $('#game' + i + ' #score').text('');
    }
    $('#match_score').text('');
  }

  function new_match() {
    for ( i=0; i<=10; i++ ) {$('#score' + i).fadeIn();}
    match = new Match(Frame);
    $('#newGame').hide();
    clear_scores();
  }

  function play(score) {
    match.play(score);
    hide_buttons();
    $('#match_score').text(match.score());
    current_frame = match.currentFrameNumber();

    if ( current_frame > 2 ) {
      $('#game' + (current_frame-2) + ' #score').text(match.currentFrame(-2).score())
    }
    if ( current_frame > 1 ) {
      $('#game' + (current_frame-1) + ' #score').text(match.currentFrame(-1).score())
    }

    $('#game' + current_frame + ' #ball1').text(match.currentFrame().ball1)
    $('#game' + current_frame + ' #ball2').text(match.currentFrame().ball2)
    $('#game' + current_frame + ' #score').text(match.currentFrame().score())

    if ( current_frame == 10 ) {
      $('#game10 #ball3').text(match.thirdBall())
    }
    if (match.matchComplete()) {
      match_over()
    }
  }
})
