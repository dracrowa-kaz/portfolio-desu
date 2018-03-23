Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '/home' => 'home#index'

  namespace :api, defaults: { format: :json } do
    mount_devise_token_auth_for 'User', at: 'auth', controllers: {
      registrations: 'api/auth/registrations'
    }
    get '/projects' => 'projects#index'
    delete '/projects' => 'projects#delete'
    resource :projects, only: [:create, :update]
  end
  match '*path', to: 'application#render_404', via: :all
  root 'home#index'
end
