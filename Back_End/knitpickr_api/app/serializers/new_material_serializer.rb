class NewMaterialSerializer < ActiveModel::Serializer
    
    attributes :id, :name, :quantity, :color, :brand
end