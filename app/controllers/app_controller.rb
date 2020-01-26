$LOAD_PATH << './lib'
$LOAD_PATH << './app/controllers'
$LOAD_PATH << './app/models'

# Gems
require 'sinatra'

# Models

class BowlingScorecardApp < Sinatra::Base
  # Set up environment
  set :root, File.join(File.dirname(__FILE__), '..')
  set :views, Proc.new { File.join(root, "views") }
  set :public_folder, Proc.new { File.join(root, "../public") }


  # Routes
  get '/' do
    erb :homepage
  end

  # Start the server if ruby file executed directly
  run! if $0 == __FILE__
end
