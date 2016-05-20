

$(document).ready(function(){
    $("button").click(function(){
        $.ajax({
		url: "http://api.openweathermap.org/data/2.5/weather?q=London&appid=c4ab0f5a04b5d0e07584f005992ab52e"
	}).then(function(data) {
		//$('date').append(data.id);
		//$('.greeting-content').append(data.content);
		console.log(data)
	});
    });
});
//$("button").click(function(){
	

//});

	
	


