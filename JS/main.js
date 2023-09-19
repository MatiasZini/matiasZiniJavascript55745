// Primer proyecto
/* alert("Viaje a Sudamérica!")

const destinoColombia = "Colombia"
const destinoBrasil = "Brasil"
const destinoChile = "Chile"
const destinoPerú = "Perú"
const destinoUruguay = "Uruguay"

const distColombia = 4198
const distBrasil = 1463
const distChile = 910
const distPerú = 2046
const distUruguay = 367

let precioMilla = 23

let destinos = true

while (destinos) {
    destinoSeleccion = prompt("Destinos disponibles:\n 1.Colombia\n 2.Brasil\n 3.Chile\n 4.Perú\n 5.Uruguay")
    if (destinoSeleccion == 1) {
        alert("Usted eligió: " + destinoColombia)
        break
    }
    else if (destinoSeleccion == 2) {
        alert("Usted eligió: " + destinoBrasil)
        break
    }
    else if (destinoSeleccion == 3) {
        alert("Usted eligió: " + destinoChile)
        break
    }
    else if (destinoSeleccion == 4) {
        alert("Usted eligió: " + destinoPerú)
        break
    }
    else if (destinoSeleccion == 5) {
        alert("Usted eligió: " + destinoUruguay)
        break
    }
    else { alert("Ingrese una opción valida!") }

}


while (true) {
    let cantidadPasajes = prompt("Cuantos pasajes desea? (Max: 3)")
    if (cantidadPasajes <= 3) {
        alert("Usted solicitó: " + cantidadPasajes + " pasajes.")
        break
    } else {
        alert("Ingrese cantidad de pasajes valido!")
    }
}
 */

alert("Viaje a Sudamérica!")

let precioMilla = 23

const calcularPrecio = (millas, precioMilla) => {
    return millas * precioMilla
}

const elegirDestino = () => { 
const destinos = [
    {pais: "Colombia" , millas: 4198},
    {pais: "Brasil" , millas: 1463},
    {pais: "Chile", millas: 910},
    {pais: "Perú", millas: 2046},
    {pais: "Uruguay" , millas: 367},
];

const paises = destinos.map((destino, nro) => `${nro + 1}- ${destino.pais}`).join('\n');

while(true) {
    const eleccion = parseInt(prompt(`Elige tu destino!\nDestinos disponibles:\n${paises}`));
    if (eleccion >= 1 && eleccion <= destinos.length){
        const destinoElegido = destinos[eleccion - 1];
        alert(`Elegiste viajar a ${destinoElegido.pais}!`)
        break
    } else {
        alert("Selecciona una opción valida!")
    }
    
    const precioTotal = calcularPrecio(destinoElegido.millas, precioMilla)
    
    alert(`Tu vuelo será a ${destinoElegido.pais} por un valor de $${calcularPrecio}`)
}
}
elegirDestino()



  