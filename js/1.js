/*jslint browser: true*/
/*global $, jQuery*/

$(function () {
	for (i = 0; i < 3; i++) {
		$('.buzz_wrapper .text span').eq(0).clone().prependTo('.buzz_wrapper .text');
	}
	for (i = 0; i < 80; i++) {
		$('.buzz_wrapper .scanline').eq(0).clone().appendTo('.buzz_wrapper');
	}
});
