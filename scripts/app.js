import { countries } from "../scripts/countries.js"
 

 
const makeCountry = (countriy) => {
    const container = document.createElement('div')
    container.classList.add('card-country')

    container.addEventListener('mouseenter', showInfo)

    const img = document.createElement('img')
    img.src = countriy.flag
    img.alt = countriy.name

    const title = document.createElement('h2')
    title.textContent = countriy.name

    container.appendChild(img)
    container.appendChild(title)

    document.querySelector('main > section').appendChild(container)

   
}

const renderCountries = () =>{
countries.forEach(country => makeCountry(country))
}


// children convierte el div en un arreglo 
const showInfo = (event) => {
    let currentCountry = (event.target.children[1].textContent)
    let foundCountry = countries.find(country => country.name === currentCountry)

    const country = document.querySelector('#demographics')
    country.children[0].textContent = foundCountry.name
    country.children[1].textContent = foundCountry.capital
    country.children[2].textContent = foundCountry.population
    // const infoCountry = document.getElementById('demographics')
    // console.log(foundCountry)
}

window.addEventListener('DOMContentLoaded', renderCountries())