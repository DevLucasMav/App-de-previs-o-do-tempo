const apiKey = process.env.API_KEY;

function clickedOnButton() {
    const city = document.querySelector(".input-city").value

    searchCity(city)
}

async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())
    
    
    putDataOnScreen(data)       
}

function putDataOnScreen(data) {
    console.log(data)
    document.querySelector(".city").innerHTML = "Tempo em " + data.name
    document.querySelector(".time").innerHTML = Math.floor(data.main.temp) + "ºC"
    document.querySelector(".prediction-text").innerHTML = data.weather[0].description
    document.querySelector(".moisture").innerHTML = data.main.humidity + "%"
    document.querySelector(".img-forecast").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

}
