
var m = 10
var m = 1000

let x = 10
//let x = 'zdfbd'
// 
// number
// string 
// undefined
let y

// NaN -> text
// null
// boolean
// object

if (x > 10){
    // true
} else if (y > 10){
    // else if -> true
} else {
    // false
}

switch (x) {
    case 5:
        // todo 1
        break;
    case 10:
        // todo 2
        break;
    default:
        // todo
        break;
}

let arr = ['audi', 'bmw', 'citoren', true, undefined, 10]
        // index        true/false          increment/decrement
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    console.log("index = ", index, " value = ",  element)
}

// foreach
//arr.forEach(function (item123, index123, cars) {
arr.forEach(function (item123) {
    //console.log("index = ", index123, " value = ",  item123, cars)
    console.log("value = ",  item123)
}) // callback function

arr.forEach((item123, index123, cars) => {
    //console.log("index = ", index123, " value = ",  item123, cars)
    console.log("value = ",  item123)
}) // callback function

// object
// json 
let cars = {
    car1: 'audi', // [ 0 => car1, 1 => audi]
    car2: 'bmw',
    car3: {
        car1: 'citroen'
    },
    car4: {
        car41: 'citroen41'
    },
    fn1: function(){
        return 'this is car: ' + this.car2
    },
    fn2: () => {
        return this 
    }
}
// only for loops
console.log(Object.keys(cars))
console.log(Object.values(cars))
console.log(Object.entries(cars))

console.log('---')

// let x = x == 10 ? '>10' : '<10' // one row 


let carsParsed = Object.entries(cars)
carsParsed.forEach(item => {
    if (typeof(item[1]) == 'string') // multi row
    {
        console.log(item[0], ' = ', item[1])
    } 
    else if (typeof(item[1]) == 'object')
    {
        Object.entries(item[1]).forEach( subItem => {
            console.log(item[0], ' => subItem = ', subItem[0], ' value = ', subItem[1])
        })
    }
})


console.log(cars.fn1())
console.log(cars.fn2())


let fn = x => this
let fn2 = function(x = 1, y = 2, ...z){
    z.forEach((value, index, arr) => {
        console.log(index , '=', value, arr)
    })
    return x + y
}

console.log( fn2(1,1, 100,200,300,400,500))



let rows = [1,2,3,4,5,6,7,8,9]
let cols = [1,2,3,4,5,6,7,8,9]

function multiply(x, y){
    return x * y
}

// th 
function generateTag(tagName, tagValue){
    let obj = document.createElement(tagName)
    //obj.classList.add('myClass')
    obj.innerHTML = tagValue
    return obj
}
/*
function generateRow(value){
    let tr = document.createElement('tr')
    tr.innerHTML = value
    return tr
}
function generateCell(value){
    let td = document.createElement('td')
    td.innerHTML = value
    return td // object -> manipulation of this object 
}
*/
// DOM
let table = document.getElementById('multiplyTable')

let cellValues = ''
let rowValues = ''

// generate 1 row -> header
let headerCell = generateTag('th', '').outerHTML
rows.forEach(value => {
    let th_r = generateTag('th', value)
    th_r.setAttribute('scope', 'col')
    headerCell += th_r.outerHTML
})


for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) 
{
    cellValues = ''
    for (let colIndex = 0; colIndex < cols.length; colIndex++) 
    {
        //console.log(multiply(rows[rowIndex], cols[colIndex]))
        if (colIndex == 0)
        { 
            let th_c = generateTag('th', rows[rowIndex])
            th_c.setAttribute('scope', 'row')
            cellValues += th_c.outerHTML 
        }
        cellValues += generateTag('td', 
            multiply(rows[rowIndex], cols[colIndex])
        ).outerHTML
    }
    rowValues += generateTag('tr', cellValues).outerHTML
}

table.innerHTML = 
generateTag('thead', 
    generateTag('tr', headerCell).outerHTML
    ).outerHTML + rowValues




