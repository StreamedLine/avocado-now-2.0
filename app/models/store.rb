class Store < ApplicationRecord
	has_many :reports
	has_many :reporters, :through => :reports

	def self.active_stores
		joins(:reports).where(:reports => {expired: false})
	end
end
