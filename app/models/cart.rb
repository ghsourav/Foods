class Cart < ApplicationRecord
    has_many :cartitem
    has_many :menus
    has_many :placeorder

    before_save :set_billamount

    def billamount
        sum = 0
        self.cartitem.each do |cartitem|
            sum += cartitem.total
        end
        return sum
    end
    private

    def set_billamount
        self[:billamount] = billamount
    end



end
