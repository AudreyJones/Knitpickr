class CreateMaterials < ActiveRecord::Migration[5.2]
  def change
    create_table :materials do |t|
      t.string :name
      t.integer :quantity
      t.string :color
      t.string :brand
      t.boolean :favorited
      t.integer :user_id

      t.timestamps
    end
  end
end
