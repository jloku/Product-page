function Main(){
	
	$.getJSON("data.json", function(data) {
        console.log(data);
		$.each(data.Products, function( index, value ) {
			var elements = [];
			$.each(value.rates, function( in_index, in_value ) {
				var element = '<option>'+in_index+'</option>'
				elements.push(element);
			});
			$('<div/>', {
			id: index,
			title: 'Become a Googler',
			rel: 'external',
		}).addClass("product_wrap").appendTo('.Products').append("<div class='product'><img class='logo' src='" +value.image+"'><select size='1' class='rates' name = " + index + ">"+ elements +"</select></div>");
		
		});

    }).error(function(jqXhr, textStatus, error) {alert("ERROR: " + textStatus + ", " + error)});
	
	
	var state = -1;
	$('body').on('click', '.product_wrap', function(){
		  if ( state == -1 ) {
				$(this).animate({
					  width: "42%",
					  height:"220px"
				}, 500 );
				$(this).find('.rates').delay(500).animate({
					  opacity: 1
				}, 300 );
				
				state = $('.product_wrap').index(this);
		  } else {
				if (!($('.product_wrap').index(this) ==state)){
					$($('.product_wrap').get(state)).delay(300).animate({
						  width: "24%",
						  height:"100px",
					}, 500 );
					$($('.product_wrap').get(state)).find('.rates').animate({
					  opacity: 0
					}, 300 );
					$(this).animate({
						  width: "42%",
						  height:"220px"
					}, 500 );
					$(this).find('.rates').delay(500).animate({
					  opacity: 1
				}, 300 );
				state = $('.product_wrap').index(this);
					state = $('.product_wrap').index(this);
				}
		  }
		});
	


}
$( Main )



