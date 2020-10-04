require "./lib/bowling"
 describe Bowling do
	subject(:game) { described_class.new }

	it "can calculate correct score" do 
		20.times{game.roll(0)}
		expect(game.score).to eq 0
	end

	it "can score a perfect game of all strikes" do
		12.times{game.roll(10)}
		expect(game.score).to eq 300
	end
end 