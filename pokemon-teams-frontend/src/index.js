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
fetchTrainers()

function renderTrainer(trainer) {
    const trainerDiv = document.createElement('div')
    trainerDiv.className = "card"
    trainerDiv.dataset.id = trainer.id
    let p = document.createElement('p')
    p.innerText = trainer.name   
    let button = document.createElement('button')
    button.innerText = "Add Pokemon"
    button.dataset.trainer = trainer.id
    trainerDiv.append(p)
    trainerDiv.append(button)
    mainTag.append(trainerDiv)
    
    
// √ assign target element 'main' to a variable 
// √ create new div with the class of 'card' and data set id of the trainer
// √ set innerHTML to all the stuff that's required for trainer
// √ append div to main

}



}) // end of DOMContendLoaded
