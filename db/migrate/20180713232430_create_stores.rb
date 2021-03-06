class CreateStores < ActiveRecord::Migration[5.2]
  def change
    create_table :stores do |t|
      t.string :address
      t.integer :zip
      t.string :name
      t.string :website
      t.boolean :confirmed

      t.timestamps
    end
  end
end
