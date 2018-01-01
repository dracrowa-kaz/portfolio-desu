


# README

# portfolio-desu
- It is a site created by React for portfolio.
  - User registration and login are possible.
- App will issue an alert when login fails
- Server side / API is written in Rails.
- The front end is written with React.

## Demo
http://35.192.227.127/home
- GCP instance
- nginx + puma

## React
- The JavaScript notation is ES6.
- app / scripts Here is the React file.
- adopt reducex
- Split files for each component to improve reusability
- If there is an error, catch it and tell the user

## Rails
- Rails 5
- Register user with DeviseTokenAuth library
- Adding function now

# portfolio-desu
- ポートフォリオ用のReactで作成されたサイトです。
 - ユーザー登録、ログインができます。
 - ログインに失敗した時など、アラートを出します
- サーバーサイド/APIはRailsで書かれています。
- フロントエンドはReactで書かれています。

## Demo
http://35.192.227.127/home
- GCPインスタンス
- nginx + puma

## React
- JavaScriptの記法は、ES6です。
- app/scripts以下にReactのファイルがあります。
- reduxを採用
- componentごとにファイルを分割し、再利用性を高めています
- エラーがあったらキャッチし、ユーザーに伝えます

## Rails
- Rails 5
-  DeviseTokenAuthライブラリでユーザー登録を実現
- 現在機能追加中

## Getting started
```
$ bundle install --path vendor/bundle
$ bundle exec rails db:create  
$ bundle exec rails db:migrate
$ gem install foreman
$ npm install 
$ foreman start
```
