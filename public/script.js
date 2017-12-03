var game = new Game();

$(document).ready( function(){
  var $inputs = $("input");
  var $totals = $(".total");

  $inputs.on("keyup blur", function(e){
    var code = e.which;
    var scores = [];

    if(code==9 || code==13 || e.type=="blur") {
      $inputs.each(function(){
        var roll = parseInt($(this).val());
        if(roll)
        {
          scores.push(roll);
        }
      });

      game.updateRolls(scores);
      game.score();

      var total = 0;

      $totals.each(function(index){
        total += game._frames[index]._intScore
        $(this).html(total);
      })
    }
  });
});
