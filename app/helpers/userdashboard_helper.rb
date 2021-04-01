module UserdashboardHelper
    def current_user_auth
        @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end

    def authorize
        redirect_to '/login' unless current_user_auth
        flash[:alert] = `You need to be login`  unless current_user_auth
    end

    def login?
        current_user_auth
          redirect_to '/dashboard' if !@current_user.nil?
          flash[:alert]="You already Loged in"
    end

end
