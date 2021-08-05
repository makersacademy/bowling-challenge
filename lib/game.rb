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
      @bowl = bowl
      frame_ten? ? frame_ten : regular_frame
    end
  end

  private

  def add_triple_score
    @total_score += @bowl * 3
  end

  def add_double_score
    @total_score += @bowl * 2
  end

  def add_score
    @total_score += @bowl
  end

  def reduce_double_point_turns
    @double_points_turns -= 1 if @double_points_turns > 0
  end

  def strike
    @bowl == 10
  end

  def spare
    @frame_score += @bowl
    @frame_score == 10
  end

  def end_frame
    @frame_score = 0
    @bowl_number = 1
    @frame_number += 1
  end

  def second_bowl
    @bowl_number == 2
  end

  def end_throw
    @bowl_number = 2
  end

  def turkey_attempt
    @triple_points_turns == 1
  end

  def next_bowl_worth_double
    @double_points_turns = 1
    end_frame
  end

  def no_bonuses
    reduce_double_point_turns
    second_bowl ? end_frame : end_throw
  end

  def frame_ten?
    @frame_number == 10
  end

  def double_point_throw
    add_double_score
    if strike
      add_strike_bonuses
    else
      spare ? next_bowl_worth_double : no_bonuses
    end
  end

  def triple_point_throw
    add_triple_score
    if strike
      add_strike_bonuses
    else
      spare ? next_bowl_worth_double : no_bonuses
      @triple_points_turns = 0
    end
  end

  def frame_ten
    if turkey_attempt
      add_triple_score
      @triple_points_turns = 0
    elsif @double_points_turns > 0 
      add_double_score
    else
      add_score
    end
    reduce_double_point_turns
  end

  def no_bonus_throw
    add_score
    if strike
      @double_points_turns = 2
      end_frame
    else
      spare ? next_bowl_worth_double : no_bonuses
    end
  end

  def regular_frame
    if turkey_attempt
      triple_point_throw
    else
      no_bonuses? ? no_bonus_throw : double_point_throw
    end
  end

  def no_bonuses?
    @double_points_turns == 0
  end

  def add_strike_bonuses
    if @double_points_turns > 1
      @triple_points_turns = 1
    end
    @double_points_turns = 2
    end_frame 
  end
end