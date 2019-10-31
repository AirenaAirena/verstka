$(function() {
	form = $('#ajax-contact');
	$(form).submit(function(event) {
		event.preventDefault();
		formData = $(form).serialize();
		$.ajax({
    	type: 'POST',
    	url: $(form).attr('action'),
    	data: formData
		}).done(function(response) {
			alert("Сообщение отправлено!")
		});
	});
});