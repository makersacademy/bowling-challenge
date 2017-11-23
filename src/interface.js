'use strict'

$(document).ready(function(){
    var thermostat = new Thermostat();
    updateInfo();

    $('#up').on('click', function() {
        thermostat.up();
        updateInfo();
    });

    $('#down').on('click', function() {
        thermostat.down();
        updateInfo();
    });

    $('#reset').on('click', function() {
        thermostat.reset();
        updateInfo();
    });

    $('#power_saving').on('click', function() {
        thermostat.pressPowerSaving();
        updateInfo();
        $('#power_saving').attr('class', ('power_' + thermostat.powerSaving()));
    });

    $('#select-location').submit(function(event) {
        event.preventDefault();
        var location = $('#current-location').val();
        getWeather(location);
    });

//helpers
    function updateTemperature() {
        $('#temperature').text(thermostat.temperature());
    };

    function updateEnergyUsage() {
        $('#energy_usage').text(thermostat.energyUsage());
    };

    function updateInfo() {
        updateTemperature();
        updateEnergyUsage();
    };

    function getWeather(location) {
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=';
        var api_key = '&appid=27016742dff44ef54a22846755b2386d';
        var conversion = '&units=metric';
        $.get(url + location + api_key + conversion, function(data) {
            $('#outside-temperature').text(data.main.temp);
        });
    };
});
