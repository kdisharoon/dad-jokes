const dadJokeURL = 'https://icanhazdadjoke.com/';

document.addEventListener('DOMContentLoaded', () => {
    const dadJokeBtn = document.getElementById('dadJokeButton');
 
    dadJokeBtn.addEventListener('click', () => {

        fetch(dadJokeURL, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'User-Agent': 'https://github.com/kdisharoon'
            },
            
        })
        .then( (httpResponse) => {
            return httpResponse.json();
        })
        .then( (jsonData) => {
            message.innerText = jsonData.joke;
            jokeId = jsonData.id;
        })
        .catch((err) => {
            alert('Oh no, where did the dad joke go?');
            console.error(err);
        }); 
    });

});