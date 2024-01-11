(function ($) {
	"use strict";

	$(document).ready(function () {
		// toolbar active class
		$(".toolbar_inner .toolbar_item").on("click", function () {
			$(this).siblings().removeClass("active");
			$(this).addClass("active");
		});

		// Header Mobile Menu
		$(".menu_bar button").on("click", function () {
			$(".hamburger_menu").addClass("open");
			$(".page-overly").addClass("open");
			$("body").addClass("scrollHide");
		});

		$(".hamburger_menu .close_icon button").on("click", function () {
			$(".hamburger_menu").removeClass("open");
			$(".page-overly").removeClass("open");
			$("body").removeClass("scrollHide");
		});

		$(".main_menu li.dropdown").on("click", function () {
			$(this).children("ul").slideToggle();
		});
		// end: mobile menu
	});
})(jQuery);
