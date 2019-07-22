class CreateProjects < ActiveRecord::Migration[5.2]
  def change
    create_table :projects do |t|
      t.string :name
      t.text :materials
      t.boolean :favorited

      t.timestamps
    end
  end
end
