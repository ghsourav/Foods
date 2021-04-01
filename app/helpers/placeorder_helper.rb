module PlaceorderHelper
    
    def order_matching
         current_user_auth.id == @placeorder.user_id
    end

    def cartid  
        Placeorder.find(params[:id]).cart_id
    end




end
