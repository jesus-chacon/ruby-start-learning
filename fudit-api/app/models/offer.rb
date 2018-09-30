class Offer < ApplicationRecord
    validates :title, presence: true, length: {minimum:3}
    validates :description, presence: true, length: {minimum: 3, maximum: 2000}
    validates :discount, presence: true, inclusion: {in: 1..100}
    validates :price, presence: true
    validates :count, presence: true
    validates :location, presence:true, length: {minimum:3, maximum: 250}

    has_many :orders, class_name: "order", foreign_key: "offer_id"
end
