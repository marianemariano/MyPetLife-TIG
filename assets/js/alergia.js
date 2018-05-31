//LISTAR ALERGIA
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
        return listarAlergia(param_value);
    }
    else {
        return undefined;
    }
});

function listarAlergia(cod_animal) {
    $(document).ready(function () {
        $.ajax(
            {
                dataType: 'json',
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                type: 'GET',
                url: 'http://localhost/git1/alergia',
                success: function (data) {
                    var clientes = data;
                    // Listando cada cliente encontrado na lista
                    $.each(clientes, function (i, cliente) {
                        if (cod_animal == cliente.cod_animal) {
                            var item = "<tr><td>" + cliente.data_diagnostico + "</td> <td>" + cliente.causa + "</td> <td>" + cliente.sintomas + "</td> <td>" + cliente.tratamento + "</td> <td>" + cliente.gravidade + "<td><button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Observações</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> " + cliente.observacao + "</p></div></td></td><td><button class='btn btn-danger btn-sm' onclick='deletarAlergia("+cliente.cod_alergia+")'>Deletar alergia</button></td></tr>";
                            $("#alergia").append(item);
                        }
                    });
                },
                error: function (data) {
                    alert("error");
                }
            });
    });
}

//FIM LISTAR ALERGIA

//CADASTRAR ALERGIA NO BANCO 
function cadastrarAlergia(parameter) {
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
        return cadastrar_alergia(param_value);
    }
    else {
        return undefined;
    }
}


function cadastrar_alergia(cod_animal) {
    var data = $("#data_alergia").val();
    var causa = $("#causa_alergia").val();
    var sintomas = $("#sintomas_alergia").val();
    var tratamento = $("#tratamento_alergia").val();
    var gravidade = $("#gravidade_alergia").val();
    var observacoes = $("#obs_alergia").val();
    var animal = cod_animal;

    //cod animal não pode ser igual - dono cod dono tem que ser enviado
    var markers = { "data_diagnostico": data, "causa": causa, "sintomas": sintomas, "tratamento": tratamento, "gravidade": gravidade, "observacao": observacoes, "cod_animal": animal };
    $.ajax({
        type: "POST",
        url: 'http://localhost/git1/alergia',
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) { alert("Cadastro de alergia concluída com sucesso"); },
        failure: function (errMsg) {
            alert("Não foi possível fazer o cadastro da alergia");
        }
    });
}
//FIM CADASTRAR ALERGIA

//DELETAR ALERGIA
function deletarAlergia(cod_alergia) {
    var cod = cod_alergia;
    alert(cod);
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'DELETE',
            url: 'http://localhost/git1/alergia/' + cod,
            success: function (data) {
                alert("Higiene deletada");
            },
            error: function (data) {
                alert("error");
            }
        });
}
//FIM DELETAR ALERGIA