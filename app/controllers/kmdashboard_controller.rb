class KmdashboardController < ApplicationController
  include KmdashboardHelper
  before_action:kmauthorize 

  def index
    @placeorder= Placeorder.where.not(status:'complete').reverse
  end

  def completeorder
    @placeorder= Placeorder.where(status:'complete').reverse
  end

  def getorder
    @placeorder = Placeorder.find(params[:id])
    cartid = @placeorder.cart_id
    @cartitem=  Cartitem.where(cart_id: cartid)
    render json: @cartitem
  end
  
  def userdetails
    @user = User.find(params[:id])
    render json: @user
  end
end
