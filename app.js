

$(document).ready(function(){

    $("button").on("click", function(){
    	var cityname = $("#cityname").val();
    	getData(cityname);
    	function getData(cityname){
        $.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=c4ab0f5a04b5d0e07584f005992ab52e"
	}).then(function(data) {
		$('#temp').append(data.main.temp);
		$('#humidity').append(data.main.humidity);
		$('#desc').append(data.weather[0].description);
		$('#speed').append(data.wind.speed);
		$('#pressure').append(data.main.pressure);
		
		console.log(data)
	});
	}
    });
});

	
	


