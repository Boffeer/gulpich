jQuery(document).ready(function ($) {

	$(".callback-form").submit(function () {
		var str = $(this).serialize();

		$.ajax({
			type: "POST",
			url: "static/php/callback.php",
			data: str,
			success: function ()
			{
				
			}
		}
		);
		return false;
	});
});