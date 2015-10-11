var game = new Game()

document.getElementById("new-game").addEventListener("click", function(){
  game = new Game()
  cleanTable()
});

document.getElementById("action").addEventListener("click", function(){
  game.playRoll();
  updateRollsInTable(game.rolls)
  updateTotalsInTable(game.total)
});

createTable();



function updateRollsInTable(rolls){
  for (var i = 1; i < 21; i++){
    element = document.getElementById("roll" + i)
    if (i<20) {
      element.textContent = rolls[i-1]
    } else {
      content = rolls.slice(i-1).join(" ")
      element.textContent = content
    }
  };
};

function updateTotalsInTable(totals){
  for (var i = 1; i < 11; i++){
    element = document.getElementById("total" + i)
    element.textContent = totals[i-1]
  };
};

function createTable() {
  var table = document.createElement('table');
      table.setAttribute('border', '1')
      var tr = document.createElement('tr');

      var frameNum = document.createElement('td');
      var firstRoll = document.createElement('td');
      var secondRoll = document.createElement('td');
      var total = document.createElement('td');

      var frameNumText = document.createTextNode("Number of frame");
      var firstRollText = document.createTextNode('First roll result');
      var secondRollText = document.createTextNode('Second roll result');
      var totalText = document.createTextNode('Total');

      frameNum.appendChild(frameNumText);
      firstRoll.appendChild(firstRollText);
      secondRoll.appendChild(secondRollText);
      total.appendChild(totalText);
      tr.appendChild(frameNum);
      tr.appendChild(firstRoll);
      tr.appendChild(secondRoll);
      tr.appendChild(total);

      table.appendChild(tr);

  var rollNum = 1
  for (var i = 1; i < 11; i++){
      var tr = document.createElement('tr');

      var td1 = document.createElement('td');
      var td2 = document.createElement('td');
      var td3 = document.createElement('td');
      var td4 = document.createElement('td');

      var text1 = document.createTextNode(i);
      var text2 = document.createTextNode(' ');
      var text3 = document.createTextNode(' ');
      var text4 = document.createTextNode(' ');

      td1.appendChild(text1);
      td2.appendChild(text2);
      td2.setAttribute('id', "roll"+rollNum);
      td3.appendChild(text3);
      td3.setAttribute('id', "roll"+(rollNum+1));
      td4.appendChild(text4);
      td4.setAttribute('id', "total"+i);
      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);

      table.appendChild(tr);
      rollNum+=2

  }
  document.body.appendChild(table);

};

function cleanTable(){
  for (var i = 1; i < 11; i++){
    element = document.getElementById("total" + i)
    element.textContent = ' '
  };
  for (var i = 1; i < 21; i++){
    element = document.getElementById("roll" + i)
    element.textContent = ' '
  };
}