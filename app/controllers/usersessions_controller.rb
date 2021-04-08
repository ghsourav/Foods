class UsersessionsController < ApplicationController
  include UserdashboardHelper 
  before_action:login?,only:[:new,:create] 
def create
  user = User.find_by_email(params[:email])
      if user && user.authenticate(params[:password])
          session[:user_id] =user.id
          redirect_back(fallback_location:root_path)
          flash[:notice] = "Succsess"    
      else
            redirect_to user_login_path
            flash[:alert] = "You need to enter correct email & password"    
      end
  end

def destroy
  session[:user_id]=nil
  redirect_to root_path
  flash[:notice] = "You are Logout Now"    
end

end
