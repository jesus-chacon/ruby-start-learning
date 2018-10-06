class AddImgUrl < ActiveRecord::Migration[5.2]
  def change
    add_column :offers, :imgUrl, :string
  end
end
