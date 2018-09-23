class Offer < ApplicationRecord
    validates :title, presence: true, length: {minimum:3}
    validates :description, presence: true, length: {minimum: 3, maximum: 2000}
    validates :discount, presence: true, inclusion: {in: 1..100}
    validates :price, presence: true
    validates :cant, presence: true
    validates :location, presence:true, length: {minimum:3, maximum: 250}
end
