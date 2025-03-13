// user의 위치
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = "7b769d8fba5b6db7cc8f803f76759f81";

    console.log("You live in", lat, lng);

    // console.log(position)
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    // console.log(url)
    fetch(url)
    .then((response => response.json())
    .then((data) => {
            const weatherContainer = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child")
        city.innerText = data.name;
        weather.innerText =  `${data.weather[0].main} / ${data.main.temp}`;

    } ));

}

/**
 * fetch는 promise다
 * promise는 당장 뭔가 일어나지 않고 시간이 좀 걸린 뒤에 일어나는 것.
 */

function onGeoError(){
alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
