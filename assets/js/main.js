(function ($) {
	"use strict";

	$(document).ready(function () {
		// Data CSS Js
		$("[data-background").each(function () {
			$(this).css(
				"background-image",
				"url( " + $(this).attr("data-background") + "  )"
			);
		});

		// Nice Select
		if ($("select").length > 0) {
			$("select").niceSelect();
		}

		// Sticky Header
		var lastScrollTop = 0;
		$(window).scroll(function () {
			var scroll = $(window).scrollTop();

			if (scroll > 200) {
				$("header.header-2").addClass("sticky");
				$("header.header-2").removeClass("sticky-out");
			} else if (scroll < lastScrollTop) {
				if (scroll < 200) {
					$("header.header-2").addClass("sticky-out");
					$("header.header-2").removeClass("sticky");
				}
			} else {
				$("header.header-2").removeClass("sticky");
			}

			// console.log("lastScrollTop: " + lastScrollTop + " | scroll: " + scroll);

			lastScrollTop = scroll;
		});
		// end: Sticky Header

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
