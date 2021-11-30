import { ICars } from './ICars'

let x:number = 10
let y:string = 'hello from typescript'

function getX(a:string, b: boolean):number {
    return x
}

function getY():void {}

let cars:string[] = ['audi', 'bmw', '100', 'true']

let cars2:ICars = {
    mark: 'audi',
    car:{
        mark:'bmw',
        wheels: 4
    }
}

console.log(cars2.mark)



console.log(y)