class CreateReports < ActiveRecord::Migration[5.2]
  def change
    create_table :reports do |t|
      t.integer :reporter_id
      t.integer :store_id
      t.integer :votes
      t.boolean :expired

      t.timestamps
    end
  end
end
