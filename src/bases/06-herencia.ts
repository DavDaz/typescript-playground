// Herencia
// [A] -|> [B]
//extends: herencia, reutilización de código.
//implements: cumplimiento de contrato, no hereda implementación.

/**
 * La herencia nos permite reutilizar código de una clase en otra.
 * La clase hija hereda los métodos y propiedades de la clase padre.
 * Si se modifica un método o propiedad en la clase padre, se verán reflejados
 * en la clase hija.
 */

class Animal{
    hacerSonido():void{
        console.log("Hago un sonido");
    }
}

class Perro extends Animal{
    hacerSonido():void{
        console.log("Hago un ladrar");
    }
}

export const perro = new Perro();
perro.hacerSonido();

