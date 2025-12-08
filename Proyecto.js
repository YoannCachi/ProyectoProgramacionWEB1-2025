console.log("App cargada :)");

// Buscador
const buscador = document.querySelector(".buscador input");
const libros = document.querySelectorAll(".libro, .libro-destacado");

// Array con toda la info de los libros
const librosData = [
    {
        id: 1,
        titulo: "Cien Años de Soledad",
        autor: "Gabriel García Márquez",
        anio: 1967,
        paginas: 417,
        idioma: "Español",
        categoria: "Clásicos",
        generos: ["Ficción", "Realismo mágico"],
        descripcion: "La novela narra la historia de la familia Buendía a lo largo de siete generaciones en el pueblo ficticio de Macondo.",
        img: "IMG/CIEN AÑOS.JPG"
    },
    {
        id: 2,
        titulo: "El Principito",
        autor: "Antoine de Saint-Exupéry",
        anio: 1943,
        paginas: 96,
        idioma: "Francés",
        categoria: "Ficción",
        generos: ["Fábula", "Aventura"],
        descripcion: "Un piloto se encuentra con un pequeño príncipe que viaja desde un asteroide a la Tierra, descubriendo lecciones sobre la vida y la amistad.",
        img: "IMG/Principito.jpg"
    },
    {
        id: 3,
        titulo: "1984",
        autor: "George Orwell",
        anio: 1949,
        paginas: 328,
        idioma: "Inglés",
        categoria: "Ciencia ficción",
        generos: ["Distopía", "Política"],
        descripcion: "En un mundo totalitario, Winston Smith lucha contra la opresión del Partido y su líder, el Gran Hermano.",
        img: "IMG/1894.jpg"
    },
    {
        id: 4,
        titulo: "Don Quijote de la Mancha",
        autor: "Miguel de Cervantes",
        anio: 1605,
        paginas: 863,
        idioma: "Español",
        categoria: "Clásicos",
        generos: ["Aventura", "Ficción"],
        descripcion: "Las aventuras de un caballero loco que cree revivir la caballería y su fiel escudero, Sancho Panza.",
        img: "IMG/don quijote.jpg"
    },
    {
        id: 5,
        titulo: "Harry Potter y la Piedra Filosofal",
        autor: "J.K. Rowling",
        anio: 1997,
        paginas: 309,
        idioma: "Inglés",
        categoria: "Ficción",
        generos: ["Aventura", "Fantasía"],
        descripcion: "Harry descubre que es un mago y asiste al Colegio Hogwarts de Magia y Hechicería, viviendo increíbles aventuras.",
        img: "IMG/harry poter.jpg"
    },
    {
        id: 6,
        titulo: "Orgullo y Prejuicio",
        autor: "Jane Austen",
        anio: 1813,
        paginas: 279,
        idioma: "Inglés",
        categoria: "Romance",
        generos: ["Romance", "Sociedad"],
        descripcion: "La historia de Elizabeth Bennet y su relación con el orgulloso Sr. Darcy en la Inglaterra del siglo XIX.",
        img: "IMG/orgullo y perjucio.jpg"
    },
    {
        id: 7,
        titulo: "Crónica de una Muerte Anunciada",
        autor: "Gabriel García Márquez",
        anio: 1981,
        paginas: 120,
        idioma: "Español",
        categoria: "Clásicos",
        generos: ["Ficción", "Misterio"],
        descripcion: "La historia de un asesinato anunciado desde el principio y cómo los habitantes del pueblo reaccionan ante ello.",
        img: "IMG/cronica de la muerte.jpg"
    },
    {
        id: 8,
        titulo: "El Código Da Vinci",
        autor: "Dan Brown",
        anio: 2003,
        paginas: 489,
        idioma: "Inglés",
        categoria: "Ficción",
        generos: ["Misterio", "Thriller"],
        descripcion: "El simbólogo Robert Langdon se ve envuelto en un asesinato y descubre secretos ocultos relacionados con el Santo Grial.",
        img: "IMG/codigo vinci.jpg"
    },
    {
        id: 9,
        titulo: "Los Juegos del Hambre",
        autor: "Suzanne Collins",
        anio: 2008,
        paginas: 374,
        idioma: "Inglés",
        categoria: "Ciencia ficción",
        generos: ["Distopía", "Aventura"],
        descripcion: "Katniss Everdeen lucha por sobrevivir en un reality show mortal en una sociedad distópica.",
        img: "IMG/el juego del hambre.jpg"
    },
    {
        id: 10,
        titulo: "El Señor de los Anillos",
        autor: "J.R.R. Tolkien",
        anio: 1954,
        paginas: 1178,
        idioma: "Inglés",
        categoria: "Fantasía",
        generos: ["Fantasía", "Aventura"],
        descripcion: "Frodo Bolsón emprende un viaje épico para destruir el Anillo Único y salvar la Tierra Media.",
        img: "IMG/el señor de los anillos.jpg"
    },
    {
        id: 11,
        titulo: "Crimen y Castigo",
        autor: "Fiódor Dostoyevski",
        anio: 1866,
        paginas: 430,
        idioma: "Ruso",
        categoria: "Clásicos",
        generos: ["Filosofía", "Psicológico"],
        descripcion: "Raskólnikov comete un asesinato y debe enfrentarse a la culpa, el castigo y la redención en San Petersburgo.",
        img: "IMG/crimen y castigo.jpg"
    },
    {
        id: 12,
        titulo: "La Casa de los Espíritus",
        autor: "Isabel Allende",
        anio: 1982,
        paginas: 433,
        idioma: "Español",
        categoria: "Ficción",
        generos: ["Realismo mágico", "Familia"],
        descripcion: "La saga de la familia Trueba a través de varias generaciones, mezclando lo real y lo sobrenatural.",
        img: "IMG/casa de los espiritus.jpg"
    }
];

