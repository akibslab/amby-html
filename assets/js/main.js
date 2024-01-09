(function ($) {
	"use strict";

	$(document).ready(function () {
		$(".toolbar_inner .toolbar_item").on("click", function () {
			$(this).siblings().removeClass("active");
			$(this).addClass("active");
		});
	});
})(jQuery);
