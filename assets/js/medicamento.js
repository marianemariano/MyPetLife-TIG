//LISTAR MEDICAMENTO
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
        return listarMedicamento(param_value);
    }
    else {
        return undefined;
    }
});

function listarMedicamento(cod_animal) {
    $(document).ready(function () {
        $.ajax(
            {
                dataType: 'json',
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                type: 'GET',
                url: 'http://localhost/git1/medicamento',
                success: function (data) {
                    var clientes = data;
                    // Listando cada cliente encontrado na lista
                    $.each(clientes, function (i, cliente) {
                        if (cod_animal == cliente.cod_animal) {
                            var item = "<tr><td>" + cliente.nome + "</td> <td>" + cliente.dosagem + "</td> <td>" + cliente.data_inicio + "</td> <td>" + cliente.data_fim + "</td> <td>" + cliente.repeticoes + "</td> <td>" + cliente.instrucao + "</td> <td>" + cliente.condicao + "</td> <td><button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Observações</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> " + cliente.observacao + "</p></div></td></td><td><button class='btn btn-danger btn-sm' onclick='deletarHigiene("+cliente.cod_medicamento+")'>Deletar</button></td></tr>";
                            $("#medicamento").append(item);
                        }
                    });
                },
                error: function (data) {
                    alert("error");
                }
            });
    });
}
//FIM LISTAR MEDICAMENTO

//INSERIR MEDICAMENTO NO BANCO DE DADOS
function cadastrarMedicamento(parameter) {
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
        return cadastrar_medicamento(param_value);
    }
    else {
        return undefined;
    }
}


function cadastrar_medicamento(cod_animal) {
    var nome = $("#nome_medicamento").val();
    var dosagem = $("#dosagem_medicamento").val();
    var data_inicio = $("#data_inicio_medicamento").val();
    var data_fim = $("#data_fim_medicamento").val();
    var repeticoes = $("#repeticoes_medicamento").val();
    var instrucoes = $("#instrucoes_medicamento").val();
    var condicoes = $("#condicoes_medicamento").val();
    var observacoes = $("#obs_medicamento").val();
    var animal = cod_animal;

    //cod animal não pode ser igual - dono cod dono tem que ser enviado
    var markers = { "nome": nome, "dosagem": dosagem, "data_inicio": data_inicio, "data_fim": data_fim, "repeticoes": repeticoes, "instrucao": instrucoes, "condicao": condicoes, "observacao": observacoes, "cod_animal": animal };
    $.ajax({
        type: "POST",
        url: 'http://localhost/git1/medicamento',
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) { alert("Cadastro de medicamento concluído com sucesso"); },
        failure: function (errMsg) {
            alert("Não foi possível fazer o cadastro do medicamento");
        }
    });
}
//FIM INSERIR MEDICAMENTO NO BANCO


//DELETAR MEDICAMENTO NO BANCO
function deletarHigiene(cod_medicamento) {
    var cod = cod_medicamento;
    alert(cod);
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'DELETE',
            url: 'http://localhost/git1/medicamento/' + cod,
            success: function (data) {
                alert("Higiene deletada");
            },
            error: function (data) {
                alert("error");
            }
        });
}
//FIM DELETAR MEDICAMENTO