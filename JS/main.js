const destinos = [
    {id:1, pais: "Colombia", millas: 4198, imagen: "../recursos/imagen_colombia.jpg", desc: "Colombia es un país que cautiva a los viajeros con su belleza natural, playas de ensueño, cultura vibrante y una oferta gastronómica única, convirtiéndolo en un emocionante destino turístico." },
    {id:2, pais: "Brasil", millas: 1463, imagen: "../recursos/imagen_brasil.jpg", desc: "Brasil es un destino turístico icónico conocido por sus playas deslumbrantes, selvas tropicales exuberantes, vibrante cultura y su apasionada escena de carnaval. Es un país que ofrece una amplia gama de experiencias emocionantes para los visitantes de todo el mundo." },
    {id:3, pais: "Chile", millas: 910, imagen: "../recursos/imagen_chile.jpg", desc: "Chile ofrece experiencias únicas en un solo destino, desde el Desierto de Atacama hasta la Patagonia. Su cultura diversa y herencia colonial se reflejan en la música, el arte y la gastronomía. Además, es conocido por sus vinos de alta calidad, atrayendo a amantes del enoturismo." },
    {id:4, pais: "Perú", millas: 2046, imagen: "../recursos/imagen_peru.webp", desc: "Perú es un país con una rica herencia histórica y cultural, destacado por sus ruinas incas como Machu Picchu y su deliciosa cocina, incluyendo el ceviche. Con paisajes diversos que van desde la costa del Pacífico hasta los Andes y la selva amazónica, Perú atrae a los amantes de la aventura y la naturaleza. Su hospitalidad y variadas experiencias lo convierten en un destino único." },
    {id:5, pais: "Uruguay", millas: 367, imagen: "../recursos/imagen_uruguay.webp", desc: "Uruguay es un país turístico encantador en América del Sur. Ofrece playas doradas en la costa atlántica, ciudades históricas como Colonia del Sacramento, y una vibrante escena cultural en Montevideo. Con su hospitalidad característica y una atmósfera relajada, Uruguay es un destino ideal para los amantes de la playa, la buena comida y la tranquilidad." },
];

const guardarDestinosLS = (destinos) => {
    localStorage.setItem("Destinos: ", JSON.stringify(destinos));
}

const cargarDestinosLS = () => {
    return JSON.parse(localStorage.getItem("Destinos: "));
}

guardarDestinosLS(destinos);

const renderDestinos = () => {
    const destinos = cargarDestinosLS();
    let contenidoHTML = "";

    destinos.forEach(destino => {
        contenidoHTML += ` <div class="container p-3"><div class="row g-2 border border-warning-subtle border-4 rounded position-relative">
    <div class="col-md-6 mb-md-0 p-md-4">
    <img src="${destino.imagen}" class="w-75" alt="..."></div>
    <div class="col-md-6 p-4 ps-md-0">
    <h5 class="mt-0">${destino.pais}</h5>
    <p>${destino.desc}</p>
    <a href="../pages/destino.html"  class="btn btn-info">QUIERO IR ></a>
    </div></div></div>`
    })
    document.getElementById("contenido").innerHTML = contenidoHTML;
}

const buscarDestino = (id) => {
    const productos = cargarDestinosLS();
    let producto = productos.find(item => item.id === id);

    return producto;
}
const destinoElegido = () => {
    const idDestino = cargarDestinosLS;
    const destino = buscarDestino(idDestino)
    document.getElementById("nombrePais").innerHTML = destino.nombre;
}

renderDestinos();
destinoElegido();

