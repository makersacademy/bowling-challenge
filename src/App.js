$(document).ready(function() {
  
  var frame1 = new Frame();
  var frame2 = new Frame();
  var frame3 = new Frame();
  var frame4 = new Frame();
  var frame5 = new Frame();
  var frame6 = new Frame();
  var frame7 = new Frame();
  var frame8 = new Frame();
  var frame9 = new Frame();
  var frame10 = new TenthFrame();

  var frameArray = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame8, frame9, frame10];

  var selector = 0;

  var game = new Game(frameArray[selector]);

  var content = '';

  showField();

  function showField() { 
    if (game.isComplete()) {
      $("#primary").html('The game is complete!');
    } 
    else if (game.currentFrame().isInProgress()) {
      // var primary   = document.getElementById("primary");
      // while (primary.firstChild) {
      //   primary.removeChild(primary.firstChild);
      // };
      $("#primary").html(generateScoreEntry());
      generateScoreEntry();
    } 
    else {
      $("#primary").html(generateNextFrame());
    };
  }

  function generateScoreEntry() { 
    return ' \
      Enter Score: <input id="inputscore" type="text"> \
      <button id="submitscore" type="button">Enter</button>';
  };

  // function generateScoreEntry() {
  //   var primary   = document.getElementById("primary"),
  //       node      = document.createTextNode('Enter Score: '),
  //       input     = document.createElement('input'),
  //       button    = document.createElement('button');

  //   button.type  = 'button';
  //   button.value = 'Enter';
  //   button.id    = 'submitscore';
  //   input.type   = 'text';
  //   input.id     = 'inputscore';
      
  //   primary.appendChild(node);
  //   primary.appendChild(input);
  //   primary.appendChild(button);
  // };

  function generateNextFrame() { 
    return ' \
    <p>The frame is complete!</p> \
    <button id="nextframe" type="button">Next Frame</button>';
  };

  function generateTable() { 
    content += '(Frame ' + (selector + 1).toString() +') ';
    game.frameRecord.forEach(function(frame){
      content += 'First Roll: ' + game.currentFrame().scoreRecord[0].toString() + ', ';

      if (game.currentFrame().scoreRecord[1]) {
        content += 'Second Roll: ' + game.currentFrame().scoreRecord[1].toString() + ', ';
      };

      if (game.currentFrame().scoreRecord[2]) {
        content += 'Third Roll: ' + game.currentFrame().scoreRecord[2].toString() + ', ';
      };

      content += 'Total score with bonus: ' + game.currentFrame().totalScoreWithBonus().toString() + '<br>';
    });
    $("#scoring").html(content);
  };


  $("#nextframe").click(function() {
    game.calculateBonuses();
    selector ++;
    game.newFrame(frameArray[selector]);
    showField();
  });

  $("#submitscore").click(function() {
    var input = $('#inputscore').val();
    game.currentFrame().roll(parseInt(input));  
    showField();
    generateTable();
  });
});


