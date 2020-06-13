$('document').ready(function() {
    var game = new BowlingGame
    updateScores()
    buttonCheck()

    $('#gutter').click(function(){
        game.score(0, updateScores);
        buttonCheck();
    })

    $('#pinsGo').click(function(){
        var score = parseInt($('#pins').val());
        game.score(score, updateScores);
        buttonCheck();
    })

    $('#spare').click(function(){
        var score = 10 - ($('#'+(parseInt(game.getId() - 1))).val())
        game.spareScored(score, updateScores);
        buttonCheck();
    })

    $('#strike').click(function(){
        game.strikeScored(updateScores);
        buttonCheck();
    })

    function buttonCheck() {
        if (game.getId().slice(-1) === '1') {
                $('#spare').prop('disabled', true);
                $('#strike').prop('disabled', false);
            } else {
                $('#spare').prop('disabled', false);
                $('#strike').prop('disabled', true);
            }
    }




    function updateScores() { 
        game.getScore( function(data) {
        data.bowling.forEach( function(scoreCard) {
            $('#'+scoreCard.id).text(scoreCard.score);
        })
        })
        }
    

})