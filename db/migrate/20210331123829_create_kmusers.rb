class CreateKmusers < ActiveRecord::Migration[5.0]
  def change
    create_table :kmusers do |t|
      t.string :userid
      t.string :name
      t.string :password_digest

      t.timestamps
    end
  end
end
