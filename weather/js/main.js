
// https://api.openweathermap.org/data/2.5/weather?q=Tallinn&appid=e94a06c22c14c9ab3059f89372eb2541
// e94a06c22c14c9ab3059f89372eb2541

document.querySelector('button')
    .addEventListener('click', (event) => {

        //fetch('https://google.com')
        fetch('hello.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('web').innerHTML = data
        })

    })
