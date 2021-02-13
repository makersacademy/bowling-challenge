$(document).ready(function() {
  let game = new Game();

  $('#bowl-score').submit(function(event){
    event.preventDefault();
    let score = $('#score').val();
    game.bowl(Number(score));
    updateScorecard();
    updateTotal();
  })

  function updateScorecard() {
    for(let i = 0; i <=9; i++) {
      for(let j = 1; j <=4; j++) {
        $('#f'+ (i+1) +'r'+ j).text(game._frames[i].rollsAndScore()[j-1]);
      }
    }
  }
  function updateTotal() {
    let total = 0;
    for(let i = 0; i <=9; i++) {
      total += game._frames[i]._score;
    }
    $('#total-score').text(total);
  }

})