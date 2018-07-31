class Store < ApplicationRecord
	has_many :reports
	has_many :reporters, :through => :reports

	def self.active_stores
		joins(:reports).where(:reports => {expired: false})
	end

	def self.search(zip)
		#active_stores.where(:zip => zip) 
		where(:zip => zip) #dev only. above line is correct
	end
end
