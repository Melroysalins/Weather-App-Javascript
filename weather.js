const apikey = '4f1b7d660501db97ec0fe21bce0d12ea';

const api_url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';


const weathericon = document.querySelector('.weather-icon');
const searchbox = document.querySelector('.search input');

const searchbtn = document.querySelector('.search button')

async function checkweather(city){
    const response = await fetch(api_url + city +`&appid=${apikey}`)
    var data = await response.json();

    console.log(response)
    console.log(data)

    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity + "%";

    document.querySelector('.raing').innerHTML =data.wind.speed + ' km/hr';

    document.querySelector('.temperature').innerHTML =Math.round(data.main.temp )+ '°C';

    if(data.weather[0].main == 'clouds'){
       weathericon.src='weatherApp/cloudy.jpg'
    }
    else if(data.weather[0].main == 'rain'){
        weathericon.src='weatherApp/raining.avif'
    }

    document.querySelector('.weather').style.display = 'block'
}

searchbtn.addEventListener('click',()=>{
    checkweather(searchbox.value)
})
