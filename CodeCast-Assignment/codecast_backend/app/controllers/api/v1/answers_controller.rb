class Api::V1::AnswersController < Api::ApplicationController
    def index
        answers = Answer.order(created_at: :desc)
        render(json: answers)
      end

    def create
        question = Question.find(params[:question_id])
        answer = Answer.new answer_params
        answer.question = question
        answer.save!
        # render json: { id: answer.id }
    end

    private

    def answer_params
      params.require(:answer).permit(:body)
    end
end
