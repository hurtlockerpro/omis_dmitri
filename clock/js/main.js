
let hourArm = document.getElementById('hr')
let minuteArm = document.getElementById('mn')
let secondArm = document.getElementById('sc')

/*
setTimeout(function(){
    console.log('Hello from setTimeout')
}, 3000)
*/


setInterval(function(){

    let date = new Date()

    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    //console.log('time> ', date.toLocaleDateString('en-EE', options))
    console.log('time> ', date.getHours(), date.getMinutes(), date.getSeconds())

    let sec = date.getSeconds() * 360 / 60
    let min = date.getMinutes() * 360 / 60 + sec / 60
    let hour = date.getHours() * 360 / 12 + min / 12 

    secondArm.style.transform = 'rotateZ(' + sec + 'deg)'
    minuteArm.style.transform = 'rotateZ(' + min + 'deg)'
    hourArm.style.transform = 'rotateZ(' + hour + 'deg)'



}, 1000)