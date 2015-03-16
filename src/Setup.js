$(document).ready(function(){
});

$('.addPlayers').text("Add the names of the players");

$('.playerNames').submit(function() { 
  playerName = $("input:first" ).val();
  var indexNo = localStorage.length + 1;
  localStorage.setItem(indexNo, playerName);
});

if (localStorage.length > 0 ) {
  var names = ""
  for (var i=1; i < localStorage.length + 1; i++) {
    names += localStorage[i]+", ";
  };
  $('.names').text(names);
};

// $("#button2").click( function() {
//   var players = [];
//   for (var i=1; i < localStorage.length + 1; i++) {
//     players.push(localStorage[i]);
//   };
//   scoreTables = new ScoreTables(players);
//   localStorage.setItem("tables", scoreTables);
// });

clearPlayers = function() {
  localStorage.clear();
  location.reload();
};