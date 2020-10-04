require "./lib/bowling"
 describe Bowling do
	subject(:game) { described_class.new }

	it "can calculate correct score when never scored" do 
		20.times{game.roll(0)}
		expect(game.score).to eq 0
	end

	it "can score a perfect game of all strikes" do
		12.times{game.roll(10)}
		expect(game.score).to eq 300
	end

	it "scores a spare" do 
		game.roll(4)
		game.roll(6)
		game.roll(2)
		game.roll(4)
		16.times{game.roll(0)}
		expect(game.score).to eq 18
	end

	it "scores correcly" do
		game.roll(2)
		game.roll(5)
		18.times{game.roll(0)}
		expect(game.score).to eq 7
	end 
end 