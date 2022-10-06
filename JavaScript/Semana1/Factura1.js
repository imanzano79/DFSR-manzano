$(document).ready(
        function(){           
        let tr;
        console.log("Carga");
        $("#agregar").on('click', function(){
              console.log("Funciona");
              $("#partidas").append(
                "<tr>\
                <td>\
                <img class='apertura' src='https://icons.iconarchive.com/icons/hopstarter/button/16/Button-Add-icon.png' />\
                </td>\
                <td>\
                <input type='text' class='clave' placeholder='Clave'readonly='readonly'/>\
                </td>\
                <td>\
                <input type='text' class='precio' placeholder='Precio' readonly='readonly'/>\
                </td>\
                <td>\
                <input type='text' class='descripcion' placeholder='descripcion' readonly='readonly'/>\
                </td>\
                <td>\
                <input type='text' class='unidades' placeholder='Unidades' />\
                </td>\
                <td>\
                <input type='text' class='importe' placeholder='Importe' readonly='readonly'/>\
                </td>\
                <td>\
                <img class='eliminar' src='http://icons.iconarchive.com/icons/hopstarter/button/16/Button-Delete-icon.png' />\
                </td>\
                </tr>");

                 
        $(".precio:last, .unidades:last").on('change', (function(){
            console.log("CHANGE")
            tr  = $(this).closest("tr");
            calculaImporte(tr);
            calcularTotal(tr);           
        }));

        $(".eliminar:last").click(
            function(e){
                $(this).closest("tr").remove();
                calcularTotal();
            }
        )
        $(".apertura").click(
            function(e){
              tr = $(this).closest("tr");
              $("#exampleModal").modal('show');
              console.log("click")       
          });

        });

           
        
        $(".detalle" ).click(function(e){
           
            let claveDetalle;
            //console.log("CLICK EN EL RENGLON");
            claveDetalle =   $(this).closest("tr").find(".claveDetalle").text();
           // console.log("claveDetalle::", claveDetalle);
            $(tr).find(".clave").val(claveDetalle);
            $("#exampleModal").modal('hide');

        })

        $(".detalle").click(function(e){
            let precioDetalle;
            //console.log("CLICK EN EL RENGLON");
            precioDetalle =   $(this).closest("tr").find(".precioDetalle").text();
           // console.log("claveDetalle::", claveDetalle);
            $(tr).find(".precio").val(precioDetalle);
            $("#exampleModal").modal('hide');

        }) 


        $(".detalle").click(function(e){
            let descripcionDetalle;
            let unidades
            
            //console.log("CLICK EN EL RENGLON");
            descripcionDetalle =   $(this).closest("tr").find(".descripcionDetalle").text();
           // console.log("descripcionDetalle::", descripcionDetalle);
            $(tr).find(".descripcion").val(descripcionDetalle);
            $(tr).find(".unidades").val(1);
            $(tr).find(".unidades").change();
            $("#exampleModal").modal('hide');

        }) 

   function calculaImporte(tr){
       let precio = $(tr).find(".precio").val().replace('$', '')
       .replace(',', '')
       .replace('.00','');
       let unidades = $(tr).find(".unidades").val();
   
   console.log("El precio es : " + Number(precio))
   console.log("Las unidades son: " + Number(unidades))

   let importe = precio * unidades; 
   console.log("Importe:" + importe)
    let importeNumeral = numeral(importe);
    $(tr).find(".importe").val(importeNumeral.format('$0,000,000.00'));
   
   }


   function calcularTotal(){
       let subtotal = 0; 
       let iva = 0;
       let total = 0;
       

       $(".importe").each(
           function(){
               subtotal += Number($(this).val().replace('$', '') .replace(',', '').replace('.00','')); 
               console.log('subtotal:' , subtotal);
               iva = subtotal*0.16;
               total = subtotal+iva;
              
           }
       );

       let numeralSubtotal = numeral(subtotal);
       $("#subtotal").text(numeralSubtotal.format('$0,000,000.00'));

       let numeraliva = numeral(iva);
       $("#iva").text(numeraliva.format('$0,000,000.00'));

       let numeraltotal = numeral(total);
       $("#total").text(numeraltotal.format('$0,000,000.00'));
       } 
     }    
)    
