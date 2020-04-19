var scorecard = new Scorecard();

$(function () {

  $('#ambience').click(function () { 
    if ( $('#video').prop('muted') ) {
      $('#video').prop('muted', false)
      $('#ambience span').html('on');
    } else {
      $('#video').prop('muted', true)
      $('#ambience span').html('off');
    }
  });



});