let toggle = document.getElementById('theme');
let mode = 'light';

toggle.addEventListener('click', function(){
    let body= document.body;
    let main = document.querySelector('main')
    let header = document.querySelector('header')
    let footer = document.getElementById('footer')
    let articles = document.querySelectorAll('article')
    let button = document.querySelector('button')


    if (mode==='light'){
        mode= 'dark';
        body.setAttribute('class', mode);
        main.setAttribute('class', mode);
        header.setAttribute('class', mode);
        footer.setAttribute('class', mode);
        button.setAttribute('class', mode);
        toggle.src = toggle.attributes['data-moon'].value;
        for (let article of articles) {
            article.setAttribute('class', mode);
            let h3 = article.querySelector('h3');
            h3.setAttribute('class', mode);
        }
    }else {
        mode = 'light';
        body.setAttribute('class', mode);
        main.setAttribute('class', mode);
        header.setAttribute('class', mode);
        footer.setAttribute('class', mode);
        button.setAttribute('class', mode);
        toggle.src = toggle.attributes['data-sun'].value;
        for (let article of articles) {
            article.setAttribute('class', mode);
            let h3 = article.querySelector('h3');
            h3.setAttribute('class', mode);
        }
    }
})