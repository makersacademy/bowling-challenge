class Game

  attr_reader :total_score
     
  def initialize
    @total_score = 0
    @double_points_turns = 0
    @triple_points_turns = 0
    @frame_score = 0
    @frame_number = 1
    @bowl_number = 1
  end

  def play(score_array)
    score_array.each do |bowl|
      unless @frame_number == 10
        if @triple_points_turns == 1
          if bowl == 10
            @total_score += 30
            @triple_points_turns = 1
            @double_points_turns = 2
            @frame_number += 1 
          else
            @frame_score += bowl
            if @frame_score == 10
              @total_score += bowl * 3
              @double_points_turns = 1
              @frame_score = 0
              @bowl_number = 1
              @triple_points_turns = 0
              @frame_number += 1
            else
              if @bowl_number == 2
                @total_score += bowl * 3
                @bowl_number = 1
                @frame_number += 1
                if @double_points_turns > 0
                  @double_points_turns -= 1
                end
                @frame_score = 0
                @triple_points_turns = 0
              else
                @total_score += bowl * 3
                @bowl_number = 2
                if @double_points_turns > 0
                  @double_points_turns -= 1
                end
                @triple_points_turns = 0
              end
            end
          end
        else
          if @double_points_turns > 0 
            if bowl == 10
              @total_score += 20
              if @double_points_turns > 1
                @triple_points_turns = 1
              end
              @double_points_turns = 2
              @frame_number += 1
            else
              @frame_score += bowl
              if @frame_score == 10
                @total_score += bowl * 2
                @double_points_turns = 1
                @frame_score = 0
                @bowl_number = 1
                @frame_number += 1
              else
                if @bowl_number == 2
                  @total_score += bowl * 2
                  @bowl_number = 1
                  @frame_number += 1
                  if @double_points_turns > 0
                    @double_points_turns -= 1
                  end
                  @frame_score = 0
                else
                  @total_score += bowl * 2
                  @bowl_number = 2
                  if @double_points_turns > 0
                    @double_points_turns -= 1
                  end
                end
              end
            end
          else
            if bowl == 10
              @total_score += 10
              @double_points_turns = 2
              @frame_number += 1
            else
              @frame_score += bowl
              if @frame_score == 10
                @total_score += bowl
                @double_points_turns = 1
                @frame_score = 0
                @bowl_number = 1
                @frame_number += 1
              else
                if @bowl_number == 2
                  @total_score += bowl
                  @bowl_number = 1
                  @frame_number += 1
                  if @double_points_turns > 0
                    @double_points_turns -= 1
                  end
                  @frame_score = 0
                else
                  @total_score += bowl
                  @bowl_number = 2
                  if @double_points_turns > 0
                    @double_points_turns -= 1
                  end
                end
              end
            end
          end
        end
      else
        if @triple_points_turns == 1
          @total_score += bowl * 3
          @double_points_turns -= 1
          @triple_points_turns = 0
        elsif
          @double_points_turns > 0 
          @total_score += bowl * 2
          @double_points_turns -= 1
        else
          @total_score += bowl
        end
      end
    end
  end

end