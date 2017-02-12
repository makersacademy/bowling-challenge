$(document).ready(function() {
    var game = new Game();
    game.start();

    $('#bowl').click(function(event) {
        game.bowl(10);
        // if(game.currentFrame().firstScore()) {
        //   secondRoll();
        //   console.log(game.currentFrame().firstScore());
        //
        //   // insertScores();
        // } else {
        //   console.log(game.currentFrame().firstScore());
        //   firstRoll();
        //
        //   // insertScores();
        // }
        // game.bowl(Math.floor(Math.random() * 10) + 1);
        // game.bowl(Math.floor(Math.random() * (10 - firstScore)) + 1);
        // alert(game.score());
        // console.log(game._frames);
        // console.log(game.currentFrame());
        // console.log(game.currentFrame().score());
        // console.log(game.score());
        insertScores();
        insertFrameScore();
        if (game._currentFrame > 10) {
            unhideBonusFrames();
        }
        // console.log(game._frames);
        // console.log(game.score());
        // console.log(game.currentFrame());
        // console.log(game.currentFrame().score());
        // console.log(game.score());
    });

    var firstRoll = function() {
        // game.bowl(Math.floor(Math.random() * (10)) + 1);
        // game.bowl(5);
        game.bowl(5);
        // var score = "#frame-" + game._currentFrame;
        // $(score + "-score").text(game.score());
    };

    var secondRoll = function() {
        firstScore = game.currentFrame().firstScore();
        game.bowl(5);
        // game.bowl(Math.floor(Math.random() * (10 - firstScore)) + 1);
        // var score = "#frame-" + (game._currentFrame - 1);
        // $(score + "-score").text(game.score());
    };

    var insertScores = function() {
        for (var i = 1; i <= game._frames.length; i++) {
            var frame = "#frame-" + i;
            $(frame + "-roll-1").text(game._frames[i - 1].firstScore());
            $(frame + "-roll-2").text(game._frames[i - 1].secondScore());
            // var score = "#frame-" + (i-1);
            // $(score + "-score").text(game.score());
        }
    };

    var insertFrameScore = function() {
        var score = "#frame-" + (game._currentFrame - 1);
        $(score + "-score").text(game.score());
    }

    var unhideBonusFrames = function() {
        $("#bonus-scores").attr("class", "show-frame");
        $("#frame-11").attr("class", "show-frame");
        $("#frame-12").attr("class", "show-frame");
    }

});
//
// game.score()
// game.currentFrame()
// game.currentFrame().firstScore()
// game.currentFrame().secondScore()
// game.currentFrame().isStrike()
// game.currentFrame().isSpare()
// game.currentFrame().score()
