import { ICars } from './ICars';

import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));



let x:number = 10
let y:string = 'hello from typescript'

function getX(a:string, b: boolean):number {
    return x
}

function getY():void {}

let cars:string[] = ['audi', 'bmw', '100', 'true']

type myCars = ICars

type ProcessStates = "open" | "closed";
let myState:ProcessStates = "open"


let cars2:myCars[] = [
    {
        mark: 'audi 1',
        getWindows() {
            return 4
        }
    },
    {
        mark: 150,
        car:{
            mark:'bmw',
            wheels: 4
        },
        getWindows() {
            return 4
        }
    },
]

console.log(cars2[0].mark, 'windows: ', cars2[1].getWindows())

console.log(y)

enum StatusCodes {
    OK = 200,
    BadRequest = 400,
    Unauthorized,
    PaymentRequired,
    Forbidden,
    NotFound,
  }

  enum GamePadInput {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT",
  }

 let myStatus:StatusCodes = StatusCodes.OK

 console.log('stauts: ', myStatus)
  