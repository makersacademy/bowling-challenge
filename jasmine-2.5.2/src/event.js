$( document ).ready(function() {
  var bowling = new Bowling();

  $( "#addScore" ).click(function() {
    addRow();
   });

   function addRow() {
     $(".row").append("<tr class='row'>" +
     "<td>" + bowling.getFrame() + "</td>" +
     "<td>" + bowling.getRoll() + "</td>" +
     "<td>" + bowling.getScore() + "</td>" +
     "<td>" + bowling.getBonus() + "</td>" +
     "<td>" + bowling.getStrikeOrSpare() + "</td>" +
     "<td>" + bowling.getRunningTotal() + "</td>" +
     "</tr>");
   };

  function setEnergyUsageColor(){
    if (thermostat.getEnergyUsage() === "low-usage") {
      $("#energy-value").css("background-color", "green");
    } else if (thermostat.getEnergyUsage() === "medium-usage") {
      $("#energy-value").css("background-color", "black");
    } else {
      $("#energy-value").css("background-color", "red");
    }
  };

  function updateValues() {
    $("#temp-value").html(thermostat.getTemp());
    $("#psm-value").html(thermostat.getPSM());
    $("#energy-value").html(thermostat.getEnergyUsage());
    setEnergyUsageColor();
  };

  // updateValues();

  $( "#up" ).click(function() {
    thermostat.up();
    updateValues();
   });

  $( "#down" ).click(function() {
    thermostat.down();
    updateValues();
   });

  $( "#power" ).click(function() {
    thermostat.togglePowerSavingMode();
    updateValues();
  });

  $( "#reset" ).click(function() {
    thermostat.reset();
    updateValues();
   });

   $("#weather").click(function(){
      $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
        $('#weather-value').text(data.main.temp);
      });
    });
});
