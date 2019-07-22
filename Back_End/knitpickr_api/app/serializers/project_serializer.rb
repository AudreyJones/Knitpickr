class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :favorited
  has_many :materials
end
