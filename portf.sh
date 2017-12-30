#!/bin/sh
bundle install --path vendor/bundle
bundle exec rails db:create
bundle exec rails db:migrate
foreman start
