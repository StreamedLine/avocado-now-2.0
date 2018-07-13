class CreateReporters < ActiveRecord::Migration[5.2]
  def change
    create_table :reporters do |t|
      t.string :username
      t.integer :trustworthy
      t.integer :rating

      t.timestamps
    end
  end
end
