const field=document.querySelector("#city");
const container=document.querySelector("#weather");
const b=document.querySelector("button");

b.addEventListener("click",
  ()=>{
    let city=field.value.toLowerCase() ;
    if(city===""){
      alert("Please enter the city");
    }
    else{
      loadWeather(city);
    }
  }
);

 async function loadWeather(city){
  try{

    let response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6ed570ac911dad2a255e2965a53ced74&units=metric`);
    if(response.ok){
      let data=await response.json();
      displayWeather(data);
    }
    else{
      alert("City not found");
      field.value="";
    }
  }
  catch(err){
    console.log(err);
  }
}

 function displayWeather(data){
  console.log(data)
  var {main,sys,name,weather,wind}=data;
  container.innerHTML=`<h2>Weather in ${name}, ${sys.country}</h2>
            <p>Temperature: ${main.temp}°C</p>
            <p>Weather: ${weather[0].description}</p>
            <p>Humidity: ${main.humidity}%</p>
            <p>Wind Speed: ${wind.speed} m/s</p>
            <img src="https://openweathermap.org/img/wn/${weather[0].icon}.png" class="weather-icon" alt="Weather Icon">`;
  
}

