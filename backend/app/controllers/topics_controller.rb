class TopicsController < ApplicationController
    def index
        topics = Topic.all
        if topics
            render json: topics #, include: [:name]
        else
            render plain: "topics not found"
        end
        # render json: sightings, include: [:bird, :location]
    end

    def quiz
        # get questions
        questions_2 = Question.all
        if questions_2
            render json: questions_2
        else
            render plain: "questions not found"
        end
        # find questions related to topic
        # if found, render questions
        # else render topic doesn't have any questions
        # render plain: "quiz method called from topics controller"
    end
end
