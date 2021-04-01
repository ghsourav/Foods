class Cartitem < ApplicationRecord
    belongs_to :cart
    belongs_to :menu

    before_save:set_price


    def menu_name
        menu.name
    end

    def price 
        menu.price
    end
    
    def total
        menu.price.to_i*qty
    end

    def billamount
        cart.billamount
    end

    def sgst
        total*2.5/100
    end

    def cgst
        total*2.5/100
    end

    def totalprice
        total+cgst+sgst
    end

    private
    def set_price
        self[:price] =price
    end

  

    
end
