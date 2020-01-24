$(document).ready(function(){
  var firstLoad
  var thermostat = new Thermostat()
  updateCurrentTemperature() 
  $(".minTemperature").text(thermostat.minimumTemperature)
  $(".maxTemperature").text(thermostat.maximumTemperature)
  if (thermostat.powerSavingMode === true ) {
    $(".powerSaveMode").text("power save on")
  } else {
    $(".powerSaveMode").text("power save off")
  }

  $("#increase").click(function(){
    thermostat.increase();
   updateCurrentTemperature() 
  });
  $("#decrease").click(function(){
    thermostat.decrease();
   updateCurrentTemperature() 
  });
  $("#reset").click(function(){
    thermostat.reset();
   updateCurrentTemperature() 
  });
  $("#PSM").click(function(){
    console.log("I am clicking PSM button")
    thermostat.togglePowerSavingMode();
    $(".maxTemperature").text(thermostat.maximumTemperature)
    updateCurrentTemperature()
    if (thermostat.powerSavingMode === true ) {
      $(".powerSaveMode").text("power save on")
    } else {
      $(".powerSaveMode").text("power save off")
    }
  });
  function updateCurrentTemperature() {
    if (firstLoad == null){
      firstLoad = "No";
      var loadTemp = $.jStorage.get("Temp");
      if (loadTemp > 0) {
        console.log("am I loading anything")
        thermostat.currentTemperature = loadTemp
      }
    }
    $(".currentTemp").text( thermostat.currentTemperature)
    $(".currentTemp").attr("id", thermostat.currentEnergyUsage());
    $.jStorage.set("Temp", thermostat.currentTemperature);
  };

  $("#weatherButton").click(function () {
    $.ajax({
      url: "https://api.openweathermap.org/data/2.5/weather?id=2643743&appid=4e59427e3a5a45f03bff561097f5d8c6&units=metric",
      dataType: "json",
    })
    .done(function (data) {
      $("#message").text(data.main.temp);
    })
  });
});

