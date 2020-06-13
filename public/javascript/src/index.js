$('document').ready(function() {
    var game = new BowlingGame
    updateScores()
    buttonCheck()
    $('#gutter').prop('disabled', false);
    $('#pinsGo').prop('disabled', false);
    $('#pins').prop('disabled', false);

    $('#gutter').click(function(){
        game.score(0, updateScores);
        buttonCheck();
        endGame();
    })

    $('#pinsGo').click(function(){
        var score = parseInt($('#pins').val());
        game.score(score, updateScores);
        buttonCheck();
        endGame();
    })

    $('#spare').click(function(){
        var score = 10 - ($('#'+(parseInt(game.getId() - 1))).val())
        game.spareScored(score, updateScores);
        buttonCheck();
        endGame();
    })

    $('#strike').click(function(){
        game.strikeScored(updateScores);
        buttonCheck();
        endGame();
    })

    $('#newGame').click( function() {
        $.post('/newgame');
        game.reset();
        updateScores();
        endGame();
        buttonCheck();
        finalScore();
    })

    function buttonCheck() {
        if (game.getId().slice(-1) === '1') {
                $('#spare').prop('disabled', true);
                $('#strike').prop('disabled', false);
            } else {
                $('#spare').prop('disabled', false);;
                $('#strike').prop('disabled', true);
            }
    }




    function updateScores() { 
        game.getScore( function(data) {
            data.bowling.forEach( function(scoreCard) {
                $('#'+scoreCard.id).text(scoreCard.score);
            });
            for (var i = 1; i <= 10; i++) {
                $('#total' + i.toString()).text(data.totals[i-1])
            }
        })
        }

        function endGame() {
            if (parseInt(game.getId()) > 102) {
            $('#strike').prop('disabled', true);
            $('#spare').prop('disabled', true);
            $('#gutter').prop('disabled', true);
            $('#pinsGo').prop('disabled', true);
            $('#pins').prop('disabled', true);
            finalScore();
        } else {
            $('#gutter').prop('disabled', false);
            $('#pinsGo').prop('disabled', false);
            $('#pins').prop('disabled', false);
        }
        }
    
        function finalScore() {
            game.getScore( function(data) {
                $('#finalscore').text(game.finalTotal(data.totals))
            })
        }

})