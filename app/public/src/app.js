game1 = new game;

function inputScore(score) {
 game1.addScore(score)
};

$("#scoreInput").on('click', function(){
  game1.addScore($("#score"));
})
