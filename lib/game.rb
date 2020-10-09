class Game
  

  def initialize
    @rolls = []
  end

  # my roll takes pins as arguments, then stores 
  # all inside array @rolls
  def roll(pins)
    @rolls << pins
  end

  def score
    # roll_index = 0
    total = @rolls.sum
    # context

   

  end


  # private
   def strike?(roll_index)
     roll_index = 0
     @rolls[roll_index] == 10
   end

  def strike_score
    roll_index = 0
    @rolls[roll_index] + @rolls[roll_index + 1] + @rolls[roll_index + 2]
  end 

  # def frame_score
  #   @rolls[roll_index] + @rolls[roll_index + 1] + @rolls[roll_index + 2]
  # end

  
  
end