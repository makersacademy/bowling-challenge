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

        if(roll || roll === 0)
        {
          scores.push(roll);

          if(roll == 10)
            $(this).next("input").attr("disabled", "disabled").val("/");
        }
      });

      game.updateRolls(scores);

      $("#final").html(game.score());

      var interim = 0;

      $totals.each(function(index){
        interim += game._frames[index]._intScore
        $(this).html(interim);
      })
    }
  });
});
