'use strict';

$(document).ready(function(){
    var game;
    var roll = 1;

    createSelector(roll, 10);

    $("#submit_score").on("click", function() {
        event.preventDefault();
        game = new Game();
        game.compute(getScoresArray());
        showOutput();
        $(this).prop("disabled",true);
    });

    $("#reset").on("click", function() {
        location.reload();
    });

    $(document.body).on('change', 'select', function() {
        if (roll > 19) {
            updateLastSelectors();
        } else {
            updateRollSelectors(rollScore(roll));
        }
    });

// Helpers -------------------------------------------- Helpers //

    function createSelector(id_number, limit) {
        let selector = $("#" + id_number);
        for (let i = 0; i <= limit; i++) {
            selector.append(new Option(i, i));
            selector.position({my: "center"});
            selector.prop("selectedIndex", -1);        
        }
    }

    function strikeSelector(id_number) {
        let selector = $("#" + id_number);
        selector.append(new Option("X", "X"));
        selector.position({my: "center"});
        selector.val("X");
        selector.attr('disabled', true);
    }

    function updateRollSelectors(value) {
        $("#" + roll).attr('disabled', true);
        roll++;
        if (roll % 2 === 1) {
            createSelector(roll, 10);
        } else if (value === 10) {
            if (roll < 19) {
                strikeSelector(roll);
                roll++;
                createSelector(roll, 10);
            } else {
                createSelector(roll, 10);
            }
        } else {
            createSelector(roll, 10 - value);
        }
    }

    function updateLastSelectors() {
        $("#" + roll).attr('disabled', true);
        if (roll === 21) {
            enableScore();
            return;
        }
        if ((rollScore(roll) + rollScore(roll - 1)) >= 10) {
            roll++;
            createSelector(roll, 10);
        } else {
            enableScore();
        }
    }

    function enableScore() {
        $("#submit_score").prop("disabled", false);
    }

    function getScoresArray() {
        let scores = []
        for (let i = 1; i < 22; i++) {
            scores.push(rollScore(i));
        }
        return scores.filter(x => x === x);
    }

    function rollScore(roll) {
        return parseInt($("#" + roll).val());
    }

    function validScore(value) {
        return value > -1 || value < 11;
    }

    function showOutput() {
        showFrameScores();
        showTotal();
        showSpiritBowler();
    }

    function showFrameScores() {
        $("#output").attr("class", "result");
        activateFrameScores();
    }

    function showTotal() {
        $("#output_messages").attr("class", "results_message");
        activateTotal();
    }

    function showSpiritBowler() {
        $("#spirit_bowler").attr("class", "spirit_bowler");
        activateSpiritBowler();
    }

    function activateFrameScores() {
        for (let i = 1; i < 11; i ++) {
            $("#f" + i).text(game.frames[i - 1].accumulatedScore);
        }        
    }

    function activateTotal() {
        $("#total").text(game.total);
    }

    function activateSpiritBowler() {
        createImage(getSpiritFace(game.total));
        $("#bio").textWithFormatting(getSpiritBio(game.total));
    }

    function createImage(source) {
        var img = $('<img />', { 
            src: source,
            class: 'spirit_face'
        });
        img.appendTo($('#face'));
    }

    $.fn.textWithFormatting = function(text){
        this.text(text);
        this.html(this.html().replace(/\n[^:]+/g,'<span style="text-decoration: underline">$&</span>'));
        this.html(this.html().replace(/\n/g,'<br/>'));
        return this;
    }

});
