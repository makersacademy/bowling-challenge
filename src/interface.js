'use strict';

$(document).ready(function(){
    var game;
    var submission;
    var rollSelector = 1;

    createSelector(rollSelector, 10);

    $("#submit_score").on("click", function() {
        event.preventDefault();
        clearError();
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
        if (!game.frames) {
            errorMessage();
            return;
        }
        for (let i = 1; i < 11; i ++) {
            $("#f" + i).text(game.frames[i - 1].accumulatedScore);
        }
        $("#total").text(game.total);
    }

    function validScore(value) {
        return value > -1 || value < 11;
    }

    function errorMessage () {
        $('#error_message').text("Please refrain from inputing wrong inputs");
    }

    function clearError() {
        $('#error_message').text("");
    }

});

//     $('#down').on('click', function() {
//         thermostat.down();
//         updateInfo();
//     });

//     $('#reset').on('click', function() {
//         thermostat.reset();
//         updateInfo();
//     });

//     $('#power_saving').on('click', function() {
//         thermostat.pressPowerSaving();
//         updateInfo();
//         $('#power_saving').attr('class', ('power_' + thermostat.powerSaving()));
//     });

//     $('#select-location').submit(function(event) {
//         event.preventDefault();
//         var location = $('#current-location').val();
//         getWeather(location);
//     });

// //helpers
//     function updateTemperature() {
//         $('#temperature').text(thermostat.temperature());
//     };

//     function updateEnergyUsage() {
//         $('#energy_usage').text(thermostat.energyUsage());
//     };

//     function updateInfo() {
//         updateTemperature();
//         updateEnergyUsage();
//     };

//     function getWeather(location) {
//         var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
//         var api_key = '&appid=27016742dff44ef54a22846755b2386d';
//         var conversion = '&units=metric';
//         $.get(url + location + api_key + conversion, function(data) {
//             $('#outside-temperature').text(data.main.temp);
//         });
//     };
// });
