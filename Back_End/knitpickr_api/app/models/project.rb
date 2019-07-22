class Project < ApplicationRecord
    serialize :materials,Array
    has_many :materials
    
end
