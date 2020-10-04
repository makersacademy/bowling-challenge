require_relative './database_connection.rb'
require_relative './frame.rb'

class Game
  def self.create(round_number:, round_score:)
    result = DatabaseConnection.query("INSERT INTO frames(round_number, round_score) VALUES(#{round_number}, #{round_score}) RETURNING id, round_number, round_score;")
    Frame.new(id: result[0]['id'], round_number: result[0]['round_number'], round_score: result[0]['round_score'])
  end

  def self.all
    result = DatabaseConnection.query("SELECT * FROM frames;")
    result.map { |frame| Frame.new(id: frame['id'], round_number: frame['round_number'], round_score: frame['round_score']) }
  end
end
