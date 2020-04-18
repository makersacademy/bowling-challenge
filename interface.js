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
})


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

function startBowling() {
  hideIntro();
  makeTable(bowling.players);
  revealBoard();
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
      row = table.insertRow();

  for (var i of players) {
    var cell = row.insertCell();
    cell.innerHTML = i;

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
  for (let index = 0; index < 10; index++) {
    appendColumn(table);
  }

  $("#game-board").append(table);
};
function appendColumn(tableid) {
  var tbl = tableid,
      i;
  // open loop for each row and append cell
  for (i = 0; i < tbl.rows.length; i++) {
      createCell(tbl.rows[i].insertCell(tbl.rows[i].cells.length), "", 'col');
  };
};
function createCell(cell, text, style) {
  var div = document.createElement('div'), // create DIV element
      txt = document.createTextNode(text); // create text node
  div.appendChild(txt);                    // append text node to the DIV
  div.setAttribute('class', style);        // set DIV class attribute
  div.setAttribute('className', style);    // set DIV class attribute for IE (?!)
  cell.appendChild(div);
};

});