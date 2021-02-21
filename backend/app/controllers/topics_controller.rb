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
        # find questions related to topic
        # if found, render questions
        # else render topic doesn't have any questions
        render plain: "quiz method called from topics controller"
    end
end
