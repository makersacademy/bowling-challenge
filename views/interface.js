  $(document).ready(function() {
    $(".welcome").hide()
    var scorecard = new ScoreCard

      $(".total").text(scorecard.points)

      $(".frame").text(scorecard.frameInPlay.points)

      $(".roll-1").text(scorecard.roll1Score())

      $(".roll-2").text(scorecard.roll2Score())

    $(".new-frame").click(function(){
      scorecard.newFrame()
    })

    $(".button-1").click(function(){
      scorecard.frameInPlay.roll(1)
      update()
    })
    $(".button-2").click(function(){
      scorecard.frameInPlay.roll(2)
      update()
    })
    $(".button-3").click(function(){
      scorecard.frameInPlay.roll(3)
      update()
    })
    $(".button-4").click(function(){
      scorecard.frameInPlay.roll(4)
      update()
    })
    $(".button-5").click(function(){
      scorecard.frameInPlay.roll(5)
      update()
    })
    $(".button-6").click(function(){
      scorecard.frameInPlay.roll(6)
      update()
    })
    $(".button-7").click(function(){
      scorecard.frameInPlay.roll(7)
      update()
    })
    $(".button-8").click(function(){
      scorecard.frameInPlay.roll(8)
      update()
    })
    $(".button-9").click(function(){
      scorecard.frameInPlay.roll(9)
      update()
    })
    $(".button-10").click(function(){
      scorecard.frameInPlay.roll(10)
      update()
    })

    update = function(){
      scorecard.addPointsScore()
      $(".roll-1").text(scorecard.roll1Score())
      $(".roll-2").text(scorecard.roll2Score())
      $(".frame").text(scorecard.frameInPlay.points)
      $(".total").text(scorecard.points)
      console.log(scorecard.frameInPlay.points)
    }
  });
