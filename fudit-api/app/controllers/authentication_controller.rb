class AuthenticationController < ApplicationControllerAuth
    skip_before_action :authenticate_request

    def authenticate
        command = AuthenticateUser.call(params[:email], params[:password])

        if command.success?
            render json: { token: command.result }
        else
            render json: { error: command.errors }, status: :unauthorized
        end
    end
end