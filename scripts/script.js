function Main(){
	
	$.getJSON("data.json", function(data) {
        console.log(data);
		$.each(data.Products, function( index, value ) {
			var elements = [];
			var firstindex = 0;
			$.each(value.rates, function( in_index, in_value ) {
				if (firstindex==0){firstindex = in_index}
				var element = '<option>'+in_index+'</option>'
				elements.push(element);
			});
			$('<div/>', {
			id: index
		}).addClass("product_wrap").appendTo('.Products').append("<div class='product'><img class='logo' src='" +value.image+"'><select size='1' class='rates' name = '" + index + "'>"+ elements +"</select><h2 class='price'>Price:</h2><h2 class='price price_dinamic'>"+value.rates[firstindex]+"</h2></div>");
		
		});

    }).error(function(jqXhr, textStatus, error) {alert("ERROR: " + textStatus + ", " + error)});
	
	
	var state = -1;
	$('body').on('click', '.product_wrap', function(){
		  if ( state == -1 ) {
			  $(this).find(".rates").css("visibility","visible");
			  $(this).find(".price").css("visibility","visible");
				$(this).animate({
					  width: "49%",
					  height:"220px",
				}, 200 );
				$(this).find('.rates').delay(200).animate({
					  opacity: 1
				}, 200 );				
				$(this).find('.logo').animate({
					  height:"40%"
				}, 200 );
				$(this).find('.price').delay(200).animate({
					  opacity: 1
				}, 200 );
				state = $('.product_wrap').index(this);
		  } else {
				if (!($('.product_wrap').index(this) ==state)){
					$($('.product_wrap').get(state)).find(".rates").css("visibility","hidden");
					$($('.product_wrap').get(state)).css("visibility","hidden");
					$($('.product_wrap').get(state)).delay(200).animate({
						  width: "24%",
						  height:"100px",
						  background:"#ccf2db"
					}, 200 );
					$($('.product_wrap').get(state)).find('.rates').animate({
					  opacity: 0
					}, 200 );
					$($('.product_wrap').get(state)).find('.logo').animate({
					  height:"80%"
					}, 200 );
					$($('.product_wrap').get(state)).find('.price').animate({
					  opacity: 0
					}, 200 );
					$(this).find(".rates").css("visibility","visible");
					$(this).find(".price").css("visibility","visible");
					$(this).animate({
						  width: "49%",
						  height:"220px"
					}, 200 );
					$(this).find('.rates').delay(200).animate({
					  opacity: 1
					}, 200 );
					$(this).find('.logo').animate({
					  height:"40%"
					}, 200 );
					$(this).find('.price').delay(200).animate({
					  opacity: 1
					}, 200 );
				state = $('.product_wrap').index(this);
					state = $('.product_wrap').index(this);
				}
		  }
	});
	var Prod;
	$.getJSON("data.json", function(json) {
		Prod = json;
	});
		
	$('body').on('change', '.rates', function(){
		$(this).parent().find('.price_dinamic').text(Prod.Products[$(this).attr('name')].rates[$(this).val()])
	});

}
$( Main )



