

// https://newsapi.org/v2/everything?
// q=tesla&from=2021-10-30&
// sortBy=publishedAt&apiKey=4a5de1e54b304bf2909af12bf979c242

class Url {

    settings = {
        url: 'https://newsapi.org/v2/everything',
        q: 'tesla',
        from: '2021-10-30',
        sortBy: 'publishedAt',
        apiKey: '4a5de1e54b304bf2909af12bf979c242',
    }

    constructor(){
        let date = new Date()
        this.settings.from = date.getFullYear() + "-" +  (date.getMonth() + 1) + "-" + date.getDate()
    }
    
    generateApiUrl()
    {
        let url = ''
        let keyValuePairs = []
        Object.entries(this.settings).forEach(item => {
            if (item[0] == 'url')
            {
                url += item[1] + '?'
            } else {
                keyValuePairs.push(item[0] + '=' + item[1])
            }
        })
        return url + keyValuePairs.join('&')
    }
}

class Newsweb extends Url {

    newsData = {
        title:'',
        description:'',
        image: '',
        author: '',
        publishedAt: '',
        source: ''
    }

    getData(){
        
        // 1 this._getDate(null) // auto date -> date
        // 2
        let calendarDate = document.querySelector('input[type="date"]') 
        this._getDate(calendarDate.value)

        fetch(this.generateApiUrl() /*, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
              'Content-Type': 'application/json'
              // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(newsData) // body data type must match "Content-Type" header
          }*/)

        .then(r => {
            
            //if ()
            // foreach
            return r.json()
        })
        .then(data => {
            console.log(data)

            let result = document.querySelector('.newsResult')
            result.innerHTML = ''
            data.articles.forEach(item => {
                this.newsData.title = item.title
                this.newsData.description = item.description
                this.newsData.author = item.author
                this.newsData.image = item.urlToImage
                this.newsData.source = item.url
                this.newsData.publishedAt = item.publishedAt

                const fragment = document.createRange().createContextualFragment(this.generateCard());

                result.appendChild(fragment)

            })
        })
    }

    generateCard(){
        //document.createElement()
        return `<div class="card m-2" style="width: 18rem; float: left;">
        ${ this.generateImage() }
        <div class="card-body">
          <h5 class="card-title">${ this.newsData.title }</h5>
          <p class="card-text">${ this.newsData.description }</p>
          ${ this.generateSourceButton() }
        </div>
      </div>`
    }

    generateImage(){
        if (this.newsData.image !== '' && this.newsData.image.length > 0 && 
        this.newsData.image.substring(0, 8) == 'https://')
        {
            return `<img src="${ this.newsData.image }" 
            class="card-img-top" alt="${ this.newsData.title }">`
        }
        return ''
    }

    generateSourceButton(){
        if (this.newsData.source !== '' && this.newsData.source.length > 0 && 
        this.newsData.source.substring(0, 8) == 'https://')
        {
            return `<a href="${ this.newsData.source }" class="btn btn-primary" target="_blank">Show source</a>`
        }
        return ''

    }

    _getDate(customDate = null)
    {
        if (customDate != null)
        {
            // todo: parse date from input
            this.settings.from = customDate

        } else {

            let date = new Date()
            this.settings.from = date.getFullYear() + "-" +  (date.getMonth() + 1) + "-" + date.getDate()
        }
    }
}

let inputKeyword = document.getElementById("inputKeyword")
let btn = document.querySelector('button[type="button"]')
//let btn = document.getElementById('btnSearch')

btn.addEventListener('click', event => {

    if (inputKeyword.value.trim().length <= 3)
    {
        alert('Please Insert min. 3 symbols')
    } else {
        console.log(inputKeyword.value)

        let news = new Newsweb()
        news.settings.q = inputKeyword.value
        news.getData()
    }
})
