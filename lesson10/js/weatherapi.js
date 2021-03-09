const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=946ee3e55995e79e2d6f02d00a3dce79&units=imperial";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    const temp = jsObject["main"];
    const tempOutput = document.querySelector('#current-temp');

    tempOutput.innerHTML = `${temp.temp}`;
    

    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // variable with image address stored concatenated with the API ico code value result
    const desc = jsObject.weather[0].description;  //  weather array referencing index of icon
    document.getElementById('imagesrc').textContent = imagesrc;  // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc);  // setAttribute() src specified by const variable set above
    document.getElementById('icon').setAttribute('alt', desc);

    
    const currently = document.querySelector('#currently');

    
    currently.innerHTML =  `${jsObject.weather[0].description}`
    console.log(currently);
  });