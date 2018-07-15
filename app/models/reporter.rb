class Reporter < ApplicationRecord
	belongs_to :user
	has_many :reports

	has_many :stores, :through => :reports
end
