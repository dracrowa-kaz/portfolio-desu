#!/bin/sh
kill -s SIGTERM `ps aux | grep puma | grep -v 'grep' | awk '{print $2}'`
git pull origin master
bundle install --path vendor/bundle
bundle exec rails db:create
bundle exec rails db:migrate
bundle exec puma -w 4 -d
npm install
webpack --progress
sudo service nginx restart
