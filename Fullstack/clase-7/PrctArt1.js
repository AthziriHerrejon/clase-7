const alumnos =[{
       nombre: 'Luis',
       calificaciones: [5,6,5,6]
       },{
           nombre: 'Pedro',
           calificaciones: [9,5,9,7]
       },
       {
           nombre: 'Juan',
           calificaciones: [7,8,6,7]
       },{
       nombre: 'Toño',
       calificaciones: [5,6,4,5]
       }
   ]
   var alumnoCalificaciones = 0;
   var promedioCalificaciones = 0;
   for(let i = 0; i < alumnos.length; i++){
       var alumnoCalificaciones = 0;
       var promedioCalificaciones = 0;
       if(alumnos[i].calificaciones != null ){
           for(let x =0; x < alumnos[i].calificaciones.length; x++){
               alumnoCalificaciones += alumnos[i].calificaciones[x]
           }
           promedioCalificaciones = alumnoCalificaciones / alumnos[i].calificaciones.length
           if(promedioCalificaciones < 6){
               console.log(alumnos[i].nombre +" esta reprobado, tiene un promedio de "+ promedioCalificaciones)
           }
       }
   }