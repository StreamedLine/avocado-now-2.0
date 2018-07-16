class AddRipenessToStore < ActiveRecord::Migration[5.2]
  def change
  	add_column :stores, :ripeness, :integer, default: 4
  end
end
