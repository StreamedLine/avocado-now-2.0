Rails.application.routes.draw do
	post 'user_token' => 'user_token#create'

	# Home controller routes.
	root   'home#index'
	get    'auth'            => 'home#auth'

	# Get login token from Knock
	post   'user_token'      => 'user_token#create'

	# User actions
	get    '/users'          => 'users#index'
	get    '/users/current'  => 'users#current'
	post   '/users/create'   => 'users#create'
	patch  '/user/:id'       => 'users#update'
	delete '/user/:id'       => 'users#destroy'

	resources :stores, only: [:index, :create, :update]
	get    'stores/zip/:zip' => 'stores#search'
	 
	resources :reports, only: [:index, :create, :update]
end
