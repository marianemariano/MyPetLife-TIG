//LISTAR HIGIENE
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
        return listarHigiene(param_value);
    }
    else {
        return undefined;
    }
});

function listarHigiene(cod_animal) {
    $(document).ready(function () {
        $.ajax(
            {
                dataType: 'json',
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                type: 'GET',
                url: 'http://localhost/git1/higiene',
                success: function (data) {
                    var clientes = data;
                    // Listando cada cliente encontrado na lista
                    $.each(clientes, function (i, cliente) {
                        if (cod_animal == cliente.cod_animal) {
                            var item = "<tr><td>" + cliente.data + "</td> <td>" + cliente.local + "</td> <td>" + cliente.valor + "</td> <td><button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Observações</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> " + cliente.observacao + "</p></div></td></td><td><button class='btn btn-danger btn-sm' onclick='deletarHigiene("+cliente.cod_higiene+")'>Deletar</button></td></tr>";
                            $("#higiene").append(item);
                        }
                    });
                },
                error: function (data) {
                    alert("error");
                }
            });
    });
}
//FIM LISTAR HIGIENE


//INSERIR HIGIENE NO BANCO DE DADOS
function cadastrarHigiene(parameter) {
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
        return cadastrar_higiene(param_value);
    }
    else {
        return undefined;
    }
}

function cadastrar_higiene(cod_animal) {
    var data = $("#data_higiene").val();
    var local = $("#local_higiene").val();
    var valor = $("#valor_higiene").val();
    var observacao = $("#obs_higiene").val();
    var animal = cod_animal;

    //cod animal não pode ser igual - dono cod dono tem que ser enviado
    var markers = { "data": data, "local": local, "valor": valor, "observacao": observacao, "cod_animal": animal };
    $.ajax({
        type: "POST",
        url: 'http://localhost/git1/higiene',
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) { alert("Cadastro de higiene concluída com sucesso"); },
        failure: function (errMsg) {
            alert("Não foi possível fazer o cadastro de higiene");
        }
    });
}
//FIM INSERIR HIGIENE NO BANCO DE DADOS



//DELETAR HIGIENE NO BANCO
function deletarHigiene(cod_higiene) {
    var cod = cod_higiene;
    alert(cod);
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'DELETE',
            url: 'http://localhost/git1/higiene/' + cod,
            success: function (data) {
                alert("Higiene deletada");
            },
            error: function (data) {
                alert("error");
            }
        });
}
//FIM DELETAR HIGIENE