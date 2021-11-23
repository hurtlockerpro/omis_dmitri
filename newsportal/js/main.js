
class Animals {

    constructor(color = 'red', name){
        console.log('this is animals class')
        this.color = color
        this.name = name
        console.log(this)
    }

    saySomething(){
        console.log('something (animals)')
    }
}

class Dog extends Animals {

    #size

    constructor(color = 'red', name, size){
        super(color)
        console.log('this is animals class')
        this.color = color
        //this.name = name
        this.#size = size
        console.log(this)
    }
/*
    set lastname(value){
        this.value = value
        console.log(this.value)
    }*/

    get _color(){
        return this.color
    }
}

//let cls = new Animals('red', 'vladimir')
let dog = new Dog('red', 'vladimir', '16px')
//dog.lastname = 'kähri'
//dog.lastname('kähri')

console.log(dog._color)
console.log(dog.#size)
dog.saySomething()
///console.log(dog.lastname)