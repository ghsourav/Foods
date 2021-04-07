class HomeController < ApplicationController
  def index
    @menus = Menu.where(enable:true)
  end

  def veg
    @menus = Menu.where(veg:true,enable:true)
  end

  def nonveg
    @menus = Menu.where(veg:false,enable:true)
  end

  def all
    @menus = Menu.where(veg:true,enable:true)
    render json: @menus
  end
end
