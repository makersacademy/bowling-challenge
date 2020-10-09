# class Frame

#   attr_reader :rolls_score, :roll_count, :frame
  

#   def initialize
#     @rolls_score = []
#     @roll_count = 0
#     @frame = frame
#   end 

#   def add_roll(pins)
#     @rolls_score << pins
#   end




#   private
  
#   def spare?
#     @rolls_score[@roll_count] + @rolls_score[@roll_count + 1] == 10
#     @rolls_score << pins
#   end

#   def spare_bonus
#     10 + @rolls_score[@roll_count + 2]
#   end

#   def strike?
#     @rolls_score[@roll_count] == 10
#     @rolls_score << pins
#   end

#   def strike_bonus
#     10 + @rolls_score[@roll_count + 3] + @rolls_score[@roll_count + 4]
#   end




# end