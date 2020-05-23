require_relative './database_connection'
  if ENV['ENVIRONMENT'] == 'test'
    DatabaseConnection.setup('bowling_test')
  else
    DatabaseConnection.setup('bowling')
  end