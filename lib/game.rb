require_relative 'roll'
require_relative 'score'
require_relative 'frame'
require_relative 'bonus'

class Game  

  attr_reader :roll_display, :frame_pins

  def initialize 
    @roll_display = []
    @frame_pins = []
  end

  def first_roll(pins)
    add_bonus(pins)
    @roll_1 = Roll.new
    @roll_1.pins_hit(pins)
    @roll_1.strike? ? add_pins("X") : add_pins(pins)
  end

  def second_roll(pins)
    add_bonus(pins)
    @roll_2 = Roll.new
    @roll_2.pins_hit(pins)
    @roll_2.spare?(@roll_1.pins) ? add_pins("/") : add_pins(pins)
  end

  def end_frame
    @roll_display << @frame_pins.pop(2)
    Frame.increase
    Score.display(@roll_display)
  end
    
  private 

  def add_pins(pins)
    @frame_pins << pins
  end

  def strike_bonus?
    if @roll_display.length >= 1
      @roll_display[-1].include?("X")
    elsif @roll_display.length >= 2
      @roll_display[-2].include? "X"
    end
  end

  def spare_bonus?
    if @roll_display.length >= 1
      @roll_display[-1].include?("/")
    end
  end

  def roll_2_bonus?
    if @roll_display.length >= 1
      @roll_display.last.include? "X"
    end
  end
  
  def add_bonus(pins)
    if strike_bonus? || roll_2_bonus?
      Bonus.add_strike(pins)
    elsif spare_bonus?
      Bonus.add_spare(pins)
    end
  end

end
    