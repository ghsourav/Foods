class PlaceorderController < ApplicationController
    
    before_action :placeorder_find,only:[:update,:show]
  
    def create
        placeorder =Placeorder.new(placeorder_params)  
        if placeorder.save
            flash[:notice] = "Order Placed"
            session[:cart_id]=nil                
            redirect_to order_summery_path(placeorder.id)
        else
            flash[:alert] = placeorder.errors.full_messages[0]
        end
    end



    def update
        @placeorder.update_attributes(placeorder_params)
    end

    def show
        cartid = Placeorder.find(params[:id]).cart_id
        @cartitem=  Cartitem.where(cart_id: cartid)
    end

    private

    def placeorder_find
        @placeorder = Placeorder.find(params[:id])
    end

    def placeorder_params
        params.permit(:cart_id, :user_id,:deliverytype,:status,:payment)
    end
end
