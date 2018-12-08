'use strict'

$(document).ready(function(){

    var game = new BowlingScoreCard();
    game.setFrames();

    for(var i = 1; i < 11; i++){
        var firstBox = "<div id='frame_box_1'></div>";
        var secondBox = "<div id='frame_box_2'></div>";
        var totalBox = "<div id='totalBox'></div>";
        var div = "<div class='frame' id='" + i + "'>" + firstBox + secondBox + totalBox + "</div>";
        $("#board").append(div);
    }


   function roll(){
       game.roll();
       update();    
   }

   function update(){
       for (var i = 1; i < 11; i++) {
           var firstScore = "#" + i + " #frame_box_1";
           var secondScore = "#" + i + " #frame_box_2";
           var index = "#" + i;

           var total = game.frames[i - 1].total;
           $(firstScore).text(game.frames[i-1].getFirstScore());
           $(secondScore).text(game.frames[i-1].getSecondScore());
           console.log(total);
           if(total == 0){
               total = ''
           };

        $(index + " #totalBox").text(total);

           isStrikeDisplay(index, i);
           isSpareDisplay(index, i);
       }
       console.log(game.frames);
   }

    function isStrikeDisplay(index,i){
        if (game.frames[i - 1].isStrike() == true){
            $(index + " #frame_box_2").text('strike');
            $(index + " #frame_box_1").text('');
      }
    }

    function isSpareDisplay(index, i) {
        if (game.frames[i - 1].isSpare() == true) {
            $(index + " #frame_box_2").text('spare');
            $(index + " #frame_box_1").text('');
        }
    }

    function isMissDisplay(index, i) {
    }

    $("#roll_button").click(function () {
        roll();
    });

});
