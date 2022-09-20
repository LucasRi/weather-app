/*window.addEventListener("load", () => {
    let long;
    let lat;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const api = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=e8ca496346ca4be6a94c47c68938a5f5&include=minutely`
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);

                })
        });

    }
});*/

window.addEventListener("load", () => {
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
            })
    });
});


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










