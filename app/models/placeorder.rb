class Placeorder < ApplicationRecord
    belongs_to :cart
    has_many :user
    validates :deliverytype,:user_id,:cart_id,:status,presence: true
end
