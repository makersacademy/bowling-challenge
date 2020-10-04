require 'database_connection'

describe DatabaseConnection do
  describe '#setup' do
    it 'sets up a connection to a database through PG' do
      expect(PG).to receive(:connect).with(dbname: 'bowling_test')
      DatabaseConnection.setup('bowling_test')
    end
  end

  describe '#query' do
    it 'executes a query via PG' do
      connection = DatabaseConnection.setup('bowling_test')
      expect(connection).to receive(:exec).with("SELECT * FROM frames;")
      DatabaseConnection.query("SELECT * FROM frames;")
    end
  end
end
