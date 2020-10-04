require "player"
describe Player do
	it "is initialized by a name" do
	player = Player.new("Victoria")
	expect(player.name).to eq "Victoria"
	end
end 