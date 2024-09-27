class Motor{
    encender(){
        console.log("El Motor esta encendido")
    }
}

class Auto{
    arrancarMotor(){
        const motor = new Motor();
        motor.encender();
    }
}

export const miAuto = new Auto();

miAuto.arrancarMotor()