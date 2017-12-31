class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
  # protect_from_forgery with: :exception

  rescue_from StandardError,                  with: :render_500
  rescue_from ActiveRecord::RecordInvalid,    with: :render_404
  rescue_from ActionController::RoutingError, with: :render_404
  rescue_from ActiveRecord::RecordNotFound,   with: :render_404

  add_flash_types :success, :info, :warning, :danger

  def render_500
    redirect_to '/home'
  end

  def render_422
    redirect_to '/home'
  end

  def render_404
    redirect_to '/home'
  end
end
