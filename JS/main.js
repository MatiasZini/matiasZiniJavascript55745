alert("Viaje a Sudamérica!")

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

let millas

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
