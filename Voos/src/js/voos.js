//Documentação
//http://192.168.32.241:8000/docs

const link = "http://192.168.32.241:8000"

function listagemVoos(lista){

    txt = "";

    lista.forEach(voo => {
        txt += "<tr>";
        txt += "<td>"+voo.flightNumber+"</td>";
        txt += "<td>"+voo.origin+"</td>";
        txt += "<td>"+voo.destination+"</td>";
        txt += "<td>"+voo.departureTime+"</td>"
        txt += "<td>"+voo.arrivalTime+"</td>"
        txt += "</tr>";
        
    });

    $('#listaVoos').html(txt);

}

function getVoos(){

    $.ajax({
    url: link+"/flights",
    method: "GET",
    })

    .done(function( msg ) {
        listagemVoos(msg);
    })

    .fail(function( textStatus ) {
    alert( "Request failed: " + textStatus );
    });
}

function registaVoo(){

    let flight = {
        flightNumber: $('#numberVoo').val(),
        origin: "LIS",
        destination: "FRA",
        departureTime: "2026-03-16T11:41:31.430Z",
        arrivalTime: "2026-03-16T12:41:31.430Z",
        status: "scheduled"
        };


    $.ajax({
    url: link+"/flights",
    method: "POST",
    data: JSON.stringify(flight),
    contentType:"application/json",
    })

    .done(function( msg ) {

        alert(msg.flightNumber + " Registado")
        getVoos();
    })

    .fail(function(textStatus ) {
    alert( "Request failed: " + textStatus );
    });
}