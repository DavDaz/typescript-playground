// [A] -> [B]
// - **Definición simplificada**:
// - La clase **A** tiene una relación con la clase **B**, 
// lo que significa que **A** sabe de la existencia de **B**. 
// Por ejemplo, **A** puede usar a **B**, pero **B** puede existir sin **A**.
// - **Ejemplo**: Piensa en un `Profesor` y un `Curso`. Un `Profesor` puede enseñar un `Curso`, 
// pero el `Curso` no necesita al `Profesor` para existir; puede tener otros profesores.

class Profesor{
    name: string;

    constructor(name: string){
        this.name = name
    }
}

class Curso{
    profesor: Profesor; // asociacion
    constructor(profesor: Profesor){
        this.profesor = profesor
    }

    mostrarPorfe(){
        console.log(`El profesor de esta curso es ${this.profesor.name}`)
    }
}

const profesor1 = new Profesor("Mario");
export const curso = new Curso(profesor1);

curso.mostrarPorfe(); // Salida: El profesor del curso es: Carlos