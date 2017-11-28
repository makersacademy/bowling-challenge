'use strict';

$(document).ready(function(){
    var game;
    var submission;
    var k = 1;

    createSelector('1', 10);

    $("#submit_score").on("click", function() {
        event.preventDefault();
        clearError();
        game = new Game();
        submission = []
        parseSubmission();
        game.compute(submission);
        showResults();
    });

    $("#reset").on("click", function() {
        location.reload();
    });

    function parseSubmission() {
        for (let i = 1; i < 22; i++) {
            var input = $("#" + i).val();
            if (uncool(input)) {
                errorMessage();
                return;
            }
            if (input === '-') {
                continue;
            }
            submission.push(parseInt(input));
        }
    }

    function createSelector(id_number, limit) {
        var roll = $("#"+id_number);
        for (let i = 1; i <= limit; i++) {
            roll.append(new Option(i, i));
        roll.prop("selectedIndex", -1);        
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

    function uncool(value) {
        return value < 0 || value > 10;
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
