class AddNameToCartitems < ActiveRecord::Migration[5.0]
  def change
    add_column :cartitems, :menu_name, :string
  end
end
