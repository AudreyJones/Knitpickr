class Material < ApplicationRecord
    has_many :projects, through: :user
    belongs_to :user
end
