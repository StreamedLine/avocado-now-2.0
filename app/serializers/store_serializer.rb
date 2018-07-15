class StoreSerializer < ActiveModel::Serializer
    attributes :id, :address, :zip, :name, :website
end
