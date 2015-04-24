class Frame
  attr_reader :pins
  attr_accessor :strike, :spare, :id, :score

  def initialize
    puts "new frame"
    @pins = 10
  end

  def knock_down_pins_with roll
    puts "pins before this roll #{@pins}"
    puts "roll hits #{roll} pins"
    @pins -= roll
  end
end

class Game
  def initialize array_of_rolls
    @rolls = array_of_rolls
    play_a_frame
  end

  def play_a_new_frame
    frame = Frame.new
    throw_a_roll_in_this frame
  end

  def throw_a_roll_in_this frame
    # Almost there!! this roll is in the wrong place
    # and we want to reuse this method for strikes and spares
    # 10 + thismethod(1) + thismethod(2)
    # so that we can handle multiple strikes in a row
    roll = @rolls.shift
    frame.knock_down_pins_with roll

    #check for strike
    if frame.pins == 0
      frame.score = 10 + bonus_for_strike
      play_a_new_frame
    else
      roll = @rolls.shift
      frame.knock_down_pins_with roll
      if frame.pins == 0
        frame.score = 10 + bonus_for_split
      else
        frame.score = (10 - frame.pins)
      end
    end

    play_a_new_frame

  end

  def bonus_for_strike
    frame = Frame.new
    roll1 = @rolls[0]
    frame.knock_down_pins_with roll1
    roll2 = @rolls[1]
    frame.knock_down_pins_with roll2
    10 - frame.pins


  end

end