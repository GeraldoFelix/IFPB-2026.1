import { Car } from './Car.mjs'

class fabrica {

    constructor() {
        this.cars = []
    }

    addingcar (car) {
        this.cars.push(car)
    }

    removecar () {
        this.cars.pop()
    }

    listartodos () {
        // listar todos por ANO 
        this.cars.sort((a, b) => a.getAge - b.getAge);

        this.cars.forEach((cars) => {
            let nome = cars.getNome
            let age = cars.getAge
            console.log(`Ano ${age}: ${nome}`);
        });
    }
}


let FabricaAreial = new fabrica

let car1 = new Car(631000, "Volk", "Hb20", 2000)
let car2 = new Car(630000, "Chev", "Kaspita", 2020)
let car3 = new Car(632000, "Cherry", "Tiggo 5x", 2011)

FabricaAreial.addingcar(car1)
FabricaAreial.addingcar(car2)
FabricaAreial.addingcar(car3)

FabricaAreial.listartodos()