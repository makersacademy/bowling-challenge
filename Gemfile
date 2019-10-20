# frozen_string_literal: true

source "https://rubygems.org"
"ruby 2.6.0"

git_source(:github) {|repo_name| "https://github.com/#{repo_name}" }

gem 'rake'
gem 'rubocop', '0.71.0'
gem 'sinatra'
gem 'rspec'

group :test do
  gem "capybara", require: false
  gem 'rspec', require: false
  gem 'simplecov', require: false
  gem 'simplecov-console', require: false
end
