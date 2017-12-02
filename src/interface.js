'use strict';

$(document).ready(function(){
    var game;
    var roll = 1;

    createSelector(roll, 10);

    $("#submit_score").on("click", function() {
        event.preventDefault();
        game = new Game();
        game.compute(getScoresArray());
        showResults();
    });

    $("#reset").on("click", function() {
        location.reload();
    });

    $(document.body).on('change', 'select', function() {
        if (roll === 20) {
            updateLastSelectors(rollScore(roll));
        } else {
            updateRollSelectors(rollScore(roll));
        }
    });

// Helpers -------------------------------------------- Helpers //

    function createSelector(id_number, limit) {
        var roll = $("#" + id_number);
        for (let i = 0; i <= limit; i++) {
            roll.append(new Option(i, i));
            roll.prop("selectedIndex", -1);        
        }
    }

    function updateRollSelectors(value) {
        $("#" + roll).attr('disabled', true);
        roll++;
        if (roll % 2 === 1) {
            createSelector(roll, 10);
        } else if (value === 10) {
            if (roll < 19) {
                roll++;
                createSelector(roll, 10);
            } else {
                createSelector(roll, 10);
            }
        } else {
            createSelector(roll, 10 - value);
        }
    }

    function updateLastSelectors(value) {
        $("#" + roll).attr('disabled', true);
        if ((rollScore(roll) + rollScore(roll - 1)) >= 10) {
            roll++;
            createSelector(roll, 10);
        }
    }

    function getScoresArray() {
        let scores = []
        for (let i = 1; i < 22; i++) {
            scores.push(rollScore(i));
        }
        return scores.filter(x => x === x);
    }

    function showResults() {
        $("#output").attr("class", "result");
        $("#output_messages").attr("class", "results_message");
        for (let i = 1; i < 11; i ++) {
            $("#f" + i).text(game.frames[i - 1].accumulatedScore);
        }
        $("#total").text(game.total);
    }

    function rollScore(roll) {
        return parseInt($("#" + roll).val());
    }

    function validScore(value) {
        return value > -1 || value < 11;
    }
});
