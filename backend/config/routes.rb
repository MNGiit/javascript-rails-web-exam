Rails.application.routes.draw do
  root 'application#index'

  # resources :topics               #fetchTopics works with this line
  # get '/topics' => 'topics#index' #fetchTopics works with this line
  resources :topics, only: [:index]

  resources :questions
  resources :exams
  
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
