class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :receiver
      t.string :sender
      t.text :body

      t.timestamps null: false
    end
  end
end
