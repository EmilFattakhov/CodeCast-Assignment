# # This file should contain all the record creation needed to seed the database with its default values.
# # The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
# #
# # Examples:
# #
# #   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
# #   Character.create(name: 'Luke', movie: movies.first)

Question.delete_all
Answer.delete_all
Comment.delete_all

NUM_QUESTIONS = 10
NUM_ANSWERS = 5
NUM_COMMENTS = 5

NUM_QUESTIONS.times do
    created_at = Faker::Date.backward(days: 150)
    q = Question.create(
        title: Faker::Movie.title,
        body: Faker::Movie.quote,
        created_at: created_at,
        updated_at: created_at
    )

    if q.valid?
        q.answers = NUM_ANSWERS.times.map do
            a = Answer.new(
                body: Faker::GreekPhilosophers.quote
            )

            # if a.valid?
            #     a.comments = NUM_COMMENTS.times.map do
            #         Comment.new(
            #             comment: Faker::Movie.quote
            #         )
            #     end
            # end
        end
    end
end

question = Question.all
answer = Answer.all
# comment= Comment.all


puts Cowsay.say("Generated #{question.count} questions", :tux)
puts Cowsay.say("Generated #{answer.count} answers", :bunny)
# puts Cowsay.say("Generated #{comment.count} comments", :tux)
