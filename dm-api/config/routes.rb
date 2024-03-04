Rails.application.routes.draw do
  # ヘルスチェック
  get '/health_check', to: 'health_checks#index'
  # ミッション一覧
  get '/missions', to: 'missions#index'
  # ミッション詳細  
  get '/missions/:id', to: 'missions#show'
  # ミッション作成
  post '/missions', to: 'missions#create'
end
