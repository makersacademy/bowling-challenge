require_relative 'roll'
require_relative 'score'
require_relative 'frame'

class Game  

  attr_reader :pins_sequence, :frame_pins, :strike_bonus, :spare_bonus

  def initialize 
    @pins_sequence = []
    @frame_pins = []
    @strike_bonus = []
    @spare_bonus = []
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
    @pins_sequence << @frame_pins.pop(2)
    Frame.increase
  end

  # def frame_scorer
  #   last_frame = @pins_sequence.last
  #   if last_frame.include? "X"
  #     @strike_bonus = true
  #   elsif
  #     last_frame.include? "/"
  #     @spare_bonus = true
  #   else
  #     last_frame.sum
  #   end
  # end
    
  private 

  def add_pins(pins)
    @frame_pins << pins
  end

  def strike_bonus(pins)
    @strike_bonus << pins
  end

  def spare_bonus(pins)
    @spare_bonus << pins
  end

  def strike_bonus?
    if @pins_sequence.length >= 1
      @pins_sequence[-1].include?("X")
    elsif @pins_sequence.length >= 2
      @pins_sequence[-2].include? "X"
    end
  end

  def spare_bonus?
    if @pins_sequence.length >= 1
      @pins_sequence[-1].include?("/")
    end
  end

  def roll_2_bonus?
    if @pins_sequence.length >= 1
      @pins_sequence.last.include? "X"
    end
  end
  
  def add_bonus(pins)
    if strike_bonus? || roll_2_bonus?
      @strike_bonus << pins
    elsif spare_bonus?
      @spare_bonus << pins
    end
  end

end
    