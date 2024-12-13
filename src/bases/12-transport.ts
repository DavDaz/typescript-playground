// Interface para Engine
interface Engine {
    move(): void;
  }
  
  // Implementaciones concretas de Engine
  class CombustionEngine implements Engine {
    move(): void {
      console.log("Moving with a combustion engine...");
    }
  }
  
  class ElectricEngine implements Engine {
    move(): void {
      console.log("Moving with an electric engine...");
    }
  }
  
  // Interface para Driver
  interface Driver {
    navigate(destination: string): void;
  }
  
  // Implementaciones concretas de Driver
  class Robot implements Driver {
    navigate(destination: string): void {
      console.log(`Robot navigating to ${destination}...`);
    }
  }
  
  class Human implements Driver {
    navigate(destination: string): void {
      console.log(`Human driving to ${destination}...`);
    }
  }
  
  // Clase principal Transport
  class Transport {
    private engine: Engine; // Composición: Transport administra y crea su propio Engine
    private driver: Driver; // Agregación: Transport recibe un Driver ya existente
  
    constructor(driver: Driver, engineType: "combustion" | "electric") {
      this.driver = driver;
  
      // Inicializa internamente el motor (Composición)
      if (engineType === "combustion") {
        this.engine = new CombustionEngine();
      } else if (engineType === "electric") {
        this.engine = new ElectricEngine();
      } else {
        throw new Error("Invalid engine type");
      }
    }
  
    deliver(destination: string, cargo: string): void {
      console.log(`Starting delivery of ${cargo} to ${destination}...`);
      this.driver.navigate(destination); // Usa el `Driver` proporcionado
      this.engine.move(); // Usa el motor que pertenece exclusivamente al transporte
      console.log(`Delivery of ${cargo} to ${destination} completed!`);
    }
  }
  
  // Ejemplo de uso
  export const robotDriver = new Robot(); // Un Driver puede ser compartido entre transportes
  const humanDriver = new Human(); // Otro Driver independiente
  
  console.log("Transport 1:");
  const transport1 = new Transport(humanDriver, "combustion"); // Composición con CombustionEngine
  transport1.deliver("City Center", "Furniture");
  
  console.log("\nTransport 2:");
  const transport2 = new Transport(robotDriver, "electric"); // Composición con ElectricEngine
  transport2.deliver("Warehouse", "Electronics");
  
  console.log("\nTransport 3:");
  const transport3 = new Transport(humanDriver, "electric"); // Driver compartido, pero engine único
  transport3.deliver("Airport", "Documents");
  