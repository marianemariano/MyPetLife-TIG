//LISTAR PULGAS
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
        return listarPulgas(param_value);
    }
    else {
        return undefined;
    }
});

function listarPulgas(cod_animal) {
    $(document).ready(function () {
        $.ajax(
            {
                dataType: 'json',
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                type: 'GET',
                url: 'http://localhost/git1/pulgas',
                success: function (data) {
                    var clientes = data;
                    $.each(clientes, function (i, cliente) {
                        if (cod_animal == cliente.cod_animal) {
                            var item = "<tr><td>" + cliente.nome + "</td> <td>" + cliente.tipo + "</td> <td>" + cliente.data_aplicacao + "</td> <td>" + cliente.data_reaplicacao + "</td> <td><button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Observações</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> " + cliente.observacao + "</p></div></td><td><button class='btn btn-danger btn-sm' onclick='deletarPulga("+cliente.cod_pulga+")'>Deletar pulgas</button></td></tr>";
                            $("#pulgas").append(item);
                        }
                    });
                },
                error: function (data) {
                    alert("error");
                }
            });
    });
}

//FIM LISTAR PULGAS

//CADASTRAR PULGAS NO BANCO
function cadastrarPulga(parameter) {
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
        return cadastrar_pulga(param_value);
    }
    else {
        return undefined;
    }
}


function cadastrar_pulga(cod_animal) {
    var nome = $("#nome_pulga").val();
    var tipo = $("#tipo_pulga").val();
    var aplicacao = $("#data_aplicacao_pulga").val();
    var reaplicacao = $("#data_reaplicacao_pulga").val();
    var observacoes = $("#obs_pulga").val();
    var animal = cod_animal;

    //cod animal não pode ser igual - dono cod dono tem que ser enviado
    var markers = { "nome": nome, "tipo": tipo, "data_aplicacao": aplicacao, "data_reaplicacao": reaplicacao, "observacao": observacoes, "cod_animal": animal };
    $.ajax({
        type: "POST",
        url: 'http://localhost/git1/pulgas',
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
//FIM CADASTRAR PULGAS NO BANCO

//DELETAR PULGA NO BANCO
function deletarPulga(cod_pulga) {
    var cod = cod_pulga;
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'DELETE',
            url: 'http://localhost/git1/pulgas/' + cod,
            success: function (data) {
                sucesso_delete();
            },
            error: function (data) {
                erro_delete();
            }
        });
}
//FIM DELETAR