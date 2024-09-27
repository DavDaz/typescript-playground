// necesito construir una asociacion profesor curso

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