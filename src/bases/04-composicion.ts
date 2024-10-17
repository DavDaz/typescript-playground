// [A] </>-> [B]
// - **Definición**:
//     - La clase **A** conoce al objeto **B**, lo contiene y gestiona su ciclo de vida. 
//        Esto significa que **A** es responsable de crear y destruir **B**. 
//        Si **A** se destruye, **B** también se destruye.
// - **Ejemplo**:
//     - Piensa en una clase `Casa` (A) que tiene un objeto `Habitación` (B). 
//        La `Casa` contiene `Habitación`, y si la `Casa` se vende o se destruye, 
//        también se destruyen las `Habitaciones`. La `Casa` es responsable de la existencia de las `Habitaciones`.


class Direccion {
    calle: string;
    ciudad: string;
  
    constructor(calle: string, ciudad: string) {
      this.calle = calle;
      this.ciudad = ciudad;
    }
  }
  
  class Persona {
    nombre: string;
    direccion: Direccion; // Composición
  
    constructor(nombre: string, calle: string, ciudad: string) {
      this.nombre = nombre;
      this.direccion = new Direccion(calle, ciudad);
    }
  
    mostrarDireccion() {
      console.log(`${this.nombre} vive en ${this.direccion.calle}, ${this.direccion.ciudad}`);
    }
  }
  
  const persona = new Persona("Luis", "Calle Falsa 123", "Madrid");
  persona.mostrarDireccion(); // Salida: Luis vive en Calle Falsa 123, Madrid
  