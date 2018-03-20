#!/bin/sh
cd /home/dracrowa/portfolio-desu/
kill -s SIGTERM `ps aux | grep puma | grep -v 'grep' | awk '{print $2}'`
kill -s SIGTERM `ps aux | grep puma | grep -v 'grep' | awk '{print $2}'`
kill -s SIGTERM `ps aux | grep puma | grep -v 'grep' | awk '{print $2}'`
git pull origin master
bundle install --path vendor/bundle
bundle exec rails db:create
bundle exec rails db:migrate
kill -s SIGTERM `ps aux | grep puma | grep -v 'grep' | awk '{print $2}'`
bundle exec puma -w 4 -d
yarn install
NODE_ENV=production bundle exec rake webpacker:compile
# bin/webpack --progress
sudo service nginx restart
