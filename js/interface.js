$(document).ready(function() {
    var scoreCard = new ScoreCard();

    $('.score-button').on('click', function() {
        scoreCard.recordScore(parseInt($(this).text()));

        updateScores();
    });

    $('#reset').on('click', function() {
        reset();

        scoreCard = new ScoreCard();
    });

    function updateScores() {
        // Update frames
        for (var frameIndex = 0; frameIndex < scoreCard.frames.length; frameIndex++) {
            var currentFrame = scoreCard.frames[frameIndex];
            var firstRollScore = currentFrame._rollCount === 0 ? '' : currentFrame._firstRollScore;
            var secondRollScore = currentFrame._rollCount < 2 ? '' : currentFrame._secondRollScore;
            var thirdRollScore = currentFrame._rollCount < 3 ? '' : currentFrame._thirdRollScore;

            // Find and set current frame's 1st score
            $(`td[frame='${frameIndex + 1}'][roll='1']`).html(firstRollScore);
            // Find and set current frame's 2nd score
            $(`td[frame='${frameIndex + 1}'][roll='2']`).html(secondRollScore);
            // Find and set current frame's 3rd score
            $(`td[frame='${frameIndex + 1}'][roll='3']`).html(thirdRollScore);
            // Update Frame total
            $(`#frame-${frameIndex + 1}-total`).html(currentFrame.getTotalScore());
        }

        // Update Game total
        $('#game-total-score').html(scoreCard.getTotalScore());
    }

    function reset() {
        $('td').text('');
    }
});