window.onload = function(){
	// criando comandos para o Google maps funcionar
	/* Outro metodo de comentario para mais de uma linha  */
	var map;
	function initialze(){
		var mapProp = { // variavel do tipo objeto
			center: new google.maps.LatLng(-27.648598, -48.577423);
			scrollWheel:false,
			zoom:12,
			MapTypeId:google.maps.MapTypeId.ROADMAP
		}
		// chamando a funcao com a class
		map = new google.maps.Map(document.getElementById("mapa"),mapProp);
	}
	// adicionando funcao para marcacao no mapa
	function addMarker(lat,long,icon,content){
		var latLng = {'lat':'lat','long':'long'};
		var marker = new google.maps.Marker({ // variavel como objeto de marcacao do mapa
			position:latLng,
			map:map,
			icon:icon
		});
		var infoWindow = new google.maps.InfoWindow({
			content:content,
			maxWidth:200,
			pixelOffset: new google.maps.Size(0,20)
		});
	}
	// chamando a fucao para executar
	initiale();
	// chamando marca do mapa
	var conteudo = '<p style="color:black;font-size:13px;padding:10px 0;">Meu endereço</p>'; // formatando caixa de texto do mapa
	addMarker('aqui se coloca a lat - long','',conteudo);
	// funcao faz com que mapa mude a localizacao em 4s
	setTimeout(function()){
		map.panTo({'lat':-23.550520,'lng':-46.633309});
	},4000; 
}