console.log("hello world")

let message = document.querySelector("aside")

function addMovie(event) {
    event.preventDefault()
    console.log("test")
    let inputField = document.querySelector("input").value
    let movie = document.createElement("li")

    let movieTitle = document.createElement("span")

    console.log(movieTitle)

    movieTitle.textContent = inputField

    movie.addEventListener('click', crossOffMovie)

    console.log(movieTitle)

    movie.appendChild(movieTitle)

    let deleteBtn = document.createElement('button')

    deleteBtn.textContent = "X"

    deleteBtn.id = "delete"

    deleteBtn.addEventListener('click', deleteMovie)

    movie.appendChild(deleteBtn)

    document.querySelector("ul").appendChild(movie)

    document.querySelector('input').value = ""
}

function deleteMovie(event) {
    event.target.parentNode.remove()
    message.textContent = "Movie Deleted!"
}

document.querySelector("form").addEventListener('submit', addMovie)

function crossOffMovie(event) {
    event.target.classList.toggle("checked")
    if (event.target.classList.contains('checked') === true) {
        message.textContent = "Movie Watched!"
    } else {
        message.textContent = "Movie Added Back!"
    }
}