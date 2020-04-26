$(document).ready(function() {
  var bowling = new Bowling();

$('#enter-name').submit(function(event) {
  event.preventDefault();
  var playerName = $('#name').val();
  $("#name").val('');
  savePlayer(playerName);
  updatePlayerList();
});


$('#start-game').click(function() {
  startBowling();
});

$('#game-save').submit(function(event) {
  event.preventDefault();
  var bowlOne = parseInt($('#ball-one').val()),
      bowlTwo = parseInt($('#ball-two').val());
      $('#ball-one').val('');
      $('#ball-two').val('');
      addBallsToTable(bowlOne,bowlTwo);
      bowling.storeFirst(bowlOne);
      bowling.storeSecond(bowlTwo);
      bowling.saveCurrentPlayerFrame();
      updateCurrentPlayer();
});

function updateCurrentPlayer() {
  $('#current-player').text("enter Frame for " + bowling.getCurrentPlayer().name);
}
function savePlayer(player) {
  bowling.addPlayer(player)
};

function updatePlayerList() {
  $("#player-list").empty();
  var list = document.createElement('ul');
  bowling.players.forEach((player)=>{
    var li = document.createElement('li');
    li.textContent = player.name;
    list.appendChild(li);
});
$("#player-list").append(list);
};

function startBowling() {
  hideIntro();
  makeTable(bowling.players);
  revealBoard();
  updateCurrentPlayer();
};

function hideIntro() {
  var x = document.getElementsByClassName("intro");
  var i;
  for (i= 0; i < x.length; i++)
  {
    x[i].style.display = "none"
  };
};
function revealBoard() {
  var x = document.getElementsByClassName("game-started");
  for (let index = 0; index < x.length; index++) {
    x[index].style.display = "block"
  };
};
function makeTable(players) {
  var perrow = 1, // 1 cells per row
      count = 0, // Flag for current cell
      table = document.createElement("table"),
      row = table.insertRow(),
      cell = row.insertCell();
      cell.innerHTML = 'Names\\Frames';
      for (let index = 1; index < 11; index++) {
        cell =row.insertCell();
        cell.innerHTML = `  ${index}  `
      };
      row = table.insertRow();
      for (var i of players) {
        var cell = row.insertCell();
        cell.innerHTML = i.name;
        for (let index = 1; index < 11; index+= 1) {
          cell = row.insertCell();
          cell.id = `${i.name}${index}`
        };
        
        /* You can also attach a click listener if you want
        cell.addEventListener("click", function(){
          alert("FOO!");
        });
        */
       
       // Break into next row
       count++;
       if (count%perrow==0) {
         row = table.insertRow();
        }
      };
      
      table.id = "score-board"
      $("#game-board").append(table);
};
function addBallsToTable(ballOne, ballTwo) {
  document.getElementById(`${bowling.getCurrentPlayer().name}${bowling.currentFrame}`).innerHTML=`${ballOne},${ballTwo}`
}
});