$(document).ready(function() {
    var bowling = new Bowling();
    updateScore();

    $("#rand-score").on("click", function() {
        bowling.play();
        updateScore();
        updateFrame();
    });

    $("#0-score").on("click", function() {
        bowling.play(0);
        updateScore();
        updateFrame();
    });
    $("#1-score").on("click", function() {
        bowling.play(1);
        updateScore();
        updateFrame();
    });
    $("#2-score").on("click", function() {
        bowling.play(2);
        updateScore();
        updateFrame();
    });
    $("#3-score").on("click", function() {
        bowling.play(3);
        updateScore();
        updateFrame();
    });
    $("#4-score").on("click", function() {
        bowling.play(4);
        updateScore();
        updateFrame();
    });
    $("#5-score").on("click", function() {
        bowling.play(5);
        updateScore();
        updateFrame();
    });
    $("#6-score").on("click", function() {
        bowling.play(6);
        updateScore();
        updateFrame();
    });
    $("#7-score").on("click", function() {
        bowling.play(7);
        updateScore();
        updateFrame();
    });
    $("#8-score").on("click", function() {
        bowling.play(8);
        updateScore();
        updateFrame();
    });
    $("#9-score").on("click", function() {
        bowling.play(9);
        updateScore();
        updateFrame();
    });
    $("#10-score").on("click", function() {
        bowling.play(10);
        updateScore();
        updateFrame()
    });

    function updateScore() {
        $("#score-display").text(bowling.getScore());
        var score = parseInt($("#score-display").text());
        console.log(bowling.frame)
        console.log("roll")
        console.log(bowling.roll)
        $("#cheers-display").hide();
        if (score === 10) {
            $("#cheers-display").text("Strike!").show().delay(1000).fadeOut();
        } else if (bowling.roll === 0 && bowling.spare()) {
            $("#cheers-display").text("Spare!").show().delay(1000).fadeOut();
        }
    }

    function updateFrame() {
        for (var i = 0; i <= 9; i++) {
            $("#" + i + "-0").text(bowling.scoreBoard[i][0])
            $("#" + i + "-1").text(bowling.scoreBoard[i][1])
            $("#total-score" + i).text(bowling.scores[i])
        }
        $("#9-2").text(bowling.scoreBoard[9][2]);
        $("#total-score9").text(bowling.scores[9])
    }

});