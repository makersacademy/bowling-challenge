$(document).ready(function(){

  var game = new Game();

    $(function(){
      var count = 20,
          $btn = $('.btn-bowl'); //Or which ever you want
          //Change the label of $btn
          $btn.val($btn.val()+' ('+count+')')

      var turn = 1;
      $btn.click(function(){
        game.bowl();
        console.log(game);
        var result = game.bowlScore;
        var listItem = '<l>';
        listItem += result.toString() + ', ';
        listItem += '</l>';
        $('.scores').append(listItem);

        if(turn % 2 === 0){
        var score = game.gameScore;
        var listItem = '<l>';
        listItem += score.toString() + ', ';
        listItem += '</l>';
        $('.frames').append(listItem);
        }
          $btn.val($btn.val().replace(count,count-1));
          count--;
          if(count==0) {
                return !$btn.attr('disabled','disabled');
          }
          turn += 1;
      })
    })


});
