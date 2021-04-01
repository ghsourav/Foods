class AddBillamountToCartitem < ActiveRecord::Migration[5.0]
  def change
    add_column :cartitems, :billamount, :integer
  end
end
