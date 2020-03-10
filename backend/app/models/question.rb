class Question < ApplicationRecord
  belongs_to :exam
  belongs_to :topic
end
