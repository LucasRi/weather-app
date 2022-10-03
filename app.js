window.addEventListener("load", () => {
    let client_ipadress;
    $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=91a3ae08f6c9403899a1d877f71345e0', function (data) {
        client_ipadress = data.city;
        $("#location").text(`${data.city}`);
        console.log(client_ipadress);
        let long;
        let lat;
        long = data.longitude;
        lat = data.latitude;

        api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=sk&appid=9a940b74ba054ec407a90bf5159392db`
        fetch(api)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                var tempnumber = data.main.temp;
                tempnumber = tempnumber.toFixed(0);
                var maxtemperature = data.main.temp_max;
                maxtemperature = maxtemperature.toFixed(0);
                var mintemperature = data.main.temp_min;
                mintemperature = mintemperature.toFixed(0);
                var feels_like = data.main.feels_like;
                feels_like = feels_like.toFixed(0);
                var currentTimeFunction = new Date();
                var currentMonthNumber = currentTimeFunction.getMonth();
                var months = ["January", "February", "March", "April", "May", "June",
                    "July", "August", "September", "October", "November", "December"];
                var selectedMonthName = months[currentMonthNumber];

                var time = currentTimeFunction.getDate() + ', ' + selectedMonthName + ' ' + currentTimeFunction.getFullYear();
                $("#date").text(`${time}`);
                $("#location").text(`${data.name}`);
                if (data.sys.country = 'SK') {
                    $("#country").text(`Slovakia`);
                }
                $("#max-temperature").text(`${maxtemperature} º`);
                $("#min-temperature").text(`${mintemperature} º`);
                $("#temperature").text(`${tempnumber}`);
                $("#feels_like").text(`${feels_like} º`);
                $("#weather-description").text(`${data.weather[0].description}`);
                $("#humidity").text(`${data.main.humidity}%`);
                $("#wind").text(`${data.wind.speed} km/h`);
                $("#pressure").text(`${data.main.pressure} hPa`);
                $("#weather-icon").attr("src", `/src/img/weather-icons/sun-cloud-rain.svg`);
                $("#weather-info-icon").attr("src", `/src/img/weather-icons/sun-cloud-rain.svg`);

            })


    });
});


const inputTxt = document.querySelector('.search-bar');
var button = document.querySelector('.search-btn');

button.addEventListener('click', () => {
    const cityInput = inputTxt.value;
    console.log(cityInput);

    apiSearch = `http://api.openweathermap.org/geo/1.0/direct?q=${cityInput}&appid=9a940b74ba054ec407a90bf5159392db`
    fetch(apiSearch)
        .then(response => {
            return response.json();
        })
        .then(data => {
            let lat;
            let long;
            lat = data.lat;
            long = data.lon;
            console.log(lat);
            console.log(long);

            apifromsearch = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=sk&appid=9a940b74ba054ec407a90bf5159392db`
            fetch(apifromsearch)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    var tempnumber = data.main.temp;
                    tempnumber = tempnumber.toFixed(0);
                    var maxtemperature = data.main.temp_max;
                    maxtemperature = maxtemperature.toFixed(0);
                    var mintemperature = data.main.temp_min;
                    mintemperature = mintemperature.toFixed(0);
                    var feels_like = data.main.feels_like;
                    feels_like = feels_like.toFixed(0);
                    var currentTimeFunction = new Date();
                    var currentMonthNumber = currentTimeFunction.getMonth();
                    var months = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
                    var selectedMonthName = months[currentMonthNumber];

                    var time = currentTimeFunction.getDate() + ', ' + selectedMonthName + ' ' + currentTimeFunction.getFullYear();
                    $("#date").text(`${time}`);
                    $("#location").text(`${data.name}`);
                    if (data.sys.country = 'SK') {
                        $("#country").text(`Slovakia`);
                    }
                    $("#max-temperature").text(`${maxtemperature} º`);
                    $("#min-temperature").text(`${mintemperature} º`);
                    $("#temperature").text(`${tempnumber}`);
                    $("#feels_like").text(`${feels_like} º`);
                    $("#weather-description").text(`${data.weather[0].description}`);
                    $("#humidity").text(`${data.main.humidity}%`);
                    $("#wind").text(`${data.wind.speed} km/h`);
                    $("#pressure").text(`${data.main.pressure} hPa`);
                    $("#weather-icon").attr("src", `/src/img/weather-icons/sun-cloud-rain.svg`);
                    $("#weather-info-icon").attr("src", `/src/img/weather-icons/sun-cloud-rain.svg`);

                })
        });
});









/*window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            document.querySelector(".search button").addEventListener("click", function () {

            })

            const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&lang=sk&appid=9a940b74ba054ec407a90bf5159392db`
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    var tempnumber = data.main.temp;
                    tempnumber = tempnumber.toFixed(0);
                    var maxtemperature = data.main.temp_max;
                    maxtemperature = maxtemperature.toFixed(0);
                    var mintemperature = data.main.temp_min;
                    mintemperature = mintemperature.toFixed(0);
                    var feels_like = data.main.feels_like;
                    feels_like = feels_like.toFixed(0);

                    /*$("#date").text(`${data.current.observation_time}`);*/
/*$("#location").text(`${data.name}`);
if (data.sys.country = 'SK') {
    $("#country").text(`Slovakia`);
}
$("#max-temperature").text(`${maxtemperature}º`);
$("#min-temperature").text(`${mintemperature}º`);
$("#temperature").text(`${tempnumber}`);
$("#feels_like").text(`${feels_like}º`);
$("#weather-description").text(`${data.weather[0].description}`);
$("#humidity").text(`${data.main.humidity}%`);
$("#wind").text(`${data.wind.speed} km/h`);
$("#pressure").text(`${data.main.pressure} hPa`);
$("#weather-icon").attr("src", `/src/img/weather-icons/sun-cloud-rain.svg`);
$("#weather-info-icon").attr("src", `/src/img/weather-icons/sun-cloud-rain.svg`);*/

/*if (data.current.uv_index < 2) {
    $("#uvindex").text(`${data.current.uv_index} Low`);
}
if (data.current.uv_index > 2) {
    $("#uvindex").text(`${data.current.uv_index} Medium`);
}
if (data.current.uv_index > 5) {
    $("#uvindex").text(`${data.current.uv_index} High`);
}
if (data.current.uv_index > 7) {
    $("#uvindex").text(`${data.current.uv_index} Very High`);
}
if (data.current.uv_index > 10) {
    $("#uvindex").text(`${data.current.uv_index} Extreme`);
}*/
/*})

})
}

});*/

/*window.addEventListener("load", () => {
    let client_ipadress;

    $.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=91a3ae08f6c9403899a1d877f71345e0', function (data) {
        client_ipadress = data.city;
        $("#location").text(`${data.city}`);
        console.log(client_ipadress);

        const apiCurrent = `http://api.weatherstack.com/current?access_key=95a46fb4772cc3ffbdd01e64c28410ad&query=${client_ipadress}`
        fetch(apiCurrent)
            .then(response => {
                return response.json();
            })
            .then(data => {
                console.log(data);
                $("#date").text(`${data.current.observation_time}`);
                $("#location").text(`${data.location.name}`);
                $("#country").text(`${data.location.country}`);
                $("#weather-description").text(`${data.current.weather_descriptions}`);
                $("#temperature").text(`${data.current.temperature}`);
                $("#uvindex").text(`${data.current.uv_index} Low`);
                $("#humidity").text(`${data.current.humidity}%`);
                $("#wind").text(`${data.current.wind_speed} km/h`);
                $("#pressure").text(`${data.current.pressure} hPa`);
                $("#weather-icon").attr("src", `/src/img/weather-icons/sun-cloud-rain.svg`);

                if (data.current.uv_index < 2) {
                    $("#uvindex").text(`${data.current.uv_index} Low`);
                }
                if (data.current.uv_index > 2) {
                    $("#uvindex").text(`${data.current.uv_index} Medium`);
                }
                if (data.current.uv_index > 5) {
                    $("#uvindex").text(`${data.current.uv_index} High`);
                }
                if (data.current.uv_index > 7) {
                    $("#uvindex").text(`${data.current.uv_index} Very High`);
                }
                if (data.current.uv_index > 10) {
                    $("#uvindex").text(`${data.current.uv_index} Extreme`);
                }

                /*if (data.current.weather_icons = 'Partly cloudy'){
                $("#weather-icon").attr("src",`/src/img/partly-cloud.svg`);
                }*/
/*})
});
});*/


/* GET WEATHER DATA 
$.ajax({
    url: 'http://api.weatherstack.com/current',
    data: {
        access_key: '95a46fb4772cc3ffbdd01e64c28410ad',
        query: ipdresa
    },
    dataType: 'json',
    success: function (apiResponse) {
        $("#test").text(`Current temperature in ${apiResponse.location.name} is ${apiResponse.current.temperature}℃`);
    }
});*/


/*let apiKey = '91a3ae08f6c9403899a1d877f71345e0';
 GET USER LOCATION 
$.getJSON('https://ipgeolocation.abstractapi.com/v1/?api_key=' + apiKey, function asdsadas(data) {
    $("#ip_address").text(data.ip_address);
    let ipdresa
    ipdresa = data.ip_address
    return ipdresa
});*/










