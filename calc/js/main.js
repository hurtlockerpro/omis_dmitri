
let buttons = document.getElementsByClassName('btn')
//let buttons = document.querySelectorAll('.btn')
let result = document.getElementById('result')

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
    
    if (!(event.keyCode >= 48 && event.keyCode <= 57) && 
    !(event.keyCode >= 96 && event.keyCode <= 107)) event.preventDefault()
    

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


loadData()
