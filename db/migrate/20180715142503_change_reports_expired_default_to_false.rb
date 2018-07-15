class ChangeReportsExpiredDefaultToFalse < ActiveRecord::Migration[5.2]
  def change
  	change_column_default :reports, :expired, false
  end
end
