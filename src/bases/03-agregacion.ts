// [A] <>-> [B]
// - **Definición simplificada**:
//     - La clase **A** no solo conoce a la clase **B**, sino que también **A** tiene una colección 
//     do lista de objetos de tipo **B**. Esto implica que **A** está formada por **B** en algún sentido. 
//     Sin embargo, **B** puede seguir existiendo sin **A**.
// - **Ejemplo**: Imagina una `Escuela` que tiene varios `Estudiantes`. 
//      La `Escuela` contiene una lista de `Estudiantes`, pero cada `Estudiante` puede existir sin la `Escuela`. 
//      Si la `Escuela` se cierra, los `Estudiantes` pueden ir a otra escuela o estar sin escuela.


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