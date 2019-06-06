(function(exports){
  function View(game) {
    this.game = game
  }

  View.prototype = {

    updateDOM: function(name, num, score) {
      this.updateTotals(name, num);
      this.updateReadOnly(name, num, score);
    },

    updateTotals: function(name, num) {
      for(let num = 0; num<20; num++){
        let name = '#frameTotal' + parseInt(num+1, 10);
        // console.log(this.controller.frameTotals())
        if(this.game.frameTotals()[num]){
          $(name).text("Frame: " + this.game.frameTotals()[num]);
        }
      }
      $('#gameTotal').text("Game Total: " + this.game.calculateTotal());
    },

    updateReadOnly: function(name, num, score) {
      $(name).attr('readonly', true);

      if(score === 10)
      {
        let nextName = '#ball' + parseInt(num+2, 10);
        console.log(nextName)
        $(nextName).attr('readonly', true);
        // $(nextName).attr('tabindex', '-1');
      }
    }
  }

  exports.View = View;

})(this);
