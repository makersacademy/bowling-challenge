
def setup_test_database
  DatabaseConnection.setup('bowling_test')
  DatabaseConnection.query('TRUNCATE users')
  DatabaseConnection.query("INSERT INTO users(email, password) VALUES('test@example.com', 12345);")
end 