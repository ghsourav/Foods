class HomeController < ApplicationController
  def index
    @menus = Menu.all
    @cartitem =current_cart.cartitem
  end


  def veg
    @menus = Menu.all
  end

  def nonveg
    @menus = Menu.all
  end

  def all
    @menus = Menu.all

    render :json => { :menu => @menus.all}
  end
end
