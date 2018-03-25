$(document).ready(function() {
  let frame = new Frame();
  let roundCounter = 1;
  let frameCounter = 1;

  $('.btn-group').on('click','button', function(event) {

    frame.play(event.currentTarget.id);
    updatePinsRemainingButtons();
    updateScoreCard();
  // $(`#f${frameCounter}`).html(frame.score());
  // $(`#r${roundCounter}`).html(event.currentTarget.id);
    roundCounter++
  });

  function updatePinsRemainingButtons() {
    // empty div
    $('#pins-remaining').empty();
    // create new button map
    for(var i = 0; i <= frame._pins.length; i++) {
      $(`<button>${i}</button>`).attr({ 'id': i, 'class': 'btn'}).appendTo($('#pins-remaining'));
    };
  };

  function updateScoreCard() {
    frame._frameReplay.forEach(function(element) {
     $(`#r${roundCounter}`).html(element);
     $(`#f${frameCounter}`).html(frame.score());
    });
  };
});
