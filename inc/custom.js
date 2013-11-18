jQuery(document).ready(function($) {

	/*$("#foo1").carouFredSel({
		auto : false,
		prev : "#foo1_prev",
		next : "#foo1_next"
	});*/
	$("#foo1").carouFredSel({
		circular: true,
		responsive: true,
		infinite: true,
		auto	: false,
		prev	: {	
			button	: "#foo1_prev",
			//key		: "left"
		},
		next	: { 
			button	: "#foo1_next",
			//key		: "right"
		},

		items: {
			visible: {
				min: 1,
				max: 3,
			}
		}
	});

});
