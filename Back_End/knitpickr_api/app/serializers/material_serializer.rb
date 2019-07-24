class MaterialSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :color, :brand, :favorited, :user_id
  belongs_to :user
  has_many :projects, through: :user
  
end
