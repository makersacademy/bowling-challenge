// $( document ).ready(function(){
//
//   var bowling = new Bowling();
//   var array = []
//
//   $(".F1").click(function (event) {
//     $('.F1B1').find(':input').each(function(){
//       array.push($(this).val());
//     });
//     event.preventDefault();
//     $('.F1B2').find(':input').each(function(){
//       array.push($(this).val());
//     });
//     event.preventDefault();
//     bowling.play(array[0], array[1])
//     $(".F1Tot").text (bowling.score);
//   });
//
//   $('.hit').find(':input').each(function(){
//     array.push($(this).val());
//   });
// });
//
//
//
// //
// //   $(".temperature").change(function () {
// //     // var temperature =h $('.temperature :text');
// //     $.postJSON("http://localhost:4567/temperature&temperature", function () {
// //     $('.temperature').text(temperature);
// //    })
// //  });
// //
// //
// //   $("#weather").change(function (event) {
// //   var city = $("#weather").val();
// //     $.getJSON("http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&units=metric&APPID=77269cbab11c2874631d100f2a966129", function (result2) {
// //       $(".weatherforcast").text("Weather forecast in " + city + ": " + result2.list.temp.day);
// //       event.preventDefault();
// //   });
// // });
//
// //   $(".up").click(function () {
// //     thermostat.up();
// //     $(".usage").text(thermostat.energyUsage());
// //     energyColor ();
// //     $(".temperature").text(thermostat.temperature + " °C");
// //   });
// //
// //   $(".down").click(function () {
// //     thermostat.down();
// //     $(".usage").text(thermostat.energyUsage());
// //     energyColor ();
// //     $(".temperature").text(thermostat.temperature + " °C");
// //   });
// //
// //   $(".eco").click(function () {
// //     thermostat.switchMode();
// //     if (thermostat.powerSaving == true) {
// //       $(".power_saving").text("Power Saving mode ON");
// //     }
// //     else {
// //       $(".power_saving").text("Power Saving mode OFF");
// //     }
// //   });
// //
// //   $(".reset").click(function () {
// //     thermostat.resetTemp();
// //     $(".temperature").text(thermostat.temperature + " °C");
// //     energyColor ();
// //   });
// //
// //   $(".power").click(function () {
// //     alert ("Thermostat is switching off, good bye");
// //   });
// //
// //   function energyColor () {
// //     if (thermostat.energyUsage () === "Low usage") {
// //       $(".temperature").css('color', "#00ef00");
// //     }
// //     else if (thermostat.energyUsage () === "Medium usage") {
// //       $(".temperature").css('color', "yellow");
// //     }
// //     else {
// //       $(".temperature").css('color', "red");
// //     }
// //   };
// // });
