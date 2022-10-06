$(document).ready(
    function(){      
     let tr;
    console.log("Carga2");
    $("#agregar2").on('click', function(){
          console.log("Funciona");
          $("#clientes").append(
            "<tr>\
            <th>\
            <img class='apertura2' src='https://icons.iconarchive.com/icons/hopstarter/button/16/Button-Add-icon.png' />\
            </th>\
            <td>\
            <input type='text' class='clavecliente' placeholder='Clave Cliente' readonly='readonly'/> \
            </td>\
            <td>\
            <input type='text' class='nombre'  placeholder='Nombre' readonly='readonly'/>\
            </td>\
            <td>\
            <input type='text' class='rfc' placeholder='RFC'readonly='readonly'/>\
            </td>\
            <td>\
            <input type='text' class='domicilio' placeholder='Domicilio'/>\
            </td>\
            <td>\
            <input type='date' class='fecha'  />\
            </td>\
            <td>\
            <img class='eliminar2' src='http://icons.iconarchive.com/icons/hopstarter/button/16/Button-Delete-icon.png' />\
            </td>\
            </tr>");


    $(".eliminar2:last").click(
        function(e){
            $(this).closest("tr").remove();

        }
    )


    $(".apertura2").click(function(){
          tr = $(this).closest("tr");
          $("#exampleModal2").modal('show');
          console.log("click")       
      });

    });

         
    
    $(".detalle2" ).click(function(e){       
        let clavecliente;
        let nombre;
        let rfc;
        let domicilio;
        //console.log("CLICK EN EL RENGLON");
        clavecliente =   $(this).closest("tr").find(".clavecliente").text();
        nombre =   $(this).closest("tr").find(".nombre").text();
        rfc =   $(this).closest("tr").find(".rfc").text();
        domicilio =   $(this).closest("tr").find(".domicilio").text();
        // console.log("claveCliente::", claveCliente);
        $(tr).find(".clavecliente").val(clavecliente);
        $(tr).find(".nombre").val(nombre);
        $(tr).find(".rfc").val(rfc);
        $(tr).find(".domicilio").val(domicilio);
        $("#exampleModal2").modal('hide');

    })
})
    