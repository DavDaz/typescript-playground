class Estudiante{
    nombre: string
    
    constructor(nombre: string){
        this.nombre = nombre
    }
}

class Escuela{
    estudiante: Estudiante[] = [];

    agregarEstudiante(estudiante: Estudiante){
        this.estudiante.push(estudiante);

    }

    mostrarEstudiantes(){
        this.estudiante.forEach( estudiante => {
            console.log(`Estudiante ${estudiante.nombre}`);
        })
    }

}


const estudiante1 = new Estudiante('Manuel');
const estudiante2 = new Estudiante('PedroMiguel');

export const escuela = new Escuela();
escuela.agregarEstudiante(estudiante1);
escuela.agregarEstudiante(estudiante2);

escuela.mostrarEstudiantes();