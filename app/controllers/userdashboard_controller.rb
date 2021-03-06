class UserdashboardController < ApplicationController
  include UserdashboardHelper
  before_action:authorize 

  def index
    @placeorder= Placeorder.where(user_id: current_user_auth.id)
    if @placeorder.exists?
      placeorderlast= @placeorder.last.cart_id
      @cartitem=  Cartitem.where(cart_id: placeorderlast)  
    end
    @placeordercurrent= @placeorder.where.not(status:'complete').reverse    
  end

  def profile
    @user = User.find(params[:id])
  end
end
