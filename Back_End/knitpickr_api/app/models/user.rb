class User < ApplicationRecord
    serialize :fav_materials, Array
    serialize :fav_projects, Array
    has_many :projects
    has_many :materials
end