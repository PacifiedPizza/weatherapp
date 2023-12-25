var btn = document.getElementsByClassName("searchbtn")[0];
var placeinput = document.getElementsByClassName("place")[0];
var temp = document.getElementsByClassName("temp")[0];
var desc = document.getElementsByClassName("desc")[0];

btn.addEventListener('click', function () {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${placeinput.value}&units=metric&appid=e268e7c042f3b19a2d1bad1f552bc642`)
        .then(response => {
            if (!response.ok) {
                throw new Error('City not found');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            displaydata(data);
        })
        .catch(err => alert(err.message));
});



var displaydata = (weather) => {
    temp.innerText = `${weather.main.temp}°C`;
    desc.innerText = `${weather.weather[0].description}`;
}

$('input[type="text"]').click(function () {
    var descText = $('.desc').text().toLowerCase();

    if (descText.includes("clouds")) {
        $('body').css("background-image", "url(img/clouds.jpg)");
    } else if (descText.includes("sunny")) {
        $('body').css("background-image", "url(img/sunny.jpg)");
    } else if (descText.includes("rain")) {
        $('body').css("background-image", "url(img/rainy.jpg)");
    }
    else if (descText.includes("mist")) {
        $('body').css("background-image", "url(img/mist.jpg)");
    }
});


