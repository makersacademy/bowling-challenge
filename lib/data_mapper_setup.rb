require 'data_mapper'
require 'dm-postgres-adapter'

DataMapper.setup(:default, ENV['DATABASE_URL'] || "postgres://localhost/bookmark_manager_development")
# DataMapper.auto_migrate!
DataMapper.finalize
