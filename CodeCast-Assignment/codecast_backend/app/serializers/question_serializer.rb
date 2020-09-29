class QuestionSerializer < ActiveModel::Serializer
  attributes( :id, :title, :body, :created_at, :updated_at, :answers)
  
  has_many :answers
  class AnswerSerializer < ActiveModel::Serializer
    attrubiutes :id, :body, :created_at, :updated_at, :comments
  end
  
end
