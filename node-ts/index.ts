import { ICars } from './ICars';

import chalk from 'chalk';

console.log(chalk.blue('Hello world!'));
const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// Nest styles of the same type even (color, underline, background)
log(chalk.green(
	'I am a green line ' +
	chalk.blue.underline.bold('with a blue substring') +
	' that becomes green again!'
));



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
  