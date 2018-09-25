module Api::V1
    class MeController < ApplicationController
        def index
            @current_user = AuthorizeApiRequest.call(request.headers).result

            if (!!@current_user && !!@current_user.id)
                @user = User.find(@current_user.id)

                render json: @user
            else
                render json: { error: 'Not Authorized' }, status: 401
            end
        end
    end    
end