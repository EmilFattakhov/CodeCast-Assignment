class Api::V1::QuestionsController < Api::ApplicationController
    def index
        questions = Question.order(created_at: :desc)
        render(json: questions, each_serializer: QuestionCollectionSerializer)
      end

    def show
        question = Question.find(params[:id])
        render(json: question)
    end

    def create
      question=Question.new(params.require(:question).permit(:title, :body))
  
      if question.save
          render json:{id: question.id}
      else
          render(
              json: {errors: question.errors},
              status:422 #unprocessable entity HTTP Status code
          )
      end
    end

    def destroy
        question = Question.find_by_id(params[:id])
        if question&.destroy
          head :ok
        else
          head :bad_request
        end
      end
end
