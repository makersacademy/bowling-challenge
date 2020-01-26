task default: %w[gems]

task :bundle do
  puts 'Installing bundle...'
  sh 'gem install bundler'
end

task :gems => [:bundle] do
  puts 'Running bundle...'
  sh 'bundle'
  puts 'Required gems installed!'
end
