require 'data_mapper'
require 'dm-postgres-adapter'

class Database
  include DataMapper::Resource

  property :id, Serial
  property :temperature, Integer
  property :city, String
  property :power_saving_mode, Boolean
end
