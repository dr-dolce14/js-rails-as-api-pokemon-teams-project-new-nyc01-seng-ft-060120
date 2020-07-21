class PokemonsController < ApplicationController

    def index
        pokemons = Pokemon.all

        render json: pokemons
    end


    def create
        
        pokemon = Pokemon.create(pokemon_params)
        
        if pokemon_params[:nickname].nil?
            pokemon.nickname = Faker::Name.first_name
        end

        if pokemon_params[:species].nil?
            pokemon.species = Faker::Games::Pokemon.name
        end


        render json: pokemon
    end

    private

    def pokemon_params
        params.require(:pokemon).permit(:nickname, :species, :trainer_id)
    end

end
