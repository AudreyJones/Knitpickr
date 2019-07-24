class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :favorited, :materials, :user_id
  belongs_to :user
  has_many :materials, through: :user
end
