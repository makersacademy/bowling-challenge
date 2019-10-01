(function(exports){
  function View(game) {
    this.game = game
  }

  View.prototype = {

    updateDOM: function(tagName, ballNumber, score) {
      this._updateFrameTotals();
      this._updateGameTotal();
      this._updateReadOnly(tagName, ballNumber, score);
    },

    _updateFrameTotals: function() {
      this.game.frameList.forEach(function (frame, index) {
        let tagName = '#frameTotal' + parseInt(index+1, 10);
        $(tagName).text("Frame: " + this.game.getFrameTotal(index));
      })
    },

    _updateGameTotal: function() {
      $('#gameTotal').text("Game Total: " + this.game.calculateTotal());
    },

    _updateReadOnly: function(tagName, ballNumber, score) {
      this._setTagToReadOnly(tagName);

      if(score === 10)
      {
        let nextTagName = '#ball' + parseInt(ballNumber+2, 10);
        this._setTagToReadOnly(nextTagName);
      }
    },

    _setTagToReadOnly: function(tagName) {
      $(tagName).attr('readonly', true);
    }
  }

  exports.View = View;

})(this);
