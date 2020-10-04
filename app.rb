# frozen_string_literal: true

require 'sinatra/base'
require './lib/bowling'
class BowlingGame < Sinatra::Base
  get '/' do
    erb :main_page
  end

  run! if app_file == $PROGRAM_NAME
end
