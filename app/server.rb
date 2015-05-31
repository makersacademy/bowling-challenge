require 'sinatra'
require 'json'
require_relative 'controllers/application'

set :public_folder, 'public'
enable :sessions