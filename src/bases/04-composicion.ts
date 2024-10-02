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
  