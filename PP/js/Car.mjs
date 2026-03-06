export class Car {
    #chassi

    constructor(plate, brand, name, year){
        this.plate = plate; 
        this.brand = brand;
        this.name = name;
        this.year = year;
    }

    get getNome () {  
        return this.name;
    }

    get getAge(){
        return 2026 - this.year
    }
}

