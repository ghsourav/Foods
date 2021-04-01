class UserdashboardController < ApplicationController
  include UserdashboardHelper
  before_action:authorize 

  def index
    @placeorder= Placeorder.where(user_id: current_user_auth.id)
    placeorderlast= Placeorder.where(user_id: current_user_auth.id).last.cart_id
    @cartitem=  Cartitem.where(cart_id: placeorderlast)
   # render json:@cartitem
  end

  def profile
    @user = User.find(params[:id])
  end
end