// BUSCADOR
if (buscador) {
    buscador.addEventListener("input", (e) => {
        const texto = e.target.value.toLowerCase().trim();

        libros.forEach(libro => {
            const titulo = libro.querySelector("h4").textContent.toLowerCase();
            const autor = libro.querySelector("p").textContent.toLowerCase();

            if (titulo.includes(texto) || autor.includes(texto)) {
                libro.style.display = "block";
            } else {
                libro.style.display = "none";
            }
        });
    });
}

// MODAL
libros.forEach(libro => {
    libro.addEventListener("click", () => {
        const id = parseInt(libro.dataset.id);
        const info = librosData.find(l => l.id === id);

        if(info){
            document.getElementById("modalImagen").src = info.img;
            document.getElementById("modalTitulo").textContent = info.titulo;
            document.getElementById("modalAutor").textContent = info.autor;
            document.getElementById("modalAnio").textContent = info.anio;
            document.getElementById("modalPaginas").textContent = info.paginas;
            document.getElementById("modalIdioma").textContent = info.idioma;
            document.getElementById("modalCategoria").textContent = info.categoria;
            document.getElementById("modalCategoria2").textContent = info.categoria;
            document.getElementById("modalDescripcion").textContent = info.descripcion;

            const contGeneros = document.getElementById("modalGeneros");
            contGeneros.innerHTML = "";
            info.generos.forEach(g => {
                const span = document.createElement("span");
                span.textContent = g;
                contGeneros.appendChild(span);
            });

            document.getElementById("modalLibro").style.display = "flex";
        }
    });
});

// CERRAR MODAL
document.getElementById("cerrarModal").onclick = () => {
    document.getElementById("modalLibro").style.display = "none";
};

window.onclick = e => {
    const modal = document.getElementById("modalLibro");
    if (e.target === modal) modal.style.display = "none";
};

// MENÚ HAMBURGUESA
const hamburger = document.getElementById("hamburger");
const menuMobile = document.getElementById("menuMobile");

hamburger.addEventListener("click", () => {
    menuMobile.classList.toggle("show");
});
