interface Employee{
    doWork(): void
}

class Designer implements Employee{
    doWork(): void {
        console.log("Disenando...");
    }
}

class Programmer implements Employee {
    doWork(): void {
        console.log("Programando...");
    }
}

class Artist implements Employee {
    doWork(): void {
        console.log("Artistiando...");
    }
}

class Tester implements Employee {
    doWork(): void {
        console.log("Testeando...");
    }
}

abstract class Company{
    abstract getEmployees(): Employee[];

    createSoftware(): void{
        const employees = this.getEmployees();
        employees.forEach( employees => employees.doWork());
    }
}

class GameDevCompany extends Company{
    getEmployees(): Employee[] {
        return [new Designer(), new Artist()]
    }
}

class OutsourcingCompany extends Company{
    getEmployees(): Employee[] {
        return [new Programmer(), new Tester()]
    }
}

export const gameDevCompany = new GameDevCompany();
const outSourcingCompany = new OutsourcingCompany();

gameDevCompany.createSoftware();
outSourcingCompany.createSoftware();