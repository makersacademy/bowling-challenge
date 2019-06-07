(function(exports){
  function View(game) {
    this.game = game
  }

  View.prototype = {

    updateDOM: function(tagName, ballNumber, score) {
      this.updateFrameTotals();
      this.updateGameTotal();
      this.updateReadOnly(tagName, ballNumber, score);
    },

    updateFrameTotals: function() {
      this.game.frameList.forEach(function (frame, index) {
        let tagName = '#frameTotal' + parseInt(index+1, 10);
        $(tagName).text("Frame: " + this.game.getFrameTotal(index));

      })
    },

    updateGameTotal: function() {
      $('#gameTotal').text("Game Total: " + this.game.calculateTotal());
    },

    updateReadOnly: function(tagName, ballNumber, score) {
      $(tagName).attr('readonly', true);

      if(score === 10)
      {
        let nexttagName = '#ball' + parseInt(ballNumber+2, 10);
        $(nexttagName).attr('readonly', true);
      }
    }
  }

  exports.View = View;

})(this);
