require_relative 'roll'

class Game  

  attr_reader :pins_down

  def initialize 
    @pins_down = []
  end

  def first_roll(pins)
    @roll_1 = Roll.new
    @roll_1.pins_hit(pins)
    @roll_1.strike? ? add_pins("X") : add_pins(pins)

  end

  def second_roll(pins)
    @roll_2 = Roll.new
    @roll_2.pins_hit(pins)
    @roll_2.spare?(@roll_1.pins) ? add_pins("/") : add_pins(pins)
  end
  
  private 

  def add_pins(pins)
    @pins_down << pins
  end

end
    