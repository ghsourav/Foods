class CreateMenus < ActiveRecord::Migration[5.0]
  def change
    create_table :menus do |t|
      t.string :name
      t.string :image
      t.string :description
      t.string :price
      t.boolean :veg
      t.boolean :enable

      t.timestamps
    end
  end
end
