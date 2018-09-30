class User < ApplicationRecord
    validates_presence_of :email, :password_digest
    validates :email, uniqueness: true

    has_secure_password

    has_many :orders, class_name: "order", foreign_key: "order_id"
end
