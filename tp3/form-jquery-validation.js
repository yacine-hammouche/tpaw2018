$(document).ready(function () { //pour chargement de la page
   
       $('#button').on("click", function (event) { //ajouter un "listener" à un élément
           event.preventDefault();
           console.log( "click" );
   
           if ($('#inputNom').val() == "" || 
		$('#inputprenom').val() == "" || 
		$('#inputdatedenaissance').val() == "" || 
		$('#inputAdresse').val() == "" || 
		$('#InputEmail').val() == "") {
   
               $('#myModal').modal("show");
           }
           else {
               $(".modal-body").html('<p>Vous etes nés le '+$('#inputdatedenaissance').val()+'</p> <img style="max-width:100%" src="https://maps.googleapis.com/maps/api/staticmap?center='+$('#inputAdresse').val()+'&markers='+$('#inputAdresse').val()+'&size=800x400&zoom=13"/>');
               $(".modal-title").text("Bienvenue "+$("#inputNom").val());
               $('#myModal').modal("show");
   
           }
   
       });
   })
