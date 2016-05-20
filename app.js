

$(document).ready(function(){

    $("#submit").on("click", function(){

    	

    	var cityname = $("#cityname").val();
    	getData(cityname);
    	function getData(cityname){
        $.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=c4ab0f5a04b5d0e07584f005992ab52e"
	}).then(function(data) {

		$('#temp').text(data.main.temp);
		$('#humidity').text(data.main.humidity);
		$('#desc').text(data.weather[0].description);
		$('#speed').text(data.wind.speed);
		$('#pressure').text(data.main.pressure);
		
		console.log(data)
	});
	}
    });

    

});

	
	


