//LISTAR MÉDICO
$(document).ready(function () {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        var parameter = 'minhaVariavel';
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1);
        }
    }
    if (param_value) {
        return listarMedico(param_value);
    }
    else {
        return undefined;
    }
});

function listarMedico(cod_animal) {
    $(document).ready(function () {
        $.ajax(
            {
                dataType: 'json',
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                type: 'GET',
                url: 'http://localhost/git1/medico',
                success: function (data) {
                    var clientes = data;
                    // Listando cada cliente encontrado na lista
                    $.each(clientes, function (i, cliente) {
                        if (cod_animal == cliente.cod_animal) {
                            var item = "<tr><td>" + cliente.nome + "</td> <td>" + cliente.local + "</td> <td>" + cliente.crmv + "</td> <td>" + cliente.email + "</td> <td>" + cliente.telefone + "</td> <td><button class='btn btn-danger btn-sm' onclick='deleteMedico("+cliente.cod_medico+")'>Deletar Médico</button></td></tr>";
                            $("#medico").append(item);
                        }
                    });
                },
                error: function (data) {
                    alert("error");
                }
            });
    });
}
//FIM LISTAR MÉDICO

//CADASTRAR MÉDICO
function cadastrarMedico(parameter) {
    var loc = location.search.substring(1, location.search.length);
    var param_value = false;
    var params = loc.split("&");
    for (i = 0; i < params.length; i++) {
        param_name = params[i].substring(0, params[i].indexOf('='));
        if (param_name == parameter) {
            param_value = params[i].substring(params[i].indexOf('=') + 1)
        }
    }
    if (param_value) {
        return cadastrar_medico(param_value);
    }
    else {
        return undefined;
    }
}


function cadastrar_medico(cod_animal) {
    var nome = $("#nome_medico").val();
    var local = $("#local_medico").val();
    var crmv = $("#crmv_medico").val();
    var email = $("#email_medico").val();
    var telefone = $("#telefone_medico").val();
    var animal = cod_animal;

    //cod animal não pode ser igual - dono cod dono tem que ser enviado
    var markers = { "nome": nome, "local": local, "crmv": crmv, "email": email, "telefone": telefone, "cod_animal": animal };
    $.ajax({
        type: "POST",
        url: 'http://localhost/git1/medico',
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) { 
            sucesso_cadastro();
        },
        failure: function (errMsg) {
            erro_cadastro();
        }
    });
}
//FIM CADASTRAR MÉDICO


//DELETAR MÉDICO
function deleteMedico(cod_medico) {
    var cod = cod_medico;
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'DELETE',
            url: 'http://localhost/git1/medico/' + cod,
            success: function (data) {
                sucesso_delete();
            },
            error: function (data) {
                erro_delete();
            }
        });
}
//FIM DELETAR MÉDICO