class ReportsController < ApplicationController
	def index
		render json: Report.all
	end

	def create
		store = Store.find(params[:store_id])
		render json: {error: "invalid store id"} if !store
		reporter = Reporter.find(params[:reporter_id])
		render json: {error: "invalid reporter id"} if !reporter

	    report = Report.new(reporter_id: reporter.id, store_id: store.id)
	    if report.save
	      render json: report
	    else
	      render json: {error: report.errors.full_messages}
	    end
	end

	def update
		report = Report.find(params[:id])
	    if report.update(report_params)
	        render json: { status: 200, msg: 'report details have been updated.' }
	    else 
	    	render json: {error: report.errors.full_messages}}
	    end
	end

	private

	def report_params
		params.require(:report).permit(:id, :store_id, :reporter_id)
	end
end
