$('document').ready(function() {
    var game = new BowlingGame
    updateScores()

     $('#gutter').click(function(){
         game.score(0, updateScores())
        })

     $('#pinsGo').click(function(){
        var score = parseInt($('#pins').val())
        game.score(score, updateScores())
    })

    $('#spare').click(function(){
        var score = parseInt($('#pins').val())
        game.spareScored(score, updateScores())
    })

    $('#strike').click(function(){
        game.strikeScored(updateScores())
    })




    function updateScores() { 
        game.getScore( function(data) {
        data.bowling.forEach( function(scoreCard) {
            $(scoreCard.id).text(scoreCard.score)
        })
        }
        )};
    

})