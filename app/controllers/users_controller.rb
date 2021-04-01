class UsersController < ApplicationController
  include UserdashboardHelper
  before_action:login?
  
  def new
  end
 
  def create
    user = User.new(user_params)
    if user.save
      session[:user_id]= user.id
      redirect_to '/login'
      flash[:notice] = "Sucssesfuly Login"    
    else
      redirect_to '/register'
      flash[:alert] = user.errors.full_messages[0]
    end
  end

  private
  def user_params
    params.require(:user).permit(:fname,:lname,:email,:contact,:password, :password_confirmation)
  end
end
