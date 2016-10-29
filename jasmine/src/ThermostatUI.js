$( document ).ready(function() {

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + globe + "&units=metric&APPID=9f0fc5097971679f45b4020de6fbdb55", function(json) { $("#home").text(json.main.temp); });

var thermostat = new Thermostat();
var globe = $( "#world" ).val();

$( "#world" ).change(function(){
  var globe = $( "#world" ).val();
  $.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + globe + "&units=metric&APPID=9f0fc5097971679f45b4020de6fbdb55", function(json) { $("#home").text(json.main.temp); });
});

$( "#currenttemp" ).text(thermostat.temperature);

$( "#turnup" ).click(function(){
  thermostat.upTemp();
  Updatetemp();
});

$( "#turndown" ).click(function(){
  thermostat.downTemp();
  Updatetemp();
});

$( "#powersaveon" ).click(function(){
  thermostat.switchPowerSaveOn();
});

$( "#powersaveoff" ).click(function(){
  thermostat.switchPowerSaveOff();
});

$( "#reset" ).click(function(){
  thermostat.reset();
  Updatetemp();
});

function Updatetemp(){
$( "#currenttemp" ).text(thermostat.temperature);
}

});
