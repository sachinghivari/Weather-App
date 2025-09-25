
let apiKey = "648432749a18d3f523d28c2a70b5afe4";

let apiUrl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";


let searchInput = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherIcon = document.querySelector(".weather-icon");
let error = document.querySelector(".error");


 async function getWeather(city){
       
    const res = await fetch(apiUrl  + city + `&appid=${apiKey}`);
     
    if(res.status == '404'){
      error.style.display = 'block';
      document.querySelector(".weather").style.display = "none";

    }else{

      
    const data = await res.json();

   
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";


  if(data.weather[0].main == "Clouds"){
   weatherIcon.src = "imgs/clouds.png";
  }
  if(data.weather[0].main == "Rain"){
   weatherIcon.src = "imgs/rain.png";
  }
  if(data.weather[0].main == "Clear"){
   weatherIcon.src = "imgs/clear.png";
  }
  if(data.weather[0].main == "Snow"){
   weatherIcon.src = "imgs/snow.png";
  }
  if(data.weather[0].main == "Mist"){
   weatherIcon.src = "imgs/mist.png";
  }
  if(data.weather[0].main == "Drizzle"){
   weatherIcon.src = "imgs/drizzle.png";
  }

document.querySelector(".weather").style.display = "block";
     error.style.display = 'none';
    }

 }


 searchBtn.addEventListener("click", ()=>{
    getWeather(searchInput.value);
});

