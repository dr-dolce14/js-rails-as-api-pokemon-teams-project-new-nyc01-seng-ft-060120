class TrainersController < ApplicationController

    def index
        trainers = Trainer.all
        #do we need to iterate over trainers and pull out each pokemon from here???
        render json: trainers
    end
    
end
