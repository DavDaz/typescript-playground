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
  