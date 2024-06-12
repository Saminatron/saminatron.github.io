
	function getParameterByName(name, url) {
		if (!url) url= window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"), 
			results =regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, ""));
	}
	
	var dynamicContent = getParameterByName('io');
	
	$(document).ready(function() {
		if (dynamicContent == 'apples') {
			$('#apples').show();
		}
		else if (dynamicContent == 'oranges') {
			$('#oranges').show();
		}
		
		else if (dynamicContent == 'banana') {
			$('#banana').show();
		}		
		
		else{
			$('#default-content').show();
		}
	});