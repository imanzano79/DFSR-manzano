$(document).ready(
    function(){
        // console.log("Carga");


        $("#agregar").on('click', function(){
            // console.log("Funciona");
            $("#partidas").append(
                "<tr>\ <td>\
                <button class='apertura' data-toggle='modal' data-target='#exampleModal'> \
                <img class='' src='https://icons.iconarchive.com/icons/hopstarter/button/32/Button-Add-icon.png' />\
                </button>\
                </td>\
                <td>\
                <input type='text' class='clave'/>\
                </td>\
                <td>\
                <input type='text' class='precio'/>\
                </td>\
                <td>\
                <input type='text' class='descripcion'/>\
                </td>\
                <td>\
                <input type='text' class='unidades'/>\
                </td>\                    <td>\
                <input type='text' class='importe' readonly='readonly'/>\
                </td>\
                <td>\
                <img class='eliminar' src='http://icons.iconarchive.com/icons/hopstarter/button/16/Button-Delete-icon.png' />\
                </td>\ </tr>" );

               


                $(".precio:last, .unidades:last").on('change', (function(){
                    console.log("CHANGE")
                    let tr = $(this).closest("tr");
                    calcularImporte(tr);
                    calcularTotal();
                                        
              }));


                $(".eliminar:last").click(
                        function(){
                            $(this).closest("tr").remove();
                            calcularTotal();
                        }

                )


                




            });


        function calcularImporte(tr){
            let precio = $(tr).find(".precio").val();
            let unidades = $(tr).find(".unidades").val();

        console.log("El precio es : " + precio)
        console.log("Las unidades son : " + unidades)

        var importe = precio * unidades;
        console.log("Importe : " + importe)

            $(tr).find(".importe").val(importe);


        }


        function calcularTotal() {
            let subtotal = 0;

            $(".importe").each(
                function(){
                    subtotal += Number($(this).val());
                    console.log('subtotal:' , subtotal);

                }

            );


            $("#subtotal").text(subtotal.toFixed(2));
        }



        function Iva() {
            let


        }



    });


    
























