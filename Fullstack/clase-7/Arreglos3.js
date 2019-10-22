
const calificaciones = [6, 6, 9, 8, 5]
let sumaExamenesReprobados = 0;

for (let index = 0; index < calificaciones.length; index++) {
    if (calificaciones[index] <= 6) {
        sumaExamenesReprobados += 1
    }

}
console.log(sumaExamenesReprobados)