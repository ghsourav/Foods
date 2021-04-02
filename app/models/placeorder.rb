class Placeorder < ApplicationRecord
    belongs_to :cart
    has_many :user

    validates :deliverytype, presence: true

    enum deliverytype:[:Dinein,:Takeaway]

  
  
end
