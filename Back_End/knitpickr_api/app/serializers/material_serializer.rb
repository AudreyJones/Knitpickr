class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :color, :brand, :favorited, :project_id
  belongs_to :project
  
end
