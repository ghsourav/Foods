class AddTimesToMenus < ActiveRecord::Migration[5.0]
  def change
    add_column :menus, :timestart, :string
    add_column :menus, :timesend, :string

  end
end
