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
end
