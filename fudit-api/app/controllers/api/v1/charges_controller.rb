module Api::V1
    class ChargesController < ApplicationControllerAuth
        def create
            if isValidChargeParams
                @offer = Offer.find(params[:offerId]);
                @user = @current_user;
                @stripeToken = params[:stripeToken];

                if (@offer.id)
                    @amount = (@offer.price * 100);
                    @amount = @amount.to_d.truncate(0).to_s;
                    @amount = @amount[0..-3] # delete ".0" EJ: 10010.0 -> 10010

                    customer = Stripe::Customer.create(
                        :email => @user.email,
                        :source  => @stripeToken
                    )

                    begin
                        charge = Stripe::Charge.create(
                            :customer    => customer.id,
                            :amount      => @amount,
                            :description => "Fudit offer #{@offer.title} -- #{@offer.id}",
                            :currency    => 'eur'
                        )

                        @order = Order.create(offer: @offer, user: @user)
                        @offer.update(count: @offer.count-1);

                        if @order.save
                            render json: @order
                        else
                            render json: {error: "Error creating the order"}, status: 500
                        end
                    rescue Stripe::CardError => e
                        render json: { error: e.message}, status: :bad_request
                    end
                else
                    render json: { error: "Offer not valid"}, status: :bad_request
                end
            else
                render json: { error: "Undefined params" }, status: :bad_request
            end
        end

        private

        def isValidChargeParams
            if (params.has_key?(:offerId) && params.has_key?(:stripeToken)) 
                return true
            else
                return false
            end
        end
    end    
end