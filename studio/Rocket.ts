import { Cargo } from './Cargo';
import { Astronaut } from './Astronaut';
import { Payload } from './Payload';

export class Rocket{
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];

    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number{
        let total: number = 0;
        for(let i = 0; i < items.length; ++i){
            total += items[i].massKg;
        }
        return total;
    }

    currentMassKg(): number{
        let totalMass: number = 0;
        let astronautMass: number = 0;
        totalMass += this.sumMass(this.cargoItems);
        for(let i = 0; i < this.astronauts.length; ++i){
            astronautMass += this.astronauts[i].massKg;
        }
        totalMass += astronautMass;
        return totalMass;
    }

    canAdd(item: Payload): boolean{
        if(this.currentMassKg() + item.massKg <= this.totalCapacityKg){
            return true;
        }
        else{
            return false;
        }
    }

    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo) === true){
            this.cargoItems.push(cargo);
            return true;
        }
        else{
            return false;
        }
    }

    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut) === true){
            this.astronauts.push(astronaut);
            return true;
        }
        else{
            return false;
        }
    }
}