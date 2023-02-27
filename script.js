const weatherDisplay = document.querySelector('.weatherDisplay');
const locationSearched = document.querySelector('.locationSearched');
const searchBtn = document.querySelector('.searchBtn');
const table = document.querySelector('.weatherTable');
searchBtn.addEventListener('click', () => {
    if (locationSearched.value == "") {
        alert('please enter a location');
    } else {
        getData(locationSearched.value);
    }
    })
const getData = function (searchTerm) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&APPID=dfa98055aefcf9a2c1ae5e590f06d779&units=metric`, {mode: 'cors'})
    .then(function(response) {
    return response.json();
    })
    .then(function(response) {
    console.log(response.main);
    console.log(typeof response.main);
    
    let keysArray = Object.keys(response.main);
    
    console.log(keysArray);

    keysArray.forEach(key => {
        let currentRow = document.createElement('tr');
        let title = document.createElement('td');
        let info = document.createElement('td');
        title.innerText = key;
        info.innerText = response.main[key];
        currentRow.appendChild(title);
        currentRow.appendChild(info);
        table.appendChild(currentRow);
    });

    // diplayWeather.innerText = response.data.images.original.url;

    })
    .catch(() => {
        alert('Giphy didn\'t find any gifs with the searched keyword');
    })
    }