class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :color, :brand, :favorited, :project_id
  has_many :projects, through: :user
  belongs_to :user
  
end
