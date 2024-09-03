
let blogsList= localStorage.getItem('blogsArray');
let updatedBlogsList= JSON.parse(blogsList);

for (let element of updatedBlogsList){
    let span = document.createElement('span');
    span.innerHTML = element.username;

    let p = document.createElement('p');
    p.innerText = "Posted by: ";
    p.appendChild(span);

    let footer = document.createElement('footer');
    footer.appendChild(p);

    let pContent = document.createElement('p');
    pContent.innerHTML = element.content;

    let h3 = document.createElement('h3');
    h3.innerHTML = element.username;

    let article = document.createElement('article');
    article.appendChild(h3);
    article.appendChild(pContent);
    article.appendChild(footer);

    let main= document.querySelector('main')
    main.appendChild(article);

}