require_relative 'game'

until Frame.count == 9
  puts "Enter your first roll:"
  roll_1 = gets.chomp.to_i
  game = Game.new
  game.first_roll(roll_1)
  unless roll_1 == 10
    puts "Enter your second roll:"
    roll_2 = gets.chomp.to_i
    game.second_roll(roll_2)
  end
  game.end_frame
  puts "End of Frame #{Frame.count}"
  puts game.roll_display
  puts Score.display(game.roll_display)
end
