class Vote < ApplicationRecord
	belongs_to :report
	belongs_to :reporter
end
