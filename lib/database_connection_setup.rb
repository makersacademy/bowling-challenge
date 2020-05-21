require_relative './database_connection'
  if ENV['ENVIROMENT'] == 'test'
    DatabaseConnection.setup('bowling_test')
  else
    DatabaseConnection.setup('bowling')
  end