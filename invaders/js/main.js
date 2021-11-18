const grid = document.querySelector('.grid')
let shooterStartIndex = 247

let moveRightCount = 0 // 0 left , 6 right
let moveLeftCount = 0

let bulletMovesCount = 1
let bulletInterval = undefined

let killedInvadersCount = 0

let invaderIndexes = [
    0,1,2,3,4,5,6,7,8,9,
    16,17,18,19,20,21,22,23,24,25,
    32,33,34,35,36,37,38,39,40,41
]

for (let index = 0; index < 256; index++) {
    const cell = document.createElement('div');
    cell.classList.add('cell')
    grid.appendChild(cell)
}

const squares = document.querySelectorAll('.cell')

// 240-256
squares[shooterStartIndex].classList.add('shooter')

function moveShooter(event){
    squares[shooterStartIndex].classList.remove('shooter')
    switch (event.key) {
        case 'ArrowLeft':
            if (shooterStartIndex <= 240) {
                shooterStartIndex = 240
            } else {
                shooterStartIndex -= 1
            }
            break;
        case 'ArrowRight':
            if (shooterStartIndex >= 255) {
                shooterStartIndex = 255
            } else {
                shooterStartIndex += 1
            }
            break;
    }
    squares[shooterStartIndex].classList.add('shooter') 
}

function shoot(){
    
    console.log ('bullet shoot')

    let bulletIndex = shooterStartIndex - 16 * bulletMovesCount
    squares[bulletIndex].classList.remove('bullet')

    // if bullet touches upper edge
    if (bulletMovesCount >= 15) {
        clearInterval(bulletInterval)
        bulletMovesCount = 1
        return 
    }
    
    bulletIndex = shooterStartIndex - 16 * ++bulletMovesCount
    squares[bulletIndex].classList.add('bullet') 

    if (squares[bulletIndex].classList.contains('invader')){
        
        squares[bulletIndex].classList.remove('bullet') 

        // remove item from invaders array
        let killedInvaderIndex = invaderIndexes.indexOf(bulletIndex)
        delete invaderIndexes[killedInvaderIndex]

        // print results 
        killedInvadersCount++
        printResults()

        // refresh interval
        bulletMovesCount = 1
        clearInterval(bulletInterval)

        return
    }
}

document.addEventListener('keydown', function(event){
    // console.log(event.key)
    moveShooter(event)

    switch (event.key) {
        case 'ArrowUp':
        case 'z':
            bulletInterval = setInterval(function(){
                shoot()
            }, 100)
            
            break;
    }
})

function removeInvaders(){
    invaderIndexes.forEach(invaderIndex => {
        squares[invaderIndex].classList.remove('invader')
    })
}

function drawInvaders(){
    invaderIndexes.forEach(invaderIndex => {
        squares[invaderIndex].classList.add('invader')
    })
}

function moveInvader(){
    removeInvaders()
    // move right
    if (moveRightCount <= 5)
    {
        
        invaderIndexes.forEach((invaderValue, invaderIndex) => {
            invaderIndexes[invaderIndex] += 1
        })
        
        if (moveRightCount == 5) {
            moveLeftCount = 0
            invaderIndexes.forEach((invaderValue, invaderIndex) => {
                invaderIndexes[invaderIndex] += 16
            })
        }
        moveRightCount++ // right

    } else if (moveLeftCount <= 5){
        // move left
        invaderIndexes.forEach((invaderValue, invaderIndex) => {
            invaderIndexes[invaderIndex] -= 1
        })
        
        if (moveLeftCount == 5){
            moveRightCount = 0
            invaderIndexes.forEach((invaderValue, invaderIndex) => {
                invaderIndexes[invaderIndex] += 16
            })
        }  
        moveLeftCount++ // left
    }

    drawInvaders()
}

function gameOver(){

    if (invaderIndexes.some((item) => item >= 240))
    {
        let divGameOver = document.createElement('div')
        divGameOver.classList.add('gameover')
        divGameOver.innerText = 'Game Over'
        document.getElementById('results').appendChild(divGameOver)
        clearInterval(invaderInterval)
    }
}

function Winner(){

    if (killedInvadersCount >= invaderIndexes.length)
    {
        let divGameOver = document.createElement('div')
        divGameOver.classList.add('winner')
        divGameOver.innerText = 'You Win!'
        document.getElementById('results').appendChild(divGameOver)
        clearInterval(invaderInterval)
    }
}

function printResults(){
    let results = document.getElementById('killedInvader')
    results.innerHTML = `Killed <b> ${ killedInvadersCount } </b> of ${ invaderIndexes.length }`
}

let invaderInterval = setInterval(function(){
    moveInvader()
    gameOver()
    Winner()
}, 1000)

drawInvaders()
console.log(squares)

