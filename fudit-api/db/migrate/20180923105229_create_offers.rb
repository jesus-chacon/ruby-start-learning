class CreateOffers < ActiveRecord::Migration[5.2]
  def change
    create_table :offers do |t|
      t.string :title
      t.string :description
      t.integer :cant
      t.numeric :price
      t.text :location
      t.integer :discount
      t.string :timeAvailable

      t.timestamps
    end
  end
end
