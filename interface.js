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
  if (bowling.gameEnded()) {
    endGame();
    return null
  }
  var bowlOne = parseInt($('#ball-one').val()),
      bowlTwo = parseInt($('#ball-two').val());
      $('#ball-one').val('');
      $('#ball-two').val('');
      if (bowling.currentFrame < 11) {
        addBallsToTable(bowlOne,bowlTwo);
      };
      if(inputChecker(bowlOne)){
        bowling.storeFirst(bowlOne);
      };
      if (inputChecker(bowlTwo)) {
        bowling.storeSecond(bowlTwo);
      };
      bowling.saveCurrentPlayerFrame();
      updateCurrentPlayer();
});

function endGame() {
  for (let index = 0; index < bowling.players.length; index++) {
    const element = bowling.players[index];
    document.getElementById( `${element.name}score` ).innerHTML = element.score
  }
}


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
      for (let index = 1; index < 12; index++) {
        cell =row.insertCell();
        if(index < 11){
          cell.innerHTML = `  ${index}  `
        } else {
          cell.innerHTML = 'Final Score'
        }
      };
      row = table.insertRow();
      for (var i of players) {
        var cell = row.insertCell();
        cell.innerHTML = i.name;
        for (let index = 1; index < 12; index+= 1) {
          cell = row.insertCell();
          if(index < 11) {
            cell.id = `${i.name}${index}`
          } else {
            cell.id = `${i.name}score`
          }
        };
       count++;
       if (count%perrow==0) {
         row = table.insertRow();
        }
      };
      
      table.id = "score-board"
      $("#game-board").append(table);
};
function addBallsToTable(ballOne, ballTwo) {
  var cell = document.getElementById(`${bowling.getCurrentPlayer().name}${bowling.currentFrame}`)
  if(ballOne + ballTwo < 10) {
    cell.innerHTML= `${ballOne},${ballTwo}`
  } else if(ballOne < 10 && ballOne + ballTwo === 10) {
    cell.innerHTML= '/'
  } else if(ballOne === 10) {
    cell.innerHTML='X'
  } else {
    cell.innerHTML= 'Foul'
  }
;}
function inputChecker(number) {
  if (number >= 0 && number <= 10) {
    return true;
  }
  return false;
};

});