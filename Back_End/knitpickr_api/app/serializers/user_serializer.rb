class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :project_id
  has_many :projects
end
