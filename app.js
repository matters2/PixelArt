button = document.querySelector('.btnPickColor');
input = document.querySelector('.colorInput');
body = document.querySelector('body');
colorBox = document.querySelector('.colorBox');
input2 = document.querySelector('.movieSearch');
button2 = document.querySelector('.btnMovie');
dashboard = document.querySelector('.dashboard');
button3 = document.querySelector('.btn_clear');
square = document.querySelectorAll('.pixel');

function canvas() {
    for (let i = 0; i < 2000; i++) {
        var square = document.createElement('div');
        square.className = 'pixel';
        body.appendChild(square);
    };
};

canvas();

function pickColor(e) {
    e.preventDefault();
    let color = input.value;
    colorBox.style.backgroundColor = color;
}

function setColor(e) {
    color = colorBox.style.backgroundColor;
    e.target.style.backgroundColor = color;
    button.style.backgroundColor = '';
    button2.style.backgroundColor = '';
    input.style.backgroundColor = '';
    input2.style.backgroundColor = '';
    dashboard.style.backgroundColor = '';
}

function resetFunc(e) {
    input.value = '';
    colorBox.style.backgroundColor = '';
    body.style.backgroundImage = '';
    body.style.backgroundColor = '';
    squares = document.querySelectorAll('.pixel');
    squares.forEach(function(div) {
        div.style.backgroundColor = '';
    })
}

button.addEventListener('click', pickColor);
body.addEventListener('click', setColor);
button3.addEventListener('click', resetFunc);

button2.addEventListener('click', e => {
    e.preventDefault();
    const api_key = ENV['omdb_api_key']
    const searchTerm = input2.value;
    const url = `http://omdbapi.com/?s=${searchTerm}&apikey=${api_key}`;
    axios.get(url).then(res => {
        const movies = res.data.Search;
        let poster = movies[0]["Poster"];
        body.style.backgroundImage = "url('" + poster + "')"
    });
    input2.value = ''
});