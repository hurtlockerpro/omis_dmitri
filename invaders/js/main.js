const grid = document.querySelector('.grid')
let shooterStartIndex = 240

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
    let bulletIndex = shooterStartIndex - 16

    switch (event.key) {
        case 'ArrowUp':
        case 'z':
            squares[bulletIndex].classList.remove('bullet')
            squares[bulletIndex].classList.add('bullet') 
            break;
    }
}

document.addEventListener('keydown', function(event){
    // console.log(event.key)
    moveShooter(event)
    shoot()
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
    invaderIndexes.forEach((invaderValue, invaderIndex) => {
        invaderIndexes[invaderIndex] += 1
    })
    drawInvaders()
}

setInterval(function(){
    moveInvader()
}, 1000)

drawInvaders()
console.log(squares)

