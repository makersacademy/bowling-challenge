$(document).ready(function() {
    var game = new Game();
    game.start();

    $('#power-up').click(function(event) {
        powerUp();
    });

    $('#bowl').click(function(event) {
        if (game.currentFrame().firstScore()) {
            secondRoll(power());
        } else {
            firstRoll(power());
        }

        insertScores();
        insertFrameScore();
        if (game._currentFrame > 10 && game.isBonusFrame()) {
            unhideBonusFrames();
        }
    });

    var strikeNotifier = function() {
        if (game._frames[(game._currentFrame - 2)].isStrike()) {
            $( "#notification" ).fadeIn( 500, function() {
            });
            $( "#notification" ).fadeOut( 2500, function() {
            });
        }
    }

    var power = function() {
        var elem = document.getElementById("power");
        var height = elem.style.height;
        return (Math.floor(height.replace("%", "") / 10));
    }

    var firstRoll = function(power) {
        game.bowl(power);
        strikeNotifier();
    };

    var secondRoll = function(power) {
        var firstScore = game.currentFrame().firstScore();
        var pinsLeft = (10 - firstScore);
        game.bowl(Math.floor((pinsLeft / 100) * (power * 10)));
    };

    var insertScores = function() {
        for (var i = 1; i <= game._frames.length; i++) {
            var frame = "#frame-" + i;
            $(frame + "-roll-1").text(game._frames[i - 1].firstScore());
            $(frame + "-roll-2").text(game._frames[i - 1].secondScore());
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

    var unhideSpareFrame = function() {
        $("#bonus-scores").attr("class", "show-frame");
        $("#frame-11").attr("class", "show-frame");
        $("#frame-12").attr("class", "show-frame");
    }

    var unhideStrikeFrame = function() {
        $("#frame-12").attr("class", "show-frame");
    }

    function powerUp() {
        var elem = document.getElementById("power");
        var height = 1;
        var id = setInterval(frame, 10);
        function frame() {
            if (height >= 100) {
                clearInterval(id);
                powerDown();
            } else {
                height++;
                elem.style.height = height + '%';
            }
        }
    }

    function powerDown() {
        var elem = document.getElementById("power");
        var height = 100;
        var id = setInterval(frame, 10);
        function frame() {
            if (height <= 100) {
                clearInterval(id);
                powerUp();
            } else {
                height--;
                elem.style.height = height + '%';
            }
        }
    }

});
