class CreateCartitems < ActiveRecord::Migration[5.0]
  def change
    create_table :cartitems do |t|
      t.integer :cart_id
      t.integer :menu_id
      t.integer :qty
      t.decimal :price
      t.decimal :total

      t.timestamps
    end
  end
end
