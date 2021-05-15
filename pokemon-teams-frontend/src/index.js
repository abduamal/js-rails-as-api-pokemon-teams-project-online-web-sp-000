const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

document.addEventListener('DOMContentLoaded', () => {
  loadTrainers
})

const main = () =>  document.querySelector('main')

const loadTrainers = () => {
  fetch('http://localhost:3000/trainers')
  .then(response => response.json())
  .then(json => console.log('Aight Shawty'))
}
