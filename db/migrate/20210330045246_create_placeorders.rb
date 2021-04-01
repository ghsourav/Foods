class CreatePlaceorders < ActiveRecord::Migration[5.0]
  def change
    create_table :placeorders do |t|
      t.integer :cart_id
      t.integer :user_id
      t.string :deliverytype
      t.string :status
      t.boolean :payment

      t.timestamps
    end
  end
end
