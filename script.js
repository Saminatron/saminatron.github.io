
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
	var gradient = document.querySelector('.gradient-styling');
	
	$(document).ready(function() {
		if (dynamicContent == 'first') {
			$('#first').show();
			gradient.style.background = 'linear-gradient(300deg,#eb951c,#ffc900,#cdce00,#b5a200)';
		}
		else if (dynamicContent == 'stnd_usr') {
			$('#stnd_usr').show();
			gradient.style.background = 'linear-gradient(300deg,#23d200,#d2ffa4,#c3ddaf,#4faf00)';
		}
		
		else if (dynamicContent == 'ios') {
			$('#ios').show();
		}		

		else if (dynamicContent == 'android') {
			$('#android').show();
		}		
		
		else if (dynamicContent == 'michelinman-jacket') {
			$('#michelinman-jacket').show();
		}	

		else if (dynamicContent == 'speeddaemon-jacket') {
			$('#speeddaemon-jacket').show();
			gradient.style.background = 'linear-gradient(300deg,#EB951C,#9F0000,#FF0000,#6f0000)';
		}		
		
		else{
			$('#default-content').show();
		}
	});
	
	