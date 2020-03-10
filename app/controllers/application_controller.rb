class ApplicationController < ActionController::API
    def index
        topics = Topic.all
        @topics = topics
        if topics
            render json: topics #, include: [:name]
        else
            binding.pry
            render plain: "topics not found"
        end
        # render json: sightings, include: [:bird, :location]
    end
end
