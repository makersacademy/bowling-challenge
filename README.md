
The Dude's Scoring Machine
=================

Week 5 Weekend Challenge

Perfect Game
require './lib/game.rb'
game=Game.new
10.times { game.first_roll(10)
game.end_frame }
game.roll_display
Score.display(game.roll_display)

All Spares
require './lib/game.rb'
game=Game.new
10.times { game.first_roll(5)
game.second_roll(5)
game.end_frame }
game.roll_display
Score.display(game.roll_display)

All 1s
require './lib/game.rb'
game=Game.new
10.times { game.first_roll(1)
game.second_roll(1)
game.end_frame }
game.roll_display
Score.display(game.roll_display)