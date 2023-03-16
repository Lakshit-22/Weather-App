var button = document.querySelector('.button');
var button = document.querySelector('.inputValue');
var button = document.querySelector('.name');
var button = document.querySelector('.desc');
var button = document.querySelector('.temp');

fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=bdc76c53c0c55bbb26e1956d11083de0')
    .then(response => response.json())
    .then(data => {
        var tempValue = data['main']['temp'];
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description'];

        main.innerHTML = nameValue;
        desc.innerHTML = "Desc - " + descValue;
        temp.innerHTML = "Temp - " + tempValue;
        input.value = "";

    })

.catch(err => alert("Wrong city name!"));