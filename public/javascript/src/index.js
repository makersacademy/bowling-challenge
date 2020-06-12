$('document').ready(function() {





    function updatetScores(data) { // callback
        data.forEach( function(scoreCard) {
            $(scoreCard[:id]).text(scoreCard[:score])
        })
    }

})