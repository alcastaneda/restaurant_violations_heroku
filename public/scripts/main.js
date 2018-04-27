$(document).ready(function(){
	$('form').on("submit", function(event){
  		event.preventDefault();
  	$.ajax({
	    url: "/results",
	    data: $(this).serialize(),
	    dataType: "html",
	    success: function(data){
	      $('#results').html(data);
	    }
	  });
	});

});