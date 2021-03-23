class ExamsController < ApplicationController
    def index
        #
    end

    def quiz
        # get questions
        questions = Question.all
        if questions
            render json: questions
        else
            render plain: "questions not found from exams controller"
        end
        # find questions related to topic
        # if found, render questions
        # else render exam doesn't have any questions
        # render plain: "quiz method called from topics controller"
    end

end
