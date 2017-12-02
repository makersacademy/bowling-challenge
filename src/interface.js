'use strict';

$(document).ready(function(){
    var game;
    var submission;
    var rollSelector = 1;

    createSelector(rollSelector, 10);

    $("#submit_score").on("click", function() {
        event.preventDefault();
        game = new Game();
        submission = []
        parseSubmission();
        game.compute(filterSubmission(submission));
        showResults();
    });

    $("#reset").on("click", function() {
        location.reload();
    });

    $(document.body).on('change', 'select', function() {
        updateRollSelector(parseInt($(this).val()))
    });

    function parseSubmission() {
        for (let i = 1; i < 22; i++) {
            var input = $("#" + i).val();
            if (validScore(input)) {
                submission.push(parseInt(input));
            }
        }
    }

    function filterSubmission(submission) {
        return submission.filter(x => x === x);
    }

    function createSelector(id_number, limit) {
        var roll = $("#" + id_number);
        for (let i = 0; i <= limit; i++) {
            roll.append(new Option(i, i));
            roll.prop("selectedIndex", -1);        
        }
    }

    function updateRollSelector(value) {
        $("#" + rollSelector).attr('disabled', true);
        if (rollSelector === 21) {
            return;
        }
        if (rollSelector === 20) {
            if ( (parseInt($("#" + rollSelector).val()) + parseInt($("#" + (rollSelector - 1)).val())) >= 10) {
                rollSelector++;
                createSelector(rollSelector, 10);
            }
            return;
        }
        if (rollSelector % 2 === 0) {
            rollSelector++;            
            createSelector(rollSelector, 10);
        } else if (value === 10) {
            if (rollSelector < 18) {
                rollSelector += 2;
                createSelector(rollSelector, 10);
            } else {
                rollSelector++;
                createSelector(rollSelector, 10);
            }
        } else {
            rollSelector++;
            createSelector(rollSelector, 10 - value);
        }
    }

    function showResults() {
        $("#output").attr("class", "result");
        $("#output_messages").attr("class", "results_message");
        for (let i = 1; i < 11; i ++) {
            $("#f" + i).text(game.frames[i - 1].accumulatedScore);
        }
        $("#total").text(game.total);
    }

    function validScore(value) {
        return value > -1 || value < 11;
    }

});
