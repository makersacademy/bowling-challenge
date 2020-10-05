require'./lib/bowling.rb'

describe "Bowling" do
    
    it "adds 2 to the total score when two pins are knocked down" do
    bowling = Bowling.new
    bowling.add(1,1)
    expect(bowling.score).to eq 2
    end

    it "should call add when the two balls throw = less than 10" do
         bowling = Bowling.new
         bowling.game(1,2)
         bowling
        expect(bowling.score).to eq 3
    end

    it "should increase turn by when add is called" do
        bowling = Bowling.new
        bowling.add(1,1)
        expect(bowling.turn).to eq 1
      end

      it "should increase turn by when turn_counter is called" do
        bowling = Bowling.new
        expect { bowling.turn_counter }.to change { bowling.turn }.from(0).to(1)
      end
    
    
    it "adds 10 points to bonus when spare is called " do
        bowling = Bowling.new
        expect { bowling.spare }.to change { bowling.score }.from(0).to(10)
    end

    it " @is_spare to equal true when spare is called" do
        bowling = Bowling.new
        expect { bowling.spare }.to change { bowling.is_spare }.from(false).to(true)
    end

    it "adds 10 points to bonus when strike is called " do
        bowling = Bowling.new
        expect { bowling.spare }.to change { bowling.score }.from(0).to(10)
    end

    it " @is_strike to equal true when spare is called" do
        bowling = Bowling.new
        expect { bowling.strike }.to change { bowling.is_strike }.from(false).to(true)
    end



end
 