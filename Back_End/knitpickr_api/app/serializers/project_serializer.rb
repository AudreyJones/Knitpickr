class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :favorited
  has_many :materials
  belongs_to :user
end
