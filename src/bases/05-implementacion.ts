// Implementacion
// [A] ---|> [B]
//implements: cumplimiento de contrato, no hereda implementación.
//extends: herencia, reutilización de código.

/**
 * La implementación de una interfaz nos permite
 * definir el contrato que debe cumplir una clase,
 * sin heredar la implementación de la interfaz.
 * 
 * La implementación de una interfaz no hereda
 * la implementación de la interfaz, por lo que
 * cada clase debe implementar los métodos y
 * propiedades definidas en la interfaz.
 */


// Definimos la interfaz
interface Vehiculo {
    mover(): void; // Método que las clases deben implementar
  }
  
  // Clase que implementa la interfaz Vehiculo
  class Coche implements Vehiculo {
    mover(): void {
      console.log("El coche está en movimiento");
    }
  }
  
  // Otra clase que también implementa la interfaz Vehiculo
  class Bicicleta implements Vehiculo {
    mover(): void {
      console.log("La bicicleta está en movimiento");
    }
  }
  
  // Usamos los objetos como Vehiculo
  let vehiculo1: Vehiculo = new Coche();
  let vehiculo2: Vehiculo = new Bicicleta();
  
  vehiculo1.mover(); // Salida: El coche está en movimiento
  vehiculo2.mover(); // Salida: La bicicleta está en movimiento
  
