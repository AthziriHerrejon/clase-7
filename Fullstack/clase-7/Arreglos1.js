
const calificaciones= [10, 8, 5]
let SumaCalificaciones= 0
for (let i= 0; i < calificaciones.lenght; i++) {
    SumaCalificaciones += calificaciones[i]  
}
const promedio= SumaCalificaciones/calificaciones.lenght

if (promedio >= 8) {
    console.log ("Conseguiste Una Beca" +promedio )
} else {
    console.log ("Sera El Año Proximo" + promedio)
}