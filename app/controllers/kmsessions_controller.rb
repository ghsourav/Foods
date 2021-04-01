class KmsessionsController < ApplicationController
  def new
  end

  def create
    kmuser = Kmuser.find_by_userid(params[:userid])
    if kmuser && kmuser.authenticate(params[:password])
     session[:kmuser_id] = kmuser.id
     redirect_to '/maneger'

    else
      redirect_to '/'
    end 
  end

  def destroy
    session[:kmuser_id] = nil
    redirect_to '/login' 
  end
end
