const apiKey="f59d6811bb8d1ee4d6ac0b76844120c9";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=";

//when click on button information sent on search box input
const searchBox= document.querySelector(".search input");
const searchBtn= document.querySelector(".search button");

const weatherIcon=document.querySelector(".weather-icon");

async function checkweather(city)
{
    const response= await fetch(apiUrl+ city + `&appid=${apiKey}`);

    if(response.status== 404) //age city name invalid hoga to ye show krwa dy ga 
    {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    else{
        var data=await response.json(); //this data contain all information of weather
        // console.log(data);
        
        //update cityname,temp,humidity and wind
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round (data.main.temp )+ "°C";//use math round function for roundin the value
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";
    
        //update image according to weather condition
    
    
        if(data.weather[0].main=="Clear")
        {
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main=="Clouds")
            {
                weatherIcon.src="images/clouds.png";
            }
           else if (data.weather[0].main=="Rain")
        {
            weatherIcon.src="images/rain.png";
    }
           else if(data.weather[0].main=="Drizzle")
            {
                weatherIcon.src="images/drizzle.png";
    }
    else if (data.weather[0].main=="Mist")
    {
        weatherIcon.src="images/mist.png";
    
    
    }
        document.querySelector(".weather").style.display="block";
    
    
    }
   
}
searchBtn.addEventListener("click",()=>
{
    checkweather(searchBox.value);
})

