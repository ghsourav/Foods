class KmsessionsController < ApplicationController
  
  def create
    kmuser = Kmuser.find_by_userid(params[:userid])
    if kmuser && kmuser.authenticate(params[:password])
     session[:kmuser_id] = kmuser.id
     redirect_to maneger_path
     flash[:notice] = " Kitchen Loged in Succsesful"
    else
      redirect_to root_path
      flash[:alert] = "Unathorized Accses!Kitchen Loged in UnSuccsesful"
    end 
  end

  def destroy
    session[:kmuser_id] = nil
    redirect_to klogin_path
    flash[:alert] = "Logout From Kitchen"
  end
end
