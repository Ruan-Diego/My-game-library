class AddValorToGames < ActiveRecord::Migration[8.0]
  def change
    add_column :games, :valor, :integer
  end
end
