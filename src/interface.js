$(document).ready(function() {
    var game = new Game();
    lastBall();

    $('#1').click(function () {
        game.roll(1);
        $('#lastball').text(game.lastRoll);
        lastBall();
    });

    $('#2').click(function () {
        game.roll(2);
        $('#lastball').text(game.lastRoll);
        lastBall();
    });

    $('#3').click(function () {
        game.roll(3);
        $('#lastball').text(game.lastRoll);
        lastBall();
    });

    $('#4').click(function () {
        game.roll(4);
        $('#lastball').text(game.lastRoll);
        lastBall();
    });

    $('#5').click(function () {
        game.roll(5);
        $('#lastball').text(game.lastRoll);
        lastBall();
    });

    $('#6').click(function () {
        game.roll(6);
        $('#lastball').text(game.lastRoll);
        lastBall();
    });

    $('#7').click(function () {
        game.roll(7);
        $('#lastball').text(game.lastRoll);
        lastBall();
    });

    $('#8').click(function () {
        game.roll(8);
        $('#lastball').text(game.lastRoll);
        lastBall();
    });

    $('#9').click(function () {
        game.roll(9);
        $('#lastball').text(game.lastRoll);
        lastBall();
    });

    $('#strike').click(function () {
        game.roll(10);
        $('#lastball').text('Strike!');
        lastBall();
    });
    $('#gutter').click(function () {
        game.roll(0);
        lastBall();
    });

    function lastBall() {
        $('#lastball').text(game.lastRoll);
        $('#currentframe').text(game.currentFrame);
        console.log(isNaN(game.score()));
        if (isNaN(game.score())) {
            $('#currentscore').text('Minimum score is ' + game.framesTotal());
        } else {
            $('#currentscore').text('Total score is ' + game.score());
        }
        $('#frames').text(game.frames);

        console.log(game.currentFrame);

//                $('#lastball').attr('class', game.lastBall());
    };
});
