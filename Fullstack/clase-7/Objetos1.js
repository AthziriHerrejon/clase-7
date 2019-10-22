
const alumnos = [{
    nombre:'Ana',
    calificaciones: [8, 5, 7, 10,10]
},{
    nombre:'Santiago',
calificaciones: [9,9,3,5,10]
},{
    nombre:'Tania',
    calificaciones: [10,10,7,4,6]
}]

console.log(alumnos.length)

for(let i =0; i < alumnos.lenght; i++){
    var AlumnoCalificaciones= 0;
    var PromedioAlumno= 0;
    console.log(alumnos[i].nombre)

    if(alumnos[i].calificaciones != null){ //se accede al valor de alumnos, a cada una de las listas de calificaciones , null se pone para acceder a la lista que si tenga valores
        console.log(alumnos[i].nombre)
    
    for(let x=0 ; x < alumnos[i].calificaciones.length ; x++){// ya se accede a los alumnos y al tamaño de sus calificaiones
        AlumnoCalificaciones = AlumnoCalificaciones + alumnos[i].calificaciones[x]
    }
    PromedioAlumno = AlumnoCalificaciones / alumnos[i].calificaciones.length

    if (PromedioAlumno < 6){
        console.log("Reprobado"+alumnos[i].nombre)
    }else{
    console.log("Aprobado"+alumnos[i].nombre)
    }
}

}

