Rails.application.routes.draw do  
  get '/klogin', to:'kmsessions#new',as: 'klogin'
  post 'kmsessions/create'
  get '/kmlogout', to:'kmsessions#destroy'
  #get '/kmadd', to:'kmusers#new'
  post 'kmusers/create'
 
  get '/maneger', to:'kmdashboard#index',as: 'maneger'
  get '/getorder/:id', to:'kmdashboard#getorder'
  get '/getuser/:id', to:'kmdashboard#userdetails'
  get '/k/complete', to:'kmdashboard#completeorder'

  get '/cart',  to:'cartitems#index'#Current Cart JSON Data 
  post 'cartitems/create' 
  post 'cartitems/update'
  delete 'cartitems/destroy'

  get 'placeorder/index'
  post 'placeorder/update'
  post 'placeorder/create'
  get "/placeorder/:id", to: 'placeorder#show',as: 'order_summery'

  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)
  #User start

  get '/dashboard', to:'userdashboard#index'
  get "/profile/:id", to: 'userdashboard#profile'
  get '/login', to:'usersessions#new'
  post '/loginuser', to:'usersessions#create' 
  get '/logout', to:'usersessions#destroy'
  get '/register', to: 'users#new'
  post '/users', to:'users#create'
  #User end
  root to: 'home#index'
  get '/veg', to:'home#veg'
  get '/view/cart', to:'home#viewcart'
  get '/nonveg', to:'home#nonveg'
  get '/all', to:'home#all'
end
