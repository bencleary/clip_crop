/**
 * @author Ben Cleary
*/

$(document).ready(function() {
    
    $('#uploader').change(function()
	{
	    $('#img_data').val($('#uploader').val());
	    var fr = new FileReader;
	    fr.onload = function()
	    {
		var img = new Image;
		img.onload = function()
		{
		var c=document.getElementById("target");
		var ctx=c.getContext("2d");
		ctx.clearRect( 0 , 0 , c.width, c.height );
		ctx.drawImage(img, 0, 0, c.width, img.height * (c.width / img.width));
		}	
	        img.src = fr.result;            
	    };
	fr.readAsDataURL(this.files[0]);
    
	});

	    function prepURL(cnvs) {
		    var data = cnvs.toDataURL("image/png");
		    data = data.substr(data.indexOf(',') + 1).toString();
		    return data;
	    }
	    
	    
	    $('#button').click(function() {
		$test = $('#uploader').val().split('\\').pop();
		$test = $test.slice(0,-4);
		var cnvs = document.getElementById('preview');
		sendForm(prepURL(cnvs), $test+"CROP");
	    })
	
	function sendForm(data, fname) {
	    var dataInput = document.createElement("input") ;
		dataInput.setAttribute("name", "imgdata") ;
		dataInput.setAttribute("value", data);
		dataInput.setAttribute("type", "hidden");
		
		var nameInput = document.createElement("input") ;
		nameInput.setAttribute("name", 'name') ;
		nameInput.setAttribute("value", fname + '.png');
		
		var myForm = document.createElement("form");
		myForm.method = 'post';
		myForm.action = 'php/saveme.php';
		myForm.appendChild(dataInput);
		myForm.appendChild(nameInput);
		
		document.body.appendChild(myForm) ;
		myForm.submit() ;
		document.body.removeChild(myForm) ;
	}

});

