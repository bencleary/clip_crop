// Call Jcrop on the target image
    jQuery(function($) 
    {
	$('#target').Jcrop({
	    onChange : updatePreview,
	    onSelect : updatePreview,
	    bgColor: '#4F4B47',
	    //boxHeight: 800,
	    //boxWidth: 600,
	    setSelect: [0, 0, 300, 300],
	    aspectRatio : 1
	});

	// Update the preview box
	function updatePreview(c)
	{
	    if(parseInt(c.w) > 0)
	    {
		// Show image preview
		var imageObj = $("#target")[0];
		var canvas = $("#preview")[0];
		var context = canvas.getContext("2d");
		// Draw image onto canvas
		context.clearRect(0,0, canvas.width, canvas.height);
		context.drawImage(imageObj, c.x, c.y, c.w, c.h, 0, 0, canvas.width, canvas.height);
	    }
	};
    
   });