class KmusersController < ApplicationController
  def new
  end

  def create
    kmuser = Kmuser.new(kmuser_params)
    if kmuser.save
      session[:kmuser_id] = kmuser.id
      flash[:notice] = "Kitchen User Add"
      redirect_to klogin_path
    else
      flash[:alert] = "error Kitchen User not Add"
    end
  end
  
  private
  def kmuser_params
    params.require(:kmuser).permit(:userid,:name,:password, :password_confirmation)
  end
end
