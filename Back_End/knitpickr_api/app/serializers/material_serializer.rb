class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :color, :brand
  # has_many :project_materials
  has_many :projects, through: :project_materials
end
