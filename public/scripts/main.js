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
	
	$('input[type="submit"]').on("click", function(event){
	  event.preventDefault();
	  console.log('click');
	  $.ajax({
	    url: "/results",
	    data: $('form').serialize(),
	    dataType: "html",
	    success: function(data){
	      $('#results').html(data);
	    }
	  }).done()
	});

});