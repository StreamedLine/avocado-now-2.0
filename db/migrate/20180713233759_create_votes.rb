class CreateVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :votes do |t|
      t.integer :reporter_id
      t.integer :report_id

      t.timestamps
    end
  end
end
