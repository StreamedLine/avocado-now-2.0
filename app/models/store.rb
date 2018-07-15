class Store < ApplicationRecord
	has_many :reports

	has_many :reporters, :through => :reports

	def active_stores

	end
end
