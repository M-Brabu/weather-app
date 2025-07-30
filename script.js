
    var ccen=document.getElementById("c-cen")
    const apiKey='5a5vs5a8ah3vs' /*just an sample api key */
    function apicall(){
         var city=document.getElementById("inpbox").value
         const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.trim()}&units=metric&appid=${apiKey}`
           fetch(url)
           .then(function(response){return response.json()})
           .then(function(data){
              if(data.cod===200){
                   ccen.innerHTML=`<h1>${data.name}</h1>
                                    <h2>condition:${data.weather[0].description}</h2>
                                    <h2>Temperature:${data.main.temp}°c</h2>
                                    <h2>Humidity:${data.main.humidity}%</h2>
                                    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></h2>
                                    `
              }
              else{
                ccen.innerHTML=`<h1>city not found!!!</h1>`
              }
         

           })
             
           .catch(function(error){
            console.log("error:",error)
           })
    }