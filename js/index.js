$(document).ready(function(){
   if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){   
     var latitude= position.coords.latitude;
     var longitude= position.coords.longitude;
      console.log(position.coords.latitude);
     var webURL = "https://api.wunderground.com/api/8327a42c00e5cf4a/conditions/q/" + latitude + "," + longitude + ".json";
      $.getJSON(webURL, function(data){
          var current = data.current_observation;
          $("#tempCont").prepend(current.feelslike_c, '&deg;c', " ", current.weather);
          $("#tempCont2").prepend(current.feelslike_f, '&deg;F', " ", current.weather).hide();
        
        
          switch(current.weather){
            case "Clear":
              $("#iconCont").append("<i class = 'wi wi-day-sunny'></i>");
              $("body").css("background-image", 'url("https://static.pexels.com/photos/9248/nature-summer-sun-leaf.jpg")');
              break;
            case "Rain":
              $("#iconCont").append("<i class = 'wi wi-day-rain'></i>");
              $("body").css("background-image", 'url("https://static.pexels.com/photos/39811/pexels-photo-39811.jpeg")');
              break;
            case "Snow":
              $("#iconCont").append("<i class = 'wi wi-day-snow'></i>");
              $("body").css("background-image", 'url("https://static.pexels.com/photos/289649/pexels-photo-289649.jpeg")');
              break;
            case "Overcast":
            case "Mostly Cloudy":
            case "Partly Cloudy":
              $("#iconCont").append("<i class = 'wi wi-day-cloudy'></i>");
              $("body").css("background-image", 'url("https://static.pexels.com/photos/395196/pexels-photo-395196.jpeg")');
              break;
                                }
        
          $("#units").click(function(){
              $("#tempCont").toggle();
              $("#tempCont2").toggle();
      
           });
                       

          
    }); 
    }); 
   }; 
});