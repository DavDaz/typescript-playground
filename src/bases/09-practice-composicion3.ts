class Motor{
    encender(){
        console.log("Activando Motor")
    }
}

class SistemaDeNavegacion{
    activar(){
        console.log("Activando sistema de Navegacion")
    }
}

class Vehiculo{
    motor: Motor;
    sistemaDeNavegacion: SistemaDeNavegacion;
    
    constructor(motor: Motor, sistemaDeNavegacion: SistemaDeNavegacion){
        this.motor = motor
        this.sistemaDeNavegacion = sistemaDeNavegacion
    }

    encenderMotor(){
        this.motor.encender();
    }

    activarSistemaNavegacion(){
        this.sistemaDeNavegacion.activar();
    }

}

const motor: Motor = new Motor();
const sistemaNavegacion: SistemaDeNavegacion = new SistemaDeNavegacion();

export const vehiculo: Vehiculo = new Vehiculo(motor, sistemaNavegacion);

vehiculo.encenderMotor();
vehiculo.activarSistemaNavegacion();
