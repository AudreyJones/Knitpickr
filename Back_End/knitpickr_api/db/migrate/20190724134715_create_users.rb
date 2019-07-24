class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.text :fav_projects
      t.text :fav_materials

      t.timestamps
    end
  end
end
