$(document).ready(function () {
  const game = new Game
  game.new()

  $('.0').click(function() {
    game.currentFrame().addShot(0)
  })

  $('.1').click(function() {
    game.currentFrame().addShot(1)
  })
  
  $('.2').click(function() {
    game.currentFrame().addShot(2)
  })

  $('.3').click(function() {
    game.currentFrame().addShot(3)
  })

  $('.4').click(function() {
    game.currentFrame().addShot(4)
  })

  $('.5').click(function() {
    game.currentFrame().addShot(5)
  })

  $('.6').click(function() {
    game.currentFrame().addShot(6)
  })
  $('.7').click(function() {
    game.currentFrame().addShot(7)
  })
  $('.8').click(function() {
    game.currentFrame().addShot(8)
  })
  $('.9').click(function() {
    game.currentFrame().addShot(9)
  })
  $('.10').click(function() {
    game.currentFrame().addShot(10)
  })

  $(document).click(function () {

    point0()
    point1()
    point2()
    point3()
    point4()
    point5()
    point6()
    point7()
    point8()
    point9()

    $('.frames-container.one div.shot1').text(game._frames[0].getShot(1))
    $('.frames-container.one div.shot2').text(game._frames[0].getShot(2))
    $('.frames-container.one div.frame-score').text(game._pointsStorage[0])

    $('.frames-container.two div.shot1').text(game._frames[1].getShot(1))
    $('.frames-container.two div.shot2').text(game._frames[1].getShot(2))
    $('.frames-container.two div.frame-score').text(game._pointsStorage[1])


    $('.frames-container.three div.shot1').text(game._frames[2].getShot(1))
    $('.frames-container.three div.shot2').text(game._frames[2].getShot(2))
    $('.frames-container.three div.frame-score').text(game._pointsStorage[2])


    $('.frames-container.four div.shot1').text(game._frames[3].getShot(1))
    $('.frames-container.four div.shot2').text(game._frames[3].getShot(2))
    $('.frames-container.four div.frame-score').text(game._pointsStorage[3])


    $('.frames-container.five div.shot1').text(game._frames[4].getShot(1))
    $('.frames-container.five div.shot2').text(game._frames[4].getShot(2))
    $('.frames-container.five div.frame-score').text(game._pointsStorage[4])


    $('.frames-container.six div.shot1').text(game._frames[5].getShot(1))
    $('.frames-container.six div.shot2').text(game._frames[5].getShot(2))
    $('.frames-container.six div.frame-score').text(game._pointsStorage[5])


    $('.frames-container.seven div.shot1').text(game._frames[6].getShot(1))
    $('.frames-container.seven div.shot2').text(game._frames[6].getShot(2))
    $('.frames-container.seven div.frame-score').text(game._pointsStorage[6])


    $('.frames-container.eight div.shot1').text(game._frames[7].getShot(1))
    $('.frames-container.eight div.shot2').text(game._frames[7].getShot(2))
    $('.frames-container.eight div.frame-score').text(game._pointsStorage[7])


    $('.frames-container.nine div.shot1').text(game._frames[8].getShot(1))
    $('.frames-container.nine div.shot2').text(game._frames[8].getShot(2))
    $('.frames-container.nine div.frame-score').text(game._pointsStorage[8])

    $('.frames-container.nine div.shot1').text(game._frames[8].getShot(1))
    $('.frames-container.nine div.shot2').text(game._frames[8].getShot(2))
    $('.frames-container.nine div.frame-score').text(game._pointsStorage[8])

    $('.frames-container.ten div.shot1').text(game._frames[9].getShot(1))
    $('.frames-container.ten div.shot2').text(game._frames[9].getShot(2))
    $('.frames-container.ten div.shot3').text(game._frames[9].getShot(3))
    $('.frames-container.ten div.frame-score').text(game._pointsStorage[9])

    $('.tot').text(game.getPoints())
  })

  function noop () {}

  function point0 () {
    if (game._frames[0].isCompleted()) {
      point0 = noop
      game.addPoints()
    }
  }

  function point1 () {
    if (game._frames[1].isCompleted()) {
      point1 = noop
      game.addPoints()
    }
  }

  function point2 () {
    if (game._frames[2].isCompleted()) {
      point2 = noop
      game.addPoints()
    }
  }

  function point3 () {
    if (game._frames[3].isCompleted()) {
      point3 = noop
      game.addPoints()
    }
  }

  function point4 () {
    if (game._frames[4].isCompleted()) {
      point4 = noop
      game.addPoints()
    }
  }

  function point5 () {
    if (game._frames[5].isCompleted()) {
      point5 = noop
      game.addPoints()
    }
  }

  function point6 () {
    if (game._frames[6].isCompleted()) {
      point6 = noop
      game.addPoints()
    }
  }

  function point7 () {
    if (game._frames[7].isCompleted()) {
      point7 = noop
      game.addPoints()
    }
  }

  function point8 () {
    if (game._frames[8].isCompleted()) {
      point8 = noop
      game.addPoints()
    }
  }

  function point9 () {
    if (game._frames[9].isCompleted()) {
      point9 = noop
      game.addPoints()
    }
  }
})
