var onReady = function(){
  var bowling = new Bowling;

  var beforeStartShow = function(){
     // $("#frame h2").text(bowling.frameNumbers)
  };

  $("#ball1").click(function(){
    var ball1 = bowling.firstPart();
    $('#message').text(ball1);
    if (ball1 = "Frame continues, go for next ball"){
      $('#ball2').removeClass("hidden");
    };
  });
  $("#ball2").click(function(){

  });
};

$(document).ready(function(){
  onReady();
});

