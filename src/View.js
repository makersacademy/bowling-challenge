(function(exports){
  function View(controller) {
    this.controller = controller
  }

  View.prototype = {

    updateTotals: function(name, num) {
      for(let num = 0; num<20; num++){
        let name = '#frameTotal' + parseInt(num+1, 10);
        // console.log(this.controller.frameTotals())
        if(this.controller.frameTotals()[num]){
          $(name).text("Frame: " + this.controller.frameTotals()[num]);
        }
      }
      $('#gameTotal').text("Game Total: " + this.controller.totalScore());
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

  module.exports = View;

})(this);
