class Roll
  attr_reader :pins

  def initialize(pins)
    raise "Pins rolled must be between 0 and 10" unless pins.between?(0, 10)
    @pins = pins
  end
end