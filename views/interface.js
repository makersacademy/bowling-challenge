  $(document).ready(function() {
    $(".welcome").hide()
    var scorecard = new ScoreCard

    $(".button-1").click(function(){
      scorecard.recordRoll(1)
      update()
    })
    $(".button-2").click(function(){
      scorecard.recordRoll(2)
      update()
    })
    $(".button-3").click(function(){
      scorecard.recordRoll(3)
      update()
    })
    $(".button-4").click(function(){
      scorecard.recordRoll(4)
      update()
    })
    $(".button-5").click(function(){
      scorecard.recordRoll(5)
      update()
    })
    $(".button-6").click(function(){
      scorecard.recordRoll(6)
      update()
    })
    $(".button-7").click(function(){
      scorecard.recordRoll(7)
      update()
    })
    $(".button-8").click(function(){
      scorecard.recordRoll(8)
      update()
    })
    $(".button-9").click(function(){
      scorecard.recordRoll(9)
      update()
    })
    $(".button-10").click(function(){
      scorecard.recordRoll(10)
      update()
    })

    update = function(){
      $(".total").text(scorecard.total)
      $(".frame").text(scorecard.frame.points)
      $(".roll-1").text(scorecard.frame.roll1.points)
      $(".roll-2").text(scorecard.frame.roll2.points)
      $(".bonus").text(scorecard.bonusFrame.points)
    }


  });
