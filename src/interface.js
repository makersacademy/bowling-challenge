
function createButtons(number){
  let button ;
  for(let j=0; j<=number; j++){
    button = $("<button name='#pins' value=" + j+ "></button>").text(j);
    $("buttonArea").append(button); 
  }
}
$(document).ready(function () {


  game = new BowlingGame();
  
    $(".thead").html(function (i, origText) {
      return origText + "<th class='theader'> Round </th>";
    });
    for (var j = 0; j < 10; j++) {
      $(".thead").html(function (i, origText) {
        return origText + "<th class='theader"+j+"'>" + (j+1).toString() + "</th>";
      });
    }
  
    $(".fscorer").html(function (i, origText) {
      return origText + "<td class='fscorec'> Score </td>";
    });
    ////
    for (var j = 0; j < 10; j++) {
      $(".fscorer").html(function (i, origText) {
        return origText + "<td class='fscorec"+j+"'>" + game.getFrameScore(j) + "</td>";
      });
    }
  
    $(".rollzeror").html(function (i, origText) {
      return origText + "<td class='rollzeroc'> Roll One Round</td>";
    });
    for (var j = 0; j < 10; j++) {
      $(".rollzeror").html(function (i, origText) {
        return origText + "<td class='rollzeroc"+j+"'>" + game.getRolls(0,j) + "</td>";
      });
    }
  
    $(".rolloner").html(function (i, origText) {
      return origText + "<td class='rollzeroc'> Roll Two Round</td>";
    });
    for (var j = 0; j < 10; j++) {
      $(".rolloner").html(function (i, origText) {
        return origText + "<td class='rollonec"+j+"'>" + game.getRolls(1,j) + "</td>";
      });
    }
  
    $(".bonusone").html(function (i, origText) {
      return origText + "<td class='bonusonec'> Bonus Round 1</td>";
    });
    for (var j = 0; j < 10; j++) {
      $(".bonusone").html(function (i, origText) {
        return origText + "<td class='bonusonec"+j+"'>" + game.getBonus(0,j) + "</td>";
      });
    }
    $(".bonustwo").html(function (i, origText) {
      return origText + "<td class='bonustwoc'> Bonus Round 2</td>";
    });
    for (var j = 0; j < 10; j++) {
      $(".bonustwo").html(function (i, origText) {
        return origText + "<td class='bonustwoc"+j+"'>" + game.getBonus(1,j) + "</td>";
      });
    }

  function updatePage(){
    for (var j = 0; j < 10; j++) {
      $(".fscorec"+j).text(game.getFrameScore(j));
      $(".rollzeroc"+j).text(game.getRolls(0,j));
      $(".rollonec"+j).text(game.getRolls(1,j));
      $(".bonusonec"+j).text(game.getBonus(0,j));
      $(".bonustwoc"+j).text(game.getBonus(1,j));
      
    }
    $("#totalScore").text(game.calculateScore());
  }
  
  createButtons(10);
  
    
  $("button").click(function () {
    $("#error").text("");
    try{
      if (game.isStrike(parseInt($(this).val()))){
        $('#jff').html('<img class="jff" src="images/lebostrike.gif" />');
  
      } else if (parseInt($(this).val()) === 0){
        $('#jff').html('<img class="jff" src="images/lebogutter.gif" />');
      } else if(game.isSpare(parseInt($(this).val()))){
        $('#jff').html('<img class="jff" src="images/lebospare.gif" />');

      }else  {
        $('#jff').html('<img class="jff" src="images/leboplay.gif" />');
      }

      game.throwBall(parseInt($(this).val()));
      
    } catch(e) {
      $('#jff').html('<img class="jff" src="images/rules.gif" />');
      $("#error").text(e.message);
    }
    
    updatePage();
  });



});