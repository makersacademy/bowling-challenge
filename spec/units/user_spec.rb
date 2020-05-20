require_relative '../../user'
describe User do
  subject(:user) { described_class.new }
  describe ' #creates' do
    it 'creates a new user' do
      user = User.create(email: 'test@example.com', password: '12345')
      persisted_data = persisted_data(table: :users, id: user.id)

      expect(user).to be_e User
      expect(user.id).to be persisted_data.first['id']
      expect(user.email).to eq 'test@example.com'
    end
  end
end