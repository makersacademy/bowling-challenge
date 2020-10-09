class Game
  
  attr_reader :rolls, :roll_index, :total

  def initialize
    @rolls = []
    @roll_index = 0
    @total = 0
  end

  # my roll takes pins as arguments, then stores 
  # all inside array @rolls
  def roll(pins)
    @rolls << pins
  end

  def score
    total = @rolls.sum 
  end


  def frame_score
    @rolls[roll_index] + @rolls[roll_index + 1]
  end
   
  def strike?
    @rolls[roll_index] == 10
  end

  def strike_score
    @rolls[roll_index] + @rolls[roll_index + 1] + @rolls[roll_index + 2] + @rolls[roll_index + 1] + @rolls[roll_index + 2]
  end 

  def spare?
    frame_score == 10
  end

  def spare_score
    frame_score + @rolls[roll_index + 2] + @rolls[roll_index + 2]
  end

  def frame10
    frame_score
  end

  def strike10
    @rolls[roll_index] + @rolls[roll_index + 1] + @rolls[roll_index + 2]
  end

  def spare10
    @rolls[roll_index] + @rolls[roll_index + 1] + @rolls[roll_index + 2]
  end


end