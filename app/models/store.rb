class Store < ApplicationRecord
	has_many :reports

	has_many :reporters, :through => :reports
end
