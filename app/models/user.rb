class User < ApplicationRecord
    has_secure_password #For Bycrypt 
    validates :password, length: { in: 10..20}, unless: "password.nil?"
    validates :email, :contact, :fname,  :lname, presence: true
    validates :contact,  length: { is: 10 } ,numericality: true
    validates :contact, :email , uniqueness: true



end
