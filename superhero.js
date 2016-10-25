var db = openDatabase('marvelDatabase', '1.0', 'Superhero Database', 2 * 1024 * 1024);


$(document).ready(function() {
		$("#intro").show();
		$("#actor").hide();
		$("#series").hide();
		$("#date").hide();
		$("#studio").hide();
		$("#add").hide();
		$("#world").hide();
		
			
		$("#link1").click(function(){
    		$("#actor").show();
    		$("#series").hide();
			$("#date").hide();
			$("#studio").hide();
			$("#add").hide();
			$("#intro").hide();
			$("#world").hide();

		});	
		
		$("#link2").click(function(){
    		$("#series").show();
    		$("#date").hide();
			$("#studio").hide();
			$("#actor").hide();
			$("#add").hide();
			$("#intro").hide();
			$("#world").hide();

		});	
		
		$("#link3").click(function(){
    		$("#date").show();
    		$("#actor").hide();
			$("#series").hide();
			$("#studio").hide();
			$("#add").hide();
			$("#intro").hide();
			$("#world").hide();

		});	
		
		$("#link4").click(function(){
    		$("#studio").show();
    		$("#actor").hide();
			$("#series").hide();
			$("#date").hide();
			$("#add").hide();
			$("#intro").hide();
			$("#world").hide();

		});	
		
		$("#link5").click(function(){
    		$("#add").hide();
    		$("#studio").hide();
    		$("#actor").hide();
			$("#series").hide();
			$("#date").hide();
			$("#intro").hide();
			$("#world").show();

		});	
		
		$("#link6").click(function(){
    		$("#add").show();
    		$("#studio").hide();
    		$("#actor").hide();
			$("#series").hide();
			$("#date").hide();
			$("#intro").hide();
			$("#world").hide();

		});	
		
		$("#actorSubmit").click(function() {
			var actorName = $("#actorName").val();
			getMovieNames(actorName);
			
		});	
		
		$("#directorSubmit").click(function() {
			var directorName = $("#directorName").val();
			getDirectorNames(directorName);
			
		});	
		
		$("#superpowerSubmit").click(function() {
			var name = $("#superpower").val();
			getSuperpower(name);
			
		});	
});


 
function getMovieNames(actorName){
	console.log(actorName);
	var data = {action:'1', name: actorName};
	$.ajax({
		type: 'POST',
		url: 'response.php',
		dataType: 'json',
		data: data,
		success: function(data){
			for(var i = 0; i < data.length; i++) {
				$("#results").append("<li>" + data[i]["Movie_title"] + "</li>");
			}
			console.log(data);
		},
		error: function(status, error, errorThrown) {
			console.log(status);
			console.log(error);
			console.log(errorThrown);
		}
	});
}

function getDirectorNames(directorName){
	console.log(directorName);
	var data = {action:'2', name: directorName};
	$.ajax({
		type: 'POST',
		url: 'response.php',
		dataType: 'json',
		data: data,
		success: function(data){
			for(var i = 0; i < data.length; i++) {
				$("#results2").append("<li>" + data[i]["Movie_title"] + "</li>");
			}
			console.log(data);
		},
		error: function(status, error, errorThrown) {
			console.log(status);
			console.log(error);
			console.log(errorThrown);
		}
	});
}

function getSuperpower(name){
	console.log(name);
	var data = {action:'2', name: superpower};
	$.ajax({
		type: 'POST',
		url: 'response.php',
		dataType: 'json',
		data: data,
		success: function(data){
			for(var i = 0; i < data.length; i++) {
				$("#results2").append("<li>" + data[i] + "</li>");
			}
			console.log(data);
		},
		error: function(status, error, errorThrown) {
			console.log(status);
			console.log(error);
			console.log(errorThrown);
		}
	});
}