
let buttons = document.getElementsByClassName('btn')
//let buttons = document.querySelectorAll('.btn')
let result = document.getElementById('result')

let allowAccesKeys = [37, 39, 106, 107, 111, 109, 32, 8, 13, 110]

let notDoublesAllowed = ['/', '*', '+', '-']

let lastSymbol = undefined

let loadData = () => {

    let btns = Array.from(buttons)
    btns.forEach(btn => {
        btn.addEventListener('click', function(event){
            console.log(event.target.innerText)
            
            if (event.target.innerText == '=')
            {
                getResult()
            } else {
                result.value += event.target.innerText
            }
        })
    });
}

function getResult(){
    result.value = eval(result.value)
}

result.addEventListener('keydown', function(event){
    console.log('keydown', event.key, '=', event.keyCode)
    
    // true 
    if (
        !(event.keyCode >= 48 && event.keyCode <= 57) &&  // true
        !(event.keyCode >= 96 && event.keyCode <= 107) && // true
        !allowAccesKeys.includes(event.keyCode)) // true -> false
    {
            event.preventDefault()
    } else if (event.keyCode == 13) {
        getResult()
    } else {

        checkLastSymbol(event.key)
        /*
        if (isLastSymbolDouble(lastSymbol, event.key) == true && 
        notDoublesAllowed.includes(event.key) == true)
        {
            event.preventDefault()
        }
        */
        
        if (notDoublesAllowed.includes(event.key)) lastSymbol = event.key
    }

    /*
    if (event.keyCode >= 48 && event.keyCode <= 57)
    {
        // todo 
    } else if (event.keyCode >= 96 && event.keyCode <= 107){
        // todo
    } else {
        event.preventDefault()
    }*/
})

function isLastSymbolDouble(lastSymbol, currentSymbol){
    // ['/', '*', '+', '-']
    if (notDoublesAllowed.includes(lastSymbol) && lastSymbol == currentSymbol)
    {
        return true
    }
    
    return false
}

function checkLastSymbol(currentSymbol)
{
    if (isNaN(currentSymbol) == true && isNaN(lastSymbol) == true && lastSymbol != undefined){
        result.value = result.value.trim().toString().substring(
            0, 
            result.value.trim().toString().length - 1)
            result.value += currentSymbol 
    } else {
        result.value += currentSymbol
    }
}




loadData()
