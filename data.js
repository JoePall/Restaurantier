const data = {
    "Home": {
        title: `Home`,
        navType: "main",
        main: `<h1 class="has-text-centered pt-6">Welcome <b>Home</b></h1>`
    },
    "About": {
        title: `About Me`,
        navType: "main",
        main: `<div class="card mt-6 px-6 py-6"><p class="title is-3">I like</p><ul><li>Chile Relleno</li><li>Baja Fish Tacos</li><li>Fajitas</li></ul></div>`
    },
    "Contact": {
        title: `Contact`,
        navType: "main",
        main: `<div class="card mt-6 px-6 py-6"><p class="title is-3">You can reach me at <a href="mailto:josiahpowell@outlook.com">josiahpowell@outlook.com</a> or checkout my github at <a href="https://github.com/JoePall">https://github.com/JoePall</a></p></div>`
    },
    "Error": {
        title: "Oops",
        navType: "none",
        main: `<div class="card mt-6 px-6 py-6"><h1 class="text-danger">Issue... 404ish</h1></div>`
    }
};

module.exports = data;