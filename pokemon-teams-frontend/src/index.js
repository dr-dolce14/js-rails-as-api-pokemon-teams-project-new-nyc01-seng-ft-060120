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
        let pokemonsArray = trainer.pokemons
            pokemonsArray.forEach(function(pokemon) {
                // console.log(pokemon.nickname)
            const listItem = document.createElement('li')
            const releaseButton = document.createElement('button')
            listItem.innerText = pokemon.nickname.concat("(", pokemon.species).concat(")" )
            listItem.className = pokemon.trainer_id
            releaseButton.className = "release"
            releaseButton.dataset.id = pokemon.id
            listItem.append(releaseButton)
            pokemonList.append(listItem)
            })

       
    }

    const clickHandler = () => {
        document.addEventListener("click", function(e){
            const body = {
                
            }
            if (e.target.innerText === "Add Pokemon"){
                fetch(POKEMONS_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                    },
                    body: JSON.stringify({
                        trainer_id: e.target.dataset.trainerId
                    })
                })
                .then(res => res.json())
                .then(pokemon => {
                    // console.log(pokemon)
                })
               
            }
            
            
        })
    }



  


    clickHandler()
    fetchTrainers()
}) // end of DOMContendLoaded
