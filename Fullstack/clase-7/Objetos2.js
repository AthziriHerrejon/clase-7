
const alumnos = [{
    nombre: "Joel",
    presente: true
}, {
    nombre: "Santiago",
    presente: false
}]

for (let index = 0; index < alumnos.length; index++) {
    if (!alumnos[index].presente) {
        console.log(alumnos[index].nombre)
    }
}