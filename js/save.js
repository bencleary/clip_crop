$('#cropButton').click(function(e){
				checkCoords();
				$('#fileName').val('crop234');
				e.preventDefault();
				$.ajax({
				type: 'post',
				url: 'crop.php',
				data: $('#cropform').serialize(),
				success: function () {
					alert('woop');
				 }
			});
                                
	function updateCoords(c)
  {
  	console.log(c);
    $('#x').val(c.x);
    $('#y').val(c.y);
    $('#w').val(c.w);
    $('#h').val(c.h);
  });