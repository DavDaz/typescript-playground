class Motor{
    encender(){
        console.log("Encendiendo Motor")
    }
}

class SistemaDeNavegacion{
    activar(){
        console.log("activando sistema de navegacion")
    }
}

class Vehiculo{
    motor: Motor;
    sistemaDeNavegacion: SistemaDeNavegacion;
    
    constructor(motor: Motor, sistemaDeNavegacion: SistemaDeNavegacion){
        this.motor = motor;
        this.sistemaDeNavegacion = sistemaDeNavegacion
    }

    encenderMotor(){
        this.motor.encender()
    }

    activarSistema(){
        this.sistemaDeNavegacion.activar()
    }
}

const motor: Motor = new Motor()
const sistemaDeNavegacion: SistemaDeNavegacion = new SistemaDeNavegacion()

export const vehiculo: Vehiculo = new Vehiculo(motor, sistemaDeNavegacion)

vehiculo.encenderMotor()
vehiculo.activarSistema()