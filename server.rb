require 'sinatra'

set :public_folder, proc { File.join(root) }

get '/' do
  redirect('/SpecRunner.html')
end
