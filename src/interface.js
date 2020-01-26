$(document).ready(function() {
    var bowling = new Bowling();
    updateScore();

    function updateScore() {
        $("#score-display").text(bowling.getScore());
        var score = parseInt($("#score-display").text());
        if (score === 10) {
            $("#cheers-display").text("Strike!");
        } else {
            $("#cheers-display").text(null);
        }
    }

    $("#rand-score").on("click", function() {
        bowling.randScore();
        updateScore();
    });
});