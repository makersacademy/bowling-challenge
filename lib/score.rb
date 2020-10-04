FRAMES = 10 

@scores = {
  }

@current_frame = 1

@frame_score = [] 

while @current_frame <= FRAMES do 
  puts "Enter score for roll 1"
  @roll_1 = gets.chomp.to_i
  if @roll_1 == 10 
    @frame_score << @roll_1
    @scores[@current_frame] = @frame_score
    #@current_frame += 1
    @frame_score = []
  else 
    @frame_score << @roll_1
    puts "Enter score for roll 2"
    @roll_2 = gets.chomp.to_i
    @frame_score << @roll_2
    @scores[@current_frame] = @frame_score
    #@current_frame += 1
    @frame_score = []
      #if @roll_1 + @roll_2 == 1
      #   @frame_s
      #   @score[@current_frame] = @frame_score
      # else 
      #   @frame_score = @roll_1 + @roll_2
      #   @score[@current_frame] = @frame_score
      #   @current_frame += 1
      #end 
    end 
     if @current_frame == 10 
      if @scores[10].length == 1
        @bonus = []
        puts "Enter score for bonus roll 1"
        @bonus_roll_1 = gets.chomp.to_i
        puts "Enter score for bonus roll 2"
        @bonus_roll_2 = gets.chomp.to_i
        @bonus << @bonus_roll_1 << @bonus_roll_2
        @scores[11] = @bonus 
      elsif @scores[10].length == 2 && @scores[10].sum == 10 
        @bonus = []
        puts "Enter bonus roll"
        @bonus_roll = gets.chomp.to_i
        @bonus << @bonus_roll
        @scores[11] = @bonus
      end 
    end 
    @current_frame += 1
  end 

 

  # @scores.values do |frame_score_array|
  #   if frame_score_array.length == 1
  #     @final_frame_score = 
  #       frame_score_array + frame_score_array[index + 1].sum 
  #   elsif frame_score_array.length == 2 && final_frame_score.sum == 10 
  #     @final_frame_score = 
  #       frame_score_array.sum + frame_score_array[index + 1][0]
  #   else 
  #     @final_frame_score = frame_score_array.sum
  #   end 

# @frame_totals = @scores.values
# @final_frame_scores = []

# @frame_totals.each_with_index do |frame, index|
#   if frame.length == 1
#     if @frame_totals[index+1].length == 1
#       @final_frame_scores << (frame.sum) + (@frame_totals[index+1].sum) + (@frame_totals[index + 2][0])
#     else 
#      @final_frame_scores << (frame.sum) + (@frame_totals[index+1].sum)
#     end 
#   elsif frame.length == 2 && frame.sum == 10 
#       @final_frame_scores << (frame.sum) + (@frame_totals[index+1][0])
#    else 
#     @final_frame_scores << frame.sum
#   end
# end  