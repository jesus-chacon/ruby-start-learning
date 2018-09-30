module Api::V1
    class OffersController < ApplicationController
        before_action :set_offer, only: [:show]
        
        def index
            @offers = Offer.where("count > 0")

            render json: @offers
        end

        def show
            render json: @offer
        end

        private

        def set_offer
            @offer = Offer.find(params[:id])
        end
    end    
end