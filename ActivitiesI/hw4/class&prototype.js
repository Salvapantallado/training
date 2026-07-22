function Perro(nombre, raza) {
    this.nombre = nombre
    this.raza = raza
}

function Anime(nombre, estilo) {
    this.nombre = nombre
    this.estilo = estilo
}


Perro.prototype.saludar = function() {
    return 'Guau guau, me llamo ' + this.nombre + ' y mi raza es ' + this.raza
}

Anime.prototype.saludar = function() {
    return 'uwu, me llamo ' + this.nombre + ' y mi estilo es ' + this.estilo
}

const perrito = new Perro('manchita', 'ovejero');
const animecito = new Anime('huntexhunter', 'dibujado');

console.log('this is perrito!! ',perrito.saludar())

console.log('this is anime!! ',animecito.saludar())
