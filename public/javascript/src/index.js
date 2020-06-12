$('document').ready(function() {
    var game = new BowlingGame





    function updatetScores(data) { // callback
        data.forEach( function(scoreCard) {
            $(scoreCard[:id]).text(scoreCard[:score])
        });
        if ($(game.getId()).text() === 'strike')
    }

})