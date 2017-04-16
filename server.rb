require 'sinatra'

set :public_dir, proc { File.join(root) }
