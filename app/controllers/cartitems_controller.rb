class CartitemsController < ApplicationController
    before_action :init_cart, only: [:index, :create, :update, :destroy]

    def cartjson
      @cartitem = current_cart.cartitem
      render json: @cartitem
    end

    def create
      @cartitem = @cart.cartitem.new(cart_params)
      if @cart.save
        session[:cart_id] = @cart.id
        flash[:notice] = "Added item to cart"
      else
        flash[:alert] = "error not added to cart"
      end
    end

    def update
      @cartitem = @cart.cartitem.find(params[:id])
      @cartitem.update_attributes(cart_params)
      @cartitem = current_cart.cartitem
    end

    def destroy
      @cartitem = @cart.cartitem.find(params[:id])
      @cartitem.destroy
      @cartitem = current_cart.cartitem
      flash.now[:notice] ="menu removed from cart"
    end
  
  
    private
    def cart_params
      params.permit(:menu_id, :qty )
    end

    def init_cart
      @cart = current_cart
    end
  
end
