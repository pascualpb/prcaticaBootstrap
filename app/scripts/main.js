$("#btndatos").click(function() {
console.log("Mi peticion ajax");

$.ajax({
    url: 'http://www.media.formandome.es/phonegap/tutorial/futbolistas.php'
  })
  .done(function(futbolistas) {
    $.each(futbolistas, function(index, futbolista) {
          console.log(futbolista.nombre + ' ' +
            futbolista.apellido+ ' ' +futbolista.equipo);
          $('#tabla_futbolistas').append('<tr><td>' + futbolista.nombre + '</td><td>'
             + futbolista.apellido + '</td><td>' 
    	     + futbolista.equipo + '</td></tr>');

  });





});


});
