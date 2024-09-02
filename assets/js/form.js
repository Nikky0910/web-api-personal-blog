const formEl= document.querySelector('form');

//checks if an array exists in the local storage, and creates one if it doesn't.
if ( localStorage.getItem('blogsArray') === null) {
    localStorage.setItem('blogsArray', JSON.stringify([]));
} 

//listens for the form's 'submit' event and prevents its default action.
formEl.addEventListener('submit', function(e){
    e.preventDefault();
    const usernameEl = document.getElementById('username');
    const titleEl = document.getElementById('title');
    const contentEl = document.getElementById('content');
    const userEl = {
        username: usernameEl.value,
        title: titleEl.value,
        content: contentEl.value
    }

    const hasBeenSubmitted= localStorage.getItem('blogsArray');
    let updatedSubmitted = JSON.parse(hasBeenSubmitted);
    updatedSubmitted.push(userEl);
    localStorage.setItem('blogsArray', JSON.stringify(updatedSubmitted));

    //calls Form's default 'submit' event, so it redirects to the URL specified in its 'action' attribute on the HTML
    formEl.submit()
})



