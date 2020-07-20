class TrainersController < ApplicationController

    def index
        trainers = Trainer.all.map do |trainer|
            trainer = {:name => trainer.name, :id => trainer.id, :pokemons => trainer.pokemons}
        
        end
        render json: trainers
    end
    
end
