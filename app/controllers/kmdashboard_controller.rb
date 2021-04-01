class KmdashboardController < ApplicationController
  include KmdashboardHelper
  before_action:kmauthorize 

  def index
    @placeorder= Placeorder.all
  end

  def completeorder
    @placeorder= Placeorder.all
  end

  def getorder
    @placeorder = Placeorder.find(params[:id])
    cartid = Placeorder.find(params[:id]).cart_id
    @cartitem=  Cartitem.where(cart_id: cartid)
    render json: @cartitem
  end

  def userdetails
    @user = User.find(params[:id])
    render json: @user
  end
end
