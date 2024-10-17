// [A] ---> [B]
// **Definición**:
//     - La clase **A** puede verse afectada por cambios en la clase **B**. 
//     Esto significa que si algo en **B** cambia 
//     (por ejemplo, si cambia su comportamiento o estructura), 
//     la clase **A** podría necesitar ajustarse o dejar de funcionar correctamente.

// - **Ejemplo**:
//     - Supongamos que tienes una clase `Motor` (B) que tiene un método para encenderse. 
//     Si cambias la forma en que `Motor` se enciende, la clase `Coche` (A) que utiliza `Motor` 
//     para arrancar podría necesitar cambios también para adaptarse a la nueva forma de encenderlo.

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