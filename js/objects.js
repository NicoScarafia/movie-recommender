// CLASS

class Pelicula {

    constructor(name, year, director, genre, language, image, imdb, rate) {
        this.name = name,
        this.year = year,
        this.director = director,
        this.genre = genre,
        this.language = language,
        this.image = image,
        this.imdb = imdb,
        this.rate = rate
    }
}



// MOVIES


let bastardosSinGloria = new Pelicula('Inglourious Basterds', 2009, 'Quentin Tarantino', ['action'], 'inglés', 'assets/img/inglourious-basterds.jpg', 'https://www.imdb.com/title/tt0361748/', 8.3);

let threeBillboards = new Pelicula('Three Billboards Outside Ebbing, Missouri', 2017, 'Martin McDonagh', ['drama'], 'inglés', 'assets/img/three-billboards.jpg', 'https://www.imdb.com/title/tt5027774/', 8.1)

let exorcismEmily = new Pelicula('The Exorcism of Emily Rose', 2005, 'Scott Derrickson', ['terror'], 'inglés', 'assets/img/emily-rose.jpg', 'https://www.imdb.com/title/tt0404032/', 6.7);

let fantasticFox = new Pelicula('Fantastic Mr. Fox', 2009, 'Wes Anderson', ['comedy'], 'inglés', 'assets/img/fantastic-mrfox.jpg', 'https://www.imdb.com/title/tt0432283', 7.9);

let gladiador = new Pelicula('Gladiator', 2000, 'Ridley Scott', ['accion'], 'inglés', 'assets/img/gladiator.jpg', 'https://www.imdb.com/title/tt0172495', 8.5);

let bladeRunner = new Pelicula('Blade Runner', 1982, 'Ridley Scott', ['scifi'], 'inglés', 'assets/img/blade-runner.jpg', 'https://www.imdb.com/title/tt0083658', 8.1);

let theLobster = new Pelicula('The Lobster', 2015, 'Yorgos Lanthimos', ['drama'], 'inglés', 'assets/img/lobster.jpg', 'https://www.imdb.com/title/tt3464902', 7.2);

let arrival = new Pelicula('Arrival', 2016, 'Denis Villeneuve', ['scifi'], 'inglés', 'assets/img/arrival.jpg', 'https://www.imdb.com/title/tt2543164', 7.9);

let theWailing = new Pelicula('The Wailing', 2016, 'Na Hong-jin', ['terror'], 'coreano', 'assets/img/wailing.jpg', 'https://www.imdb.com/title/tt5215952', 7.5);

let odiseaGiles = new Pelicula('La Odisea de los Giles', 2019, 'Sebastián Borensztein', ['drama', 'comedy'], 'español', 'assets/img/odisea-giles.jpg', 'https://www.imdb.com/title/tt10384744', 7.2);

let dasLeben = new Pelicula('Das Leben der Anderen', 2006, 'Florian Henckel von Donnersmarck', ['drama'], 'alemán', 'assets/img/das-leben.jpg', 'https://www.imdb.com/title/tt0405094', 8.4);

let redHood = new Pelicula('Batman: Under the Red Hood', 2010, 'Brandon Vietti', ['heroes', 'animation'], 'inglés', 'assets/img/batman-under-redhood.jpg', 'https://www.imdb.com/title/tt1569923', 8.1);

let superbad = new Pelicula('Superbad', 2007, 'Greg Mottola', ['comedy'], 'inglés', 'assets/img/superbad.jpg', 'https://www.imdb.com/title/tt0829482', 7.6);

let monstersInc = new Pelicula('Monsters, Inc.', 2001, 'Pete Docter', ['children', 'animation'], 'ingles', 'assets/img/monsters-inc.jpg', 'https://www.imdb.com/title/tt0198781/', 8.1)

let ironMan = new Pelicula('Iron Man', 2008, 'Jon Favreau', ['heroes', 'action', 'scifi'], 'ingles', 'assets/img/iron-man.jpg', 'https://www.imdb.com/title/tt0371746/', 7.9)

let alien = new Pelicula('Alien', 1979, 'Ridley Scott', ['scifi', 'terror'], 'inglés', 'assets/img/alien.jpg', 'https://www.imdb.com/title/tt0078748/', 8.4)

let clockworkOrange = new Pelicula('A Clockwork Orange', 1971, 'Stanley Kubrick', ['drama', 'crime'], 'inglés', 'assets/img/clockwork-orange.jpg', 'https://www.imdb.com/title/tt0066921', 8.3)

let dialM = new Pelicula('Dial M for Murder', 1954, 'Alfred Hitchcock', ['drama', 'crime'], 'inglés', 'assets/img/dial-m.jpg', 'https://www.imdb.com/title/tt0046912', 8.2)

let ghostShell = new Pelicula('Ghost in the Shell', 1995, 'Mamoru Oshii', ['animation', 'scifi'], 'japonés', 'assets/img/ghost-shell.jpg', 'https://www.imdb.com/title/tt0113568', 8.0)

let goodfellas = new Pelicula('Goodfellas', 1990, 'Martin Scorsese', ['crime', 'drama'], 'inglés', 'assets/img/goodfellas.jpg', 'https://www.imdb.com/title/tt0099685', 8.7)

let heat = new Pelicula('Heat', 1995, 'Michael Mann', ['crimen', 'drama', 'action'], 'inglés', 'assets/img/heat.jpg', 'https://www.imdb.com/title/tt0113277', 8.2)

let reyLeon = new Pelicula ('The Lion King', 1994, 'Roger Allers, Rob Minkoff', ['animation', 'children'], 'inglés', 'assets/img/lion-king.jpg', 'https://www.imdb.com/title/tt0110357', 8.5)

let rosemarysBaby = new Pelicula ("Rosemary's Baby", 1968, 'Roman Polanski', ['drama', 'terror'], 'inglés', 'assets/img/rosemarys-baby.jpg', 'https://www.imdb.com/title/tt0063522', 8.0)

let seven = new Pelicula ('Seven', 1995, 'David Fincher', ['drama', 'crime'], 'inglés', 'assets/img/seven.jpg', 'https://www.imdb.com/title/tt0114369', 8.6)

let sunsetBlvd = new Pelicula('Sunset Blvd.', 1950, 'Billy Wilder', ['drama'], 'inglés', 'assets/img/sunset-blvd.jpg', 'https://www.imdb.com/title/tt0043014', 8.4)

let theBirds = new Pelicula('The Birds', 1963, 'Alfred Hitchcock', ['drama', 'terror'], 'inglés', 'assets/img/the-birds.jpg', 'https://www.imdb.com/title/tt0056869', 7.7)

let theTenant = new Pelicula ('The Tenant', 1976, 'Roman Polanski', ['drama', 'terror'], 'inglés', 'assets/img/the-tenant.jpg', 'https://www.imdb.com/title/tt0074811', 7.6)

let theWickerMan = new Pelicula ('The Wicker Man', 1973, 'Robin Hardy', ['crime', 'terror'], 'inglés', 'assets/img/wicker-man.jpg', 'https://www.imdb.com/title/tt0070917', 7.5)

let vertigo = new Pelicula ('Vertigo', 1958, 'Alfred Hitchcock', ['crime', 'drama'], 'inglés', 'assets/img/vertigo.jpg', 'https://www.imdb.com/title/tt0052357', 8.3)

let judasMessiah = new Pelicula ('Judas and the Black Messiah', 2021, 'Shaka King', ['drama', 'crime'], 'inglés', 'assets/img/judas-black-messiah.jpg', 'https://www.imdb.com/title/tt9784798', 7.5)

let split = new Pelicula ('Split', 2016, 'M. Night Shyamalan', ['crime', 'terror'], 'inglés', 'assets/img/split.jpg', 'https://www.imdb.com/title/tt4972582', 7.3)

let memoriesOfMurder = new Pelicula ('Memories of Murder', 2003, 'Bong Joon Ho', ['drama', 'crime'], 'coreano', 'assets/img/memories-of-murder.jpg', 'https://www.imdb.com/title/tt0353969', 8.1)

let europaReport = new Pelicula ('Europa Report', 2013, 'Sebastián Cordero', ['scifi', 'drama'], 'inglés', 'assets/img/europa-report.jpg', 'https://www.imdb.com/title/tt2051879', 6.4)

let frankenweenie = new Pelicula ('Frankenweenie', 2012, 'Tim Burton', ['animation', 'children'], 'inglés', 'assets/img/frankenweenie.jpg', 'https://www.imdb.com/title/tt1142977', 6.9)

let iceAge = new Pelicula ('Ice Age', 2006, 'Chris Wedge, Carlos Saldanha', ['animation', 'children'], 'inglés', 'assets/img/ice-age.jpg', 'https://www.imdb.com/title/tt0268380', 7.5)

let dictator = new Pelicula ('The Dictator', 2012, 'Larry Charles', ['comedy'], 'inglés', 'assets/img/dictator.jpg', 'https://www.imdb.com/title/tt1645170', 6.4)

let megamind = new Pelicula ('Megamind', 2010, 'Tom McGrath', ['animation', 'children'], 'inglés', 'assets/img/megamind.jpg', 'https://www.imdb.com/title/tt1001526', 7.3)

let toyStory2 = new Pelicula ('Toy Story 2', 1999, 'John Lasseter', ['animation', 'children'], 'inglés', 'assets/img/toy-story-2.jpg', 'https://www.imdb.com/title/tt0120363', 7.9)

let wallaceGromit = new Pelicula ('The Curse of the Were Rabbit', 2005, 'Steve Box, Nick Park', ['animation', 'children'], 'inglés', 'assets/img/wallace-gromit-vegetales.jpg', 'https://www.imdb.com/title/tt0312004', 7.4)

let theOthers = new Pelicula ('The Others', 2001, 'Alejandro Amenábar', ['terror', 'drama'], 'inglés', 'assets/img/the-others.jpg', 'https://www.imdb.com/title/tt0230600', 7.6)

let killingSacredDeer = new Pelicula ('The Killing of a Sacred Deer', 2017, 'Yorgos Lanthimos', ['terror', 'drama'], 'inglés', 'assets/img/killing-sacred-deer.jpg', 'https://www.imdb.com/title/tt5715874', 7.0)

let autopsyJaneDoe = new Pelicula ('The Autopsy of Jane Doe', 2016, 'André Øvredal', ['terror'], 'inglés', 'assets/img/autopsy-jane-doe.jpg', 'https://www.imdb.com/title/tt3289956', 6.8)

let skeletonKey = new Pelicula ('The Skeleton Key', 2005, 'Iain Softley', ['terror'], 'inglés', 'assets/img/skeleton-key.jpg', 'https://www.imdb.com/title/tt0397101', 6.5)

let bloodDiamond = new Pelicula ('Blood Diamond', 2006, 'Edward Zwick', ['drama'], 'inglés', 'assets/img/blood-diamond.jpg', 'https://www.imdb.com/title/tt0450259', 8.0 )

let misery = new Pelicula ('Misery', 1990, 'Rob Reiner', ['terror', 'drama'], 'inglés', 'assets/img/misery.jpg', 'https://www.imdb.com/title/tt0100157', 7.8)

let familiaFuturo = new Pelicula ('Meet the Robinsons', 2007, 'Stephen J. Anderson', ['animation', 'children'], 'inglés', 'assets/img/familia-futuro.jpg', 'https://www.imdb.com/title/tt0396555', 6.8)

let pulpFiction = new Pelicula ('Pulp Fiction', 1994, 'Quentin Tarantino', ['drama', 'action'], 'inglés', 'assets/img/pulp-fiction.jpg', 'https://www.imdb.com/title/tt0110912', 8.9)


// ARRAY

let arrayPeliculas = [
    bastardosSinGloria, threeBillboards, exorcismEmily, fantasticFox, gladiador, bladeRunner, theLobster, arrival, theWailing, odiseaGiles, dasLeben, redHood, superbad, monstersInc, ironMan, alien, clockworkOrange, dialM, ghostShell, goodfellas, heat, reyLeon, rosemarysBaby, seven, sunsetBlvd, theBirds, theTenant, theWickerMan, vertigo, judasMessiah, split, memoriesOfMurder, europaReport, frankenweenie, iceAge, dictator, megamind, toyStory2, wallaceGromit, theOthers, killingSacredDeer, autopsyJaneDoe, skeletonKey, bloodDiamond, misery, familiaFuturo, pulpFiction
];

function agregarPelicula(variablePelicula) {
    return arrayPeliculas.push(variablePelicula);
}
// agregarPelicula(monstersInc)


// Ordena el array de las películas por nombre
arrayPeliculas = arrayPeliculas.sort((a, b) => {
    if (a.name < b.name) { return -1 }
    else { return 1 }
})


let arrayAccion = arrayPeliculas.filter(e => { return e.genre.includes('action') });
let arrayDrama = arrayPeliculas.filter(e => { return e.genre.includes('drama') });
let arrayTerror = arrayPeliculas.filter(e => { return e.genre.includes('terror') });
let arrayComedia = arrayPeliculas.filter(e => { return e.genre.includes('comedy') });
let arraySciFi = arrayPeliculas.filter(e => { return e.genre.includes('scifi') });
let arrayHeroes = arrayPeliculas.filter(e => { return e.genre.includes('heroes') });
let arrayAnimacion = arrayPeliculas.filter(e => { return e.genre.includes('animation') })
let arrayCrimen = arrayPeliculas.filter(e => { return e.genre.includes('crime') })
let arrayInfantil = arrayPeliculas.filter(e => { return e.genre.includes('children') })

const arrayGeneros = [
    arrayAccion, arrayDrama, arrayTerror, arrayComedia, arraySciFi, arrayHeroes, arrayAnimacion, arrayCrimen
]
