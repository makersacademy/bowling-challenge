$(document).ready(function() {
  var bowling = new Bowling();

$('#enter-name').submit(function(event) {
  event.preventDefault();
  var playerName = $('#name').val();
  $("#name").val('');
  savePlayer(playerName);
  updatePlayerList();
});


function savePlayer(player) {
  bowling.addPlayer(player)
};

function updatePlayerList() {
  $("#player-list").empty();
  var list = document.createElement('ul');
  bowling.players.forEach((player)=>{
    var li = document.createElement('li');
    li.textContent = player;
    list.appendChild(li);
});
$("#player-list").append(list);
};
});