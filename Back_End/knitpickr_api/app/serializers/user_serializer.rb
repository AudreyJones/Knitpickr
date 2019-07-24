class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :fav_projects, :fav_materials
  has_many :projects
  has_many :materials
end
