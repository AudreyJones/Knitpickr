class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id
  belongs_to :user
  has_many :project_materials
  has_many :materials, through: :project_materials
end
