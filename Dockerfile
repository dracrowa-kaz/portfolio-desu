FROM ruby:2.4.1
LABEL maintainer 'Kazuki Sato <dracrowa@gmail.com>'

# set environment variables
ENV LANG C.UTF-8
ENV ROOT_PATH /appname

# install essential libraries
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev

# install node.js
RUN curl -sL https://deb.nodesource.com/setup_9.x | bash - && \
    apt-get install nodejs

# install yarn
RUN apt-get update && apt-get install -y curl apt-transport-https wget && \
    curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
    echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
    apt-get update && apt-get install -y yarn && yarn add webpack-cli -D && yarn add extract-text-webpack-plugin@next:q
:

# && yarn add webpack-cli -D && yarn add extract-text-webpack-plugin@next && rails 
#webpacker:install && rails webpacker:install:react
# yarn add webpack-cli -D
# yarn add extract-text-webpack-plugin@next
#  docker-compose run server bin/webpack-dev-server

# move to root
RUN mkdir $ROOT_PATH
WORKDIR $ROOT_PATH

# bundle install
ADD Gemfile $ROOT_PATH/Gemfile
ADD Gemfile.lock $ROOT_PATH/Gemfile.lock
RUN bundle install

ADD . $ROOT_PATH
