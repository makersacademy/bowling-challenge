function FrameView() { }

FrameView.prototype = {
  initialise: function() {
    this._element = $(this.frameViewElement).html(
      "<div class='frame-view'>" +
        "<div class='frame-number'></div>" +
        "<div class='frame-roll1'></div>" +
        "<div class='frame-roll2'></div>" +
      "</div>"
    );
  },

  appendTo: function(parent) {
    $(parent).append(this._element);
  },

  recordRolls: function(frame) {
    $(element).find('.frame-roll1').text(getFirstRoll(frame));
    $(element).find('.frame-roll2').text(getSecondRoll(frame));
  }
}

var parentElement = $('#score-card');
var frameViews = [];

for (var i = 0; i < MAX_FRAMES; i++) {
  var frameView = new FrameView();
  frameView.initialise();
  frameView.appendTo(parentElement);
  frameViews.push(frameView);
}



for (n = 0; n < game.currentFrameNo(); n++) {
  frameViews.setScores(get.getFrames()[n]);
}
