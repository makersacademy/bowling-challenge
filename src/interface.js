$(document).ready(function() {
    var bowling = new Bowling();
    updateScore();

    function updateScore() {
        $("#score-display").text(bowling.getScore());
    }

    $("#rand-score").on("click", function() {
        bowling.randScore();
        updateScore();
    });
});