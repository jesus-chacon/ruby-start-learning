Rails.application.routes.draw do
    namespace :api do
        namespace :v1, defaults: { format: :json } do
            get "me", to: "me#index"
            
            resources :offers
        end
    end

    post "api/v1/auth/signup", to: "users#register"
    post "api/v1/auth/login", to: "authentication#authenticate"

    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
