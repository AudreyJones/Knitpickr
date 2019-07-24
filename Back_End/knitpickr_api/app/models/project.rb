class Project < ApplicationRecord
    serialize :materials, Array
    has_many :materials
    belongs_to :user
    
end
