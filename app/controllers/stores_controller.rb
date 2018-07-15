class StoresController < ApplicationController
	def create
		store = Store.new(store_params)
		if store.save
			render json: store
		else
			render json: {error: store.errors.full_messages}
		end
	end

	def update
		store = Store.find(store_params[:id])
		if store.update(store_params)
		  render json: store
		else
		  render json: {error: store.errors.full_messages}
		end
	end

	private

	def store_params
		params.require(:store).permit(:id, :address, :zip, :name, :website)
	end
end
