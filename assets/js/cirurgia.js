//LISTAR CIRURGIA
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
        return listarCirurgia(param_value);
    }
    else {
        return undefined;
    }
});

function listarCirurgia(cod_animal) {
    $(document).ready(function () {
        $.ajax(
            {
                dataType: 'json',
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                type: 'GET',
                url: 'http://localhost/git1/cirurgia',
                success: function (data) {
                    var clientes = data;
                    // Listando cada cliente encontrado na lista
                    $.each(clientes, function (i, cliente) {
                        if (cod_animal == cliente.cod_animal) {
                            var item = "<tr><td>" + cliente.nome + "</td> <td>" + cliente.data + "</td> <td>" + cliente.complicacoes + "</td> <td>" + cliente.valor + " </td> <td>" + cliente.cuidados + " </td> <td><button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Observações</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> " + cliente.observacao + "</p></div></td></td><td><button class='btn btn-danger btn-sm' onclick='deletarCirurgia(" + cliente.cod_cirurgia + ")'>Deletar cirurgia</button></td></tr>";
                            $("#cirurgia").append(item);
                        }
                    });
                },
                error: function (data) {
                    alert("error");
                }
            });
    });
}
//FIM LISTAR CIRURGIA

//CADASTRAR CIRURGIA
function cadastrarCirurgia(parameter) {
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
        return cadastrar_cirurgia(param_value);
    }
    else {
        return undefined;
    }
}


function cadastrar_cirurgia(cod_animal) {
    var nome = $("#nome_cirurgia").val();
    var data = $("#data_cirurgia").val();
    var complicacoes = $("#complicacoes_cirurgia").val();
    var local = $("#local_cirurgia").val();
    var medico = $("#medico_cirurgia").val();
    var valor = $("#valor_cirurgia").val();
    var cuidados = $("#cuidados_cirurgia").val();
    var observacoes = $("#obs_cirurgia").val();
    var animal = cod_animal;

    //cod animal não pode ser igual - dono cod dono tem que ser enviado
    var markers = { "nome": nome, "data": data, "complicacoes": complicacoes, "valor": valor, "cuidados": cuidados, "observacao": observacoes, "cod_animal": animal };
    $.ajax({
        type: "POST",
        url: 'http://localhost/git1/cirurgia',
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) { sucesso_cadastro(); },
        failure: function (errMsg) {
            erro_cadastro();
        }
    });
}
//FIM CADASTRAR CIRURGIA


//DELETAR CIRURGIA
function deletarCirurgia(cod_cirurgia) {
    var cod = cod_cirurgia;
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'DELETE',
            url: 'http://localhost/git1/cirurgia/' + cod,
            success: function (data) {
                sucesso_delete();
            },
            error: function (data) {
                erro_delete();
            }
        });
}
//FIM DELETAR CIRURGIA