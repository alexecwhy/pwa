///cargar service worker
if('serviceWorker' in navigator){
	console.log('puesdes usar los serviceWorker');

	navigator.serviceWorker.register('./sw.js')
							.then(res => console.log('cargado correctamente', res))
							.catch(err => console.log('service no se cargo', err));




}else{
	console.log('no puedes');
}


///scroll suavisado
$(document).ready(function(){
 
 	$("#menu a").click(function(e){
 		e.preventDefault();

 		$("html, body").animate(
 		{
 			scrollTop: $($(this).attr('href')).offset().top
 		})

 		return false;
 	})
});