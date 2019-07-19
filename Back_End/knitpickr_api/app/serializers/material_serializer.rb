class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :color, :brand, :favorited
end
