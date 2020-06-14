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
        var score = 10 - ($('#'+(game.getIdInt() - 1)).val())
        $('#'+(game.getIdInt() - 1).toString() + '1').text('/')
        game.spareScored(score, updateScores);
        endTurn();
    })

    $('#strike').click(function(){
        $('#'+game.getId() + '1').text('X')
        if (game.getIdInt() === 101) {
            game.finalFrameStrike();
        }
        if (game.getIdInt() === 102) {
            game.finalFrameStrike2();
        }
        game.strikeScored(updateScores);
        endTurn();
    })

    $('#newGame').click( function() {
        $.post('/newgame');
        game.reset();
        updateScores();
        finalScore();
        endTurn();
        resetNotes();
    })

    function buttonCheck() {
        if (game.getIdInt() === 102 && game.getfinalFrameStrikeScored()) {
            $('#spare').prop('disabled', true);
            $('#strike').prop('disabled', false);
        } 
        else if (game.getIdInt() === 103 && game.getfinalFrameStrikeScored2()) {
            $('#spare').prop('disabled', true);
            $('#strike').prop('disabled', false);
        }
        else if (game.getId().slice(-1) === '1') {
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
            if (parseInt(game.getId()) <= 103) {
                $(".score").css('border', '1px solid white');
                $('#' + game.getId()).css('border', '1px solid red');
            }
        }

        function endTurn() {
            buttonCheck();
            endGame();
            currentIdFormatting();
        }

        function resetNotes() {
            for (let i = 111; i < 1012; i += 100) {
                if (i === 1011) {
                    $('#1011').empty();
                    $('#1021').empty();
                    $('#1031').empty();
                } else {
                    id = i.toString();
                    $('#' + id).empty();
                }
            }
        }
})