$(document).ready(function()
    {
	$('#about').hide();
	$('#boxbg').hide();
	$('#boxform').hide();
	$('.toast').hide();
	
	$('#headBtn').click(function()
	    {
                $('#about').slideToggle();
            });
	
	$('#cancelImg').click(function()
            {
                $('#about').slideToggle();
            });
	
	$('#featureBtn').click(function(e)
            {
                e.preventDefault();
                $('#boxbg').fadeIn("slow");
                $('#boxform').fadeIn("slow");
            });
	
	$('#boxbg').click(function()
            {
                $('#boxbg').fadeOut("slow");
                $('#boxform').fadeOut("slow");
            });

    

function loadForm() {
	    $('#nme').val($('#name').html());
	    $('#ste').val($('#site').html());
	    $('#freq').val($('#feature').html());
	    $('#rson').val($('#reason').html());
	    $('#imp').val($('#selectForm').val());
	}
	
	$('#submit').click(function(e) {
	    loadForm();
	    e.preventDefault();
	    $.ajax({
		type: 'post',
		url: 'php/log.php',
		data: $('#testForm').serialize(),
		success: function() {
		    $('.form').html("");
		    $('#boxbg').fadeOut("slow");
		    $('#boxform').fadeOut("slow");
		    $('.toast').addClass('success');
		    $('.toast').html("Feature Request Logged!");
		    $('.toast').fadeIn(300).delay(1500).fadeOut(200);
		},
		error: function() {
		    $('.form').html("");
		    $('#boxbg').fadeOut("slow");
		    $('#boxform').fadeOut("slow");
		    $('.toast').addClass('error');
		    $('.toast').html("Feature Request Failed! Email ICT!");
		    $('.toast').fadeIn(300).delay(1500).fadeOut(300);
		}
	    })
	})
	
	});