// definir una clse Motor, que devuelve un void pero con consolelog Motor encendido metodo encender
// definir la clase sistenaDeNavegacion que devuelve un void navegacio activada metodo activar
// la clase vehiculo utilizara composicion en ves de herencia debo poder utilizar el motor y el sistema de navegacion
// con sus dos metodos de encender motor y activar sistema de navegacion

// luego debo crear los objetos y utilizarlos

class Motor{
    constructor(){

    }
    encender(): void {
        console.log("Motor encendido");
    }
}

class SistemaDeNavegacion{
    activar(): void {
        console.log("Navegacion Activada");
    }
}

class Vehiculo{
    motor: Motor
    sistemaDeNavegacion: SistemaDeNavegacion

    constructor(motor: Motor, sistemaDeNavegacion: SistemaDeNavegacion){
        this.motor = motor;
        this.sistemaDeNavegacion = sistemaDeNavegacion
    }

    encenderMotor(){
        this.motor.encender()
    }

    activarSistemaDeNavegacion(){
        this.sistemaDeNavegacion.activar()
    }
}

const motor: Motor = new Motor()
const navegacion: SistemaDeNavegacion = new SistemaDeNavegacion()

export const vehiculo: Vehiculo = new Vehiculo(motor, navegacion);

vehiculo.encenderMotor()
vehiculo.activarSistemaDeNavegacion()
