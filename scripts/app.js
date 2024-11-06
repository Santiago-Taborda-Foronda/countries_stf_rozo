const makeCountry = (countriy) => {
    const container = document.createElement('div')
    container.classList.add('card-country')

    const img = document.createElement('img')
    img.src = countriy.flag
    img.alt = countriy.name

    const title = document.createElement('h2')
    title.textContent = countriy.name

    container.appendChild(img)
    container.appendChild(title)

    document.querySelector('main > section').appendChild(container)
}