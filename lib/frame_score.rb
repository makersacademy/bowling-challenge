class FrameScore

  attr_reader :score

  def initialize 
    @score = []
  end 

  def first_roll
    puts "Enter score for first roll"
    score = gets.chomp.to_i
    @score << score
    strike(score) == false ? second_roll : @score << 0
  end 

  def second_roll 
    puts "Enter score for second roll"
    score = gets.chomp.to_i
    @score << score 
  end 

  def strike(score)
    score == 10 ? true : false 
  end 

end