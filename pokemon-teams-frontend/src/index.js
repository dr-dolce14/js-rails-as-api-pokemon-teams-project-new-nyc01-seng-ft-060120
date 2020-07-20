document.addEventListener("DOMContentLoaded", function() {


    const BASE_URL = "http://localhost:3000"
    const TRAINERS_URL = `${BASE_URL}/trainers`
    const POKEMONS_URL = `${BASE_URL}/pokemons`
    const mainTag = document.querySelector('main')
    
    function fetchTrainers() {
        fetch(TRAINERS_URL)
        .then(response => response.json())
        .then(results => {
            results.forEach(trainer => renderTrainer(trainer)) 
        })
    }
    
    function renderTrainer(trainer) {
        const trainerDiv = document.createElement('div')
        const pokemonList = document.createElement('ul')

        trainerDiv.className = "card"
        trainerDiv.dataset.id = trainer.id
        let p = document.createElement('p')
        p.innerText = trainer.name   
        let button = document.createElement('button')
        button.innerText = "Add Pokemon"
        button.dataset.trainerId = trainer.id
        trainerDiv.append(p)
        trainerDiv.append(button)
        mainTag.append(trainerDiv)
        trainerDiv.append(pokemonList)
    }

    function fetchPokemon() {
        pokemonArray = []
        fetch(POKEMONS_URL)
        .then(response => response.json())
        .then(results => {
            results.forEach(pokemon => pokemonArray.push(pokemon.trainer_id))
            console.log(pokemonArray)
        })
    }   

    fetchPokemon()


    const pokeTrainerDiv = document.getElementsByClassName("card")
    
    
    function createListItem(pokemon) {
        const listItem = document.createElement('li')
        const releaseButton = document.createElement('button')
        listItem.innerText = pokemon.nickname.concat("(", pokemon.species).concat(")" )
        listItem.className = pokemon.trainer_id
        releaseButton.className = "release"
        releaseButton.dataset.id = pokemon.id
        listItem.append(releaseButton)

        if (pokeTrainerDiv === pokeTrainerDiv.dataset) {
            pokeTrainerDiv.append(listItem)
        }
            // console.log(listItem)
    }

    
    // if trainer ID of a pokemon matches the trainer ID of the div

    fetchTrainers()
}) // end of DOMContendLoaded
