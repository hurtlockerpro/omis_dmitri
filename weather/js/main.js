
// https://api.openweathermap.org/data/2.5/weather
// ?
//q=Tallinn
// &
//appid=e94a06c22c14c9ab3059f89372eb2541

let settings = {
    url: 'https://api.openweathermap.org/data/2.5/weather',
    q: 'Tallinn',
    appid: 'e94a06c22c14c9ab3059f89372eb2541',
    units: 'imperial'
}

let iconsTemplates = [
    {
        icon: ['fas', 'fa-cloud-sun'],
        keywords: ['sun']
    },
    //'fas fa-cloud-sun-rain',
    //'far fa-sun',
    //'fas fa-cloud-moon',
    {
        icon: ['fas', 'fa-cloud-moon-rain'],
        keywords: ['moon', 'clouds']
    },
    {
        icon: ['fas', 'fa-snowflake'],
        keywords: ['snow', 'ice']
    }
]

function generateApiUrl(){
    let url = ''
    let keyValuePairs = []
    Object.entries(settings).forEach(item => {
        if (item[0] == 'url')
        {
            url += item[1] + '?'
        } else {
            keyValuePairs.push(item[0] + '=' + item[1])
        }
    })
    return url + keyValuePairs.join('&')
}

function loadData(){

    fetch(generateApiUrl())
        .then(response => response.json())
        .then(data => {
            
            console.log(data)
            let temp = data.main.temp
            let city = data.name

            let description = []
            let icons = []
            data.weather.forEach(item => {
                description.push(item.description)
                icons.push(getWeatherIcon(item.icon, item.description))
            })

            document.querySelector('.icon').innerHTML = icons.join('')
            document.querySelector('.temp').innerText = temp
            document.querySelector('.description').innerText = description.join(', ')
            document.querySelector('.city').innerText = city
        })
}

function getWeatherIcon(iconcode, description = ''){

    let img = document.createElement('img')
    img.src = "http://openweathermap.org/img/w/" + iconcode + ".png"
    //return img.outerHTML
    
    let resultIcon = ''
    iconsTemplates.forEach(item => {

        item.keywords.forEach(keyword => {
            if (description.search(keyword) != -1)
            {
                let fa_icon = document.createElement('i')
                item.icon.forEach(_class => {
                    fa_icon.classList.add(_class)
                })
                
                resultIcon += fa_icon.outerHTML
            }
        })
    })
    return resultIcon
    

}


document.querySelector('.switch input[type=checkbox]')
    .addEventListener('change', event => {
        console.log(event)
        if (event.target.checked == true)
        {
            settings.units = 'metric'
        } else  {
            settings.units = 'imperial'
        }
        loadData()
})


loadData()
