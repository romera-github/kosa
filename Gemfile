source 'https://rubygems.org'

# Specify your gem's dependencies in github-lod.gemspec
gemspec :name => ""

gem 'sinatra'
gem 'rubygems-bundler'

gem 'rdf'
gem 'rdfs'
gem 'linkeddata'

gem 'dalli'

# Persistence Adapters ##
#
# SQLite3, PostgreSQL, Heroku
# gem 'rdf-do'
# gem 'do_sqlite3'
#
# AllegroGraph
# gem 'rdf-agraph'
#
# 4Store
gem 'rdf-4store'
# place more  adapters below ..


gem 'rdf-raptor'
#gem 'spira'
gem 'coveralls', require: false

gem 'sparql'
gem 'sparql-client'
#gem 'rest-client'
gem 'fileutils'
gem 'siren'
gem 'equivalent-xml'

# yajl gem increases JSON parse ~ 1.9x -> https://github.com/brianmario/yajl-ruby
# gem 'json'
gem 'yajl-ruby'

gem 'rack-test'

group :production do
end

group :development, :test do

  # gem 'shotgun'
  # gem "wirble"
  # gem "syntax"
  # gem 'rspec'
  # gem 'rack-test'
  # gem "redcarpet"
  
  gem "debugger" if RUBY_VERSION > "1.9"
  gem "rake"
end
