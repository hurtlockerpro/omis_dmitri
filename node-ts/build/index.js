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
log(chalk.green('I am a green line ' +
    chalk.blue.underline.bold('with a blue substring') +
    ' that becomes green again!'));
let x = 10;
let y = 'hello from typescript';
function getX(a, b) {
    return x;
}
function getY() { }
let cars = ['audi', 'bmw', '100', 'true'];
let myState = "open";
let cars2 = [
    {
        mark: 'audi 1',
        getWindows() {
            return 4;
        }
    },
    {
        mark: 150,
        car: {
            mark: 'bmw',
            wheels: 4
        },
        getWindows() {
            return 4;
        }
    },
];
console.log(cars2[0].mark, 'windows: ', cars2[1].getWindows());
console.log(y);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["OK"] = 200] = "OK";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
    StatusCodes[StatusCodes["Unauthorized"] = 401] = "Unauthorized";
    StatusCodes[StatusCodes["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodes[StatusCodes["Forbidden"] = 403] = "Forbidden";
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
})(StatusCodes || (StatusCodes = {}));
var GamePadInput;
(function (GamePadInput) {
    GamePadInput["Up"] = "UP";
    GamePadInput["Down"] = "DOWN";
    GamePadInput["Left"] = "LEFT";
    GamePadInput["Right"] = "RIGHT";
})(GamePadInput || (GamePadInput = {}));
let myStatus = StatusCodes.OK;
console.log('stauts: ', myStatus);
