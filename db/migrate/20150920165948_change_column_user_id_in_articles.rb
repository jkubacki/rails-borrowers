class ChangeColumnUserIdInArticles < ActiveRecord::Migration
  def change
    change_column :articles, :friend_id, :integer, null: false
  end
end
