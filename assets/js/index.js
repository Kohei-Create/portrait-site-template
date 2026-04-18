document.addEventListener('DOMContentLoaded', () => {
    fetch('nav.html')
        .then(Response => Response.text ())
        .then(data => {
            document.querySelector('#nav').innerHTML = data;
        })
        .catch(error => console.error('Error Loading nav', error));
        
    fetch('footer.html')
        .then(Response => Response.text ())
        .then(data => {
            document.querySelector('#footer').innerHTML = data;
        })
        .catch(error => console.error('Error Loading footer', error));
    });