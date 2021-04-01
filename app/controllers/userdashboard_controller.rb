class UserdashboardController < ApplicationController
  include UserdashboardHelper
  before_action:authorize 

  def index
  
    @placeorder= Placeorder.where(user_id: current_user_auth.id)
   # render json: @placeorder
  end

  def profile
    @user = User.find(params[:id])
   # @Placeorder=Placeorder.find_by_user_id.
  end
end
