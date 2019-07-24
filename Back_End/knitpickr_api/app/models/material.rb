class Material < ApplicationRecord
    # serialize :projects, Array -- do we want access to an array of projects that a material is a part of?
    belongs_to :user
    has_many :projects, through: :user
    
end
