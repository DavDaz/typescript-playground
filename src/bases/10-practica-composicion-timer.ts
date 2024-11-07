class Motor{
    encender(){
        console.log("Encender motor")
    }
}

class SistemaDeNavegacion{
    activar(){
        console.log("Activar sistema de encendido")
    }
}

class Vehiculo{
    motor: Motor;
    sistemaNavegacion: SistemaDeNavegacion;

    constructor(){
        
    }
}