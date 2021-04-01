class HomeController < ApplicationController

  def index
    @menus = Menu.all

  end

  def veg
    @menus = Menu.where(veg:true)
  end

  def nonveg
    @menus = Menu.where(veg:false)
  end


end
