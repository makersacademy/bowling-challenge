require_relative 'repository'
require_relative 'score_calculator'

puts 'Welcome to Bowling Scorecard!'
puts 'Enter the score for each frame (roll 1 and roll 2). Press enter after each frame.'
puts 'Enter 10 for a strike.'

def play_game
  repository = Repository.new

  10.times do |frame_number|

    if frame_number <= 8
      print "Frame #{frame_number + 1} - Roll 1: "
      roll1 = gets.chomp.to_i
      while roll1 > 10
        puts "VALUE INVALID"
        puts "---------------------------------------------------------------------------"
        puts "ENTER VALID SCORE"
        print "Frame #{frame_number + 1} - Roll 1: "
        roll1 = gets.chomp.to_i
      end

      if roll1 == 10
        repository.add_frame(roll1, 0, 0)
        next
      end

      print 'Roll 2: '
      roll2 = gets.chomp.to_i
      while roll1 + roll2 > 10
        puts "VALUE INVALID"
        puts "---------------------------------------------------------------------------"
        puts "ENTER VALID SCORE"
        print 'Roll 2: '
        roll2 = gets.chomp.to_i
      end

      repository.add_frame(roll1, roll2, 0)

    elsif frame_number == 9
      print "Frame #{frame_number + 1} - Roll 1: "
      roll1 = gets.chomp.to_i
      while roll1 > 10
        puts "VALUE INVALID"
        puts "---------------------------------------------------------------------------"
        puts "ENTER VALID SCORE"
        print "Frame #{frame_number + 1} - Roll 1: "
        roll1 = gets.chomp.to_i
      end
      
      print 'Roll 2: '
      roll2 = gets.chomp.to_i

      if roll1 != 10
        while roll1 + roll2 > 10
          puts "VALUE INVALID"
          puts "---------------------------------------------------------------------------"
          puts "ENTER VALID SCORE"
          print 'Roll 2: '
          roll2 = gets.chomp.to_i
        end
      elsif roll1 == 10
        while roll2 > 10
          puts "VALUE INVALID"
          puts "---------------------------------------------------------------------------"
          puts "ENTER VALID SCORE"
          print 'Roll 2: '
          roll2 = gets.chomp.to_i
        end
      end

      if roll1 + roll2 >= 10
        print "Roll 3: "
        roll3 = gets.chomp.to_i
        while roll3 > 10
          puts "VALUE INVALID"
          puts "---------------------------------------------------------------------------"
          puts "ENTER VALID SCORE"
          print 'Roll 3: '
          roll3 = gets.chomp.to_i
        end
        repository.add_frame(roll1, roll2, roll3)
      else
        repository.add_frame(roll1, roll2, 0)
      end
    end
  end
end

play_game
