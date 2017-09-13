#!/bin/sh
cd /vagrant/portfolio-desu
bundle install --path vendor/bundle
bundle exec rails db:create
bundle exec rails db:migrate
foreman start
