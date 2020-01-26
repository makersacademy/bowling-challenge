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

    function updateFrame() {
        bowling.getScoresTotalEvery2Elements();
        console.log("scores");
        console.log(bowling.scores);
        console.log("score board");
        console.log(bowling.totalScores);
        $("#testing").text(bowling.totalScores);
    }

    $("#rand-score").on("click", function() {
        bowling.randScore();
        updateScore();
        updateFrame();
    });

    $("#0-score").on("click", function() {
        bowling.randScore(0);
        updateScore();
    });
    $("#1-score").on("click", function() {
        bowling.randScore(1);
        updateScore();
    });
    $("#2-score").on("click", function() {
        bowling.randScore(2);
        updateScore();
    });
    $("#3-score").on("click", function() {
        bowling.randScore(3);
        updateScore();
    });
    $("#4-score").on("click", function() {
        bowling.randScore(4);
        updateScore();
    });
    $("#5-score").on("click", function() {
        bowling.randScore(5);
        updateScore();
    });
});