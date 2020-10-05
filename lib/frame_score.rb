class FrameScore

  attr_reader :score

  def initialize 
    @score = []
  end 

  def first_roll
    puts "Enter score for first roll"
    score = gets.chomp.to_i
    score.strike? == false ? second_roll : @score << score 
  end 

  def second_roll 
    puts "Enter score for second roll"
    score = gets.chomp.to_i
    @score << score 
  end 

  def strike? 
    if score == 10 
      @score << 10 << 0
    end 
  end 

end