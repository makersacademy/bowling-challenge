require_relative '../../lib/user'
describe User do
  subject(:user) { described_class.new(id: 1, email: 'test@test.com') }
  describe ' #id' do
    it 'should be a integer' do
      expect(subject.id).to be_a_kind_of(Integer)
    end
  end

  describe ' #email' do
    it 'should be a string' do
      expect(subject.email).to be_a_kind_of(String)
    end
  end

  describe ' #.creates' do
    it 'creates a new user' do
      user_created = User.create(email: 'test@example.com', password: '12345')
      user_database = DatabaseConnection.query("SELECT * FROM users WHERE  email = 'test@example.com';")

      expect(user_created).to be_a_kind_of(User)
      expect(user_created.email).to eq 'test@example.com'
    end
  end

  describe ' #find' do
    it 'finds user from database' do
      user_created = user.find(email: 'test@example.com')
      user_database = DatabaseConnection.query("SELECT * FROM users WHERE  email = 'test@example.com';")
      expect(user_created['email']).to eq 'test@example.com'
    end
  end

end