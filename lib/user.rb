require_relative './database_connection_setup'
require_relative './database_connection'
class User 

  attr_reader :id, :email
  def initialize(id:, email:)
    @id = id
    @email = email
  end

  def self.create(email:, password:)
    result = DatabaseConnection.query("INSERT INTO users(email, password) VALUES('#{email}', '#{password}') RETURNING id, email;").first
    User.new(id: result['id'], email: result['email'])
  end

  def self.find(email:) 
    DatabaseConnection.query("SELECT * FROM users WHERE email = '#{email}';").first
  end


end