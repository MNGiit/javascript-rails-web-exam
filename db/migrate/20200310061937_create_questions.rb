class CreateQuestions < ActiveRecord::Migration[5.2]
  def change
    create_table :questions do |t|
      t.string :stem
      t.string :distractor_answer
      t.string :distractor_b
      t.string :distractor_c
      t.string :distractor_d
      t.references :exam, foreign_key: true
      t.references :topic, foreign_key: true

      t.timestamps
    end
  end
end
