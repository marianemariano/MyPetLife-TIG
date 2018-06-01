//LISTAR LOCAL
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
        return listarLocal(param_value);
    }
    else {
        return undefined;
    }
});

function listarLocal(cod_animal) {
    $(document).ready(function () {
        $.ajax(
            {
                dataType: 'json',
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                type: 'GET',
                url: 'http://localhost/git1/local',
                success: function (data) {
                    var clientes = data;
                    // Listando cada cliente encontrado na lista
                    $.each(clientes, function (i, cliente) {
                            var item = "<tr><td>" + cliente.nome + "</td> <td>" + cliente.endereco + "</td> <td>" + cliente.telefone + "</td> <td>" + cliente.email + "</td> <td>" + cliente.tipo + "</td><td><button class='btn btn-danger btn-sm' onclick='deletarLocal("+cliente.cod_local+")'>Deletar</button></td></tr>";
                            $("#local").append(item);
                    });
                },
                error: function (data) {
                    alert("error");
                }
            });
    });
}
//FIM LISTAR LOCAL


//CADASTRAR LOCAL
function cadastrarLocal(parameter) {
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
        return cadastrar_local(param_value);
    }
    else {
        return undefined;
    }
}


function cadastrar_local(cod_animal) {
    var nome = $("#nome_local").val();
    var endereco = $("#endereco_local").val();
    var telefone = $("#telefone_local").val();
    var email = $("#email_local").val();
    var tipo = $("#tipo_local").val();
    var animal = cod_animal;

    //cod animal não pode ser igual - dono cod dono tem que ser enviado
    var markers = { "nome": nome, "endereco": endereco, "telefone": telefone, "email": email, "tipo": tipo};
    $.ajax({
        type: "POST",
        url: 'http://localhost/git1/local',
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) { sucesso_cadastro(); },
        failure: function (errMsg) {
            erro_cadastro();
        }
    });
}
//FIM CADASTRO LOCAL

//DELETAR LOCAL
function deletarLocal(cod_local) {
    var cod = cod_local;
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'DELETE',
            url: 'http://localhost/git1/local/' + cod,
            success: function (data) {
                sucesso_delete();
            },
            error: function (data) {
                erro_delete();
            }
        });
}
//FIM DELETAR LOCAL