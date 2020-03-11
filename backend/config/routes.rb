Rails.application.routes.draw do
  root 'application#index'
  resources :questions
  resources :topics
  resources :exams
  get '/topics' => 'topics#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
