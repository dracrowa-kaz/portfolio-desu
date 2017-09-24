class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  #protect_from_forgery with: :exception
  # deviceのコントローラーのときに、下記のメソッドを呼ぶ

  #before_action :configure_permitted_parameters, if: :registrations_controller?

end
