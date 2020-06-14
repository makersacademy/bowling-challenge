$('document').ready(function() {
    var game = new BowlingGame
    updateScores()
    endTurn()

    $('#gutter').click(function(){
        game.score(0, updateScores);
        endTurn();
    })

    $('#pinsGo').click(function(){
        var score = parseInt($('#pins').val());
        game.score(score, updateScores);
        endTurn();
    })

    $('#spare').click(function(){
        var score = 10 - ($('#'+(parseInt(game.getId() - 1))).val())
        game.spareScored(score, updateScores);
        endTurn();
    })

    $('#strike').click(function(){
        game.strikeScored(updateScores);
        endTurn();
    })

    $('#newGame').click( function() {
        $.post('/newgame');
        game.reset();
        updateScores();
        finalScore();
        endTurn();
    })

    function buttonCheck() {
        if (parseInt(game.getId()) >= 102) {
            $('#spare').prop('disabled', false);
            $('#strike').prop('disabled', false);
        } else if (game.getId().slice(-1) === '1') {
            $('#spare').prop('disabled', true);
            $('#strike').prop('disabled', false);
        } else {
            $('#spare').prop('disabled', false);;
            $('#strike').prop('disabled', true);
        }
        $('#gutter').prop('disabled', false);
        $('#pinsGo').prop('disabled', false);
        $('#pins').prop('disabled', false);
    }

    function endGame() {
        if (parseInt(game.getId()) > 103) {
        $('#strike').prop('disabled', true);
        $('#spare').prop('disabled', true);
        $('#gutter').prop('disabled', true);
        $('#pinsGo').prop('disabled', true);
        $('#pins').prop('disabled', true);
        finalScore();
        game.clear()
    } 
    }

    function updateScores() { // CALLBACK
        game.getScore( function(data) {
            data.bowling.forEach( function(scoreCard) {
                $('#'+scoreCard.id).text(scoreCard.score);
                if (game.getId() === '102' && scoreCard.id === '101' && scoreCard.score === null) {
                    game.finalFrameStrike();
                };
            });
            for (var i = 1; i <= 10; i++) {
                $('#total' + i.toString()).text(data.totals[i-1])
            }
        })
        }
    
        function finalScore() {
            game.getScore( function(data) {
                $('#finalscore').text(game.finalTotal(data.totals))
            })
        }

        function currentIdFormatting() {
            $(".score").css('border', '1px solid white');
            $('#' + game.getId()).css('border', '1px solid red');
        }

        function endTurn() {
            buttonCheck();
            endGame();
            currentIdFormatting();
        }

})