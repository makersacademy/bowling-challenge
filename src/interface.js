
$ (document).ready(function() {
    scorecard = new Scorecard();
    //$("#show_score").text(scorecard.score);

$("#score").click(function(){
    scorecard.getScores($('#score_input').val());   //so this is getting the value from the user from the textboxt
    $("#show_score").text(scorecard.score);

});



});