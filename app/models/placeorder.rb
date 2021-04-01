class Placeorder < ApplicationRecord
    belongs_to :cart
    has_many :user

    validates :deliverytype, presence: true


  
  
end
