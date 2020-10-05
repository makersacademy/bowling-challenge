class Bonus
  class << self

    def strikes
      @strikes ||= []
    end

    def spares
      @spares ||= []
    end

    def add_spare(pins)
      @spares << pins
    end

    def add_strike(pins)
      @strikes << pins
    end

    def reset
      @spares, @strikes = [], []
    end

  end
end