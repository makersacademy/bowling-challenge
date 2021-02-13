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
    for(let i = 0; i <= 9; i++) {
      for(let j = 1; j <=4; j++) {
        $('#f'+ (i+1) +'r'+ j).text(game._frames[i].rollsAndScore()[j-1]);
      }
    }
  }
  function updateTotal() {
    $('#total-score').text(game._totalScore());
  }

})