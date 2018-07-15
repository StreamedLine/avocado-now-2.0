class AddUserIdToReporters < ActiveRecord::Migration[5.2]
  def change
  	add_column :reporters, :user_id, :integer
  end
end
