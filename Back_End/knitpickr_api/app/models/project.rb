class Project < ApplicationRecord
    serialize :materials, Array
    belongs_to :user
    has_many :materials, through: :user
    
end
