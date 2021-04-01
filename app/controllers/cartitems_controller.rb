class CartitemsController < ApplicationController
    def index
      @cartitem =current_cart.cartitem
     # @menus = Menu.all
      render json: @cartitem
    end

    def create
      @cart = current_cart
      @cartitem = @cart.cartitem.new(cart_params)
      if @cart.save
        session[:cart_id] = @cart.id
        flash[:notice] = "Added item to cart"

      else
        flash[:alert] = "error not added to cart"

      end
    end

    def update
      @cart = current_cart
      @cartitem = @cart.cartitem.find(params[:id])
      @cartitem.update_attributes(cart_params)
      @cartitem = current_cart.cartitem
    end

    def destroy
      @cart = current_cart
      @cartitem = @cart.cartitem.find(params[:id])
      @cartitem.destroy
      @cartitem = current_cart.cartitem
      flash.now[:notice] ="menu removed from cart"
    end
  
  
    private
    def cart_params
      params.permit(:menu_id, :qty )
    end
  
end
