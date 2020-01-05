$(document).ready(function () {

    var scoreboard = new Scoreboard();

    $('.btn').on('click', function () {

        scoreboard.addRoll(
            parseInt($(this).val())
        );

        console.log(scoreboard.rolls);

        $('.pins').each(function (index, elem) {
            $(elem).html(scoreboard.rolls[index]);
        });

        var getAllFrameScores = scoreboard.getAllFrameScores();

        $('.score').each(function (index, elem) {

            $(elem).html(getAllFrameScores[index]);
        });
        


    });

});