//LISTAR CONSULTAS NA TELA
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
        return listarConsulta(param_value);
    }
    else {
        return undefined;
    }
});

function listarConsulta(cod_animal) {
    $(document).ready(function () {
        $.ajax(
            {
                dataType: 'json',
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                type: 'GET',
                url: 'http://localhost/git1/consulta',
                success: function (data) {
                    var clientes = data;
                    // Listando cada cliente encontrado na lista
                    $.each(clientes, function (i, cliente) {
                        if (cod_animal == cliente.cod_animal) {
                            var item = "<tr><td>" + cliente.motivo + "</td><td><button type='button' class='btn btn-primary dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Diagnóstico</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> " + cliente.diagnostico + "</p></div></td> <td>" + cliente.data_ida + "</td> <td>" + cliente.data_volta + "</td> <td>" + cliente.valor + "<td><button type='button' class='btn btn-primary dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Observações</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> " + cliente.observacao + "</p></div></td> <td><button class='btn btn-danger' onclick='deletarConsulta(" + cliente.cod_consulta + ")'>Deletar</button></td></tr>";
                            $("#informacoes").append(item);
                        }
                    });
                },
                error: function (data) {
                    alert("Não foi possível carregar as consultas");
                }
            });
    });
}
//FIM LISTAR CONSULTAS NA TELA


//CADASTRAR CONSULTAS NA TELA
function cadastrarConsulta(parameter) {
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
        return cadastrar_consulta(param_value);
    }
    else {
        return undefined;
    }
}

function cadastrar_consulta(cod_animal) {
    var motivo = $("#motivo_consulta").val();
    var data_ida = $("#data_ida_consulta").val();
    var data_volta = $("#data_volta_consulta").val();
    var valor = $("#valor_consulta").val();
    var diagnostico = $("#diagnostico_consulta").val();
    var observacao = $("#obs_consulta").val();
    var animal = cod_animal;

    //cod animal não pode ser igual - dono cod dono tem que ser enviado
    var markers = { "motivo": motivo, "data_ida": data_ida, "data_volta": data_volta, "valor": valor, "diagnostico": diagnostico, "observacao": observacao, "cod_animal": animal };
    $.ajax({
        type: "POST",
        url: 'http://localhost/git1/consulta',
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var sucesso = "<div class='alert alert-success' role='alert'>Cadastro realizado com sucesso. <a href='javascript:void(0)' onclick='refresh();'>Clique aqui para atualizar a tela</a></div>";
            $("#msg_consulta").append(sucesso);
        },
        failure: function (errMsg) {
            var error = "<div class='alert alert-danger' role='alert'>Não foi possível cadastrar uma nova consulta</div>";
            $("#msg_consulta").append(error);
        }
    });
}
// FIM CADASTRAR CONSULTA


//DELETAR CONSULTAS NO BANCO
function deletarConsulta(cod_consulta) {
    var cod = cod_consulta;
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'DELETE',
            url: 'http://localhost/git1/consulta/' + cod,
            success: function (data) {
                var sucesso = "<div class='alert alert-success' role='alert'>Deletado com sucesso! <a href='javascript:void(0)' onclick='refresh();'>Clique aqui para atualizar a tela</a></div>";
                $("#delete_consulta").append(sucesso);
            },
            error: function (data) {
                var error = "<div class='alert alert-danger' role='alert'>Não foi possível deletar este item!</div>";
                $("#delete_consulta").append(error);
            }
        });
}
//FIM DELETAR CONSULTA


//LISTAR VACINAS
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
        return listarVacinas(param_value);
    }
    else {
        return undefined;
    }
});


function listarVacinas(cod_animal) {
    $(document).ready(function () {
        $.ajax(
            {
                dataType: 'json',
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                type: 'GET',
                url: 'http://localhost/git1/vacina',
                success: function (data) {
                    var clientes = data;
                    // Listando cada cliente encontrado na lista
                    $.each(clientes, function (i, cliente) {
                        if (cod_animal == cliente.cod_animal) {
                            var item = "<tr><td>" + cliente.nome + "</td> <td>" + cliente.data_aplicacao + "</td> <td>" + cliente.data_reaplicacao + "</td> </td> <td><button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Observações</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> " + cliente.observacao + "</p></div></td> </td><td><button class='btn btn-danger btn-sm' onclick='deletarVacina(" + cliente.cod_vacina + ");'>Deletar</button></td></tr>";
                            $("#vacina").append(item);
                        }
                    });
                },
                error: function (data) {
                    alert("error");
                }
            });
    });
}
//FIM LISTAR VACINAS

//CADASTRAR VACINA NO BANCO
function cadastrarVacina(parameter) {
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
        return cadastrar_vacina(param_value);
    }
    else {
        return undefined;
    }
}

function cadastrar_vacina(cod_animal) {
    var nome = $("#nome_vacina").val();
    var data_aplicacao = $("#data_aplicacao_vacina").val();
    var data_reaplicacao = $("#data_reaplicacao_vacina").val();
    var observacao = $("#obs_vacina").val();
    var animal = cod_animal;

    //cod animal não pode ser igual - dono cod dono tem que ser enviado
    var markers = { "nome": nome, "data_aplicacao": data_aplicacao, "data_reaplicacao": data_reaplicacao, "observacao": observacao, "cod_animal": animal };
    $.ajax({
        type: "POST",
        url: 'http://localhost/git1/vacina',
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var sucesso = "<div class='alert alert-success' role='alert'>Cadastro realizado com sucesso. <a href='javascript:void(0)' onclick='refresh();'>Clique aqui para atualizar a tela</a></div>";
            $("#msg_vacina").append(sucesso);
        },
        failure: function (errMsg) {
            var error = "<div class='alert alert-success' role='alert'>Erro ao cadastrar</div>";
            $("#msg_vacina").append(error);
        }
    });
}
//FIM CADASTRAR VACINA


//DELETAR VACINA
function deletarVacina(cod_consulta) {
    var cod = cod_consulta;
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'DELETE',
            url: 'http://localhost/git1/vacina/' + cod,
            success: function (data) {
                var sucesso = "<div class='alert alert-success' role='alert'>Deletado com sucesso! <a href='javascript:void(0)' onclick='refresh();'>Clique aqui para atualizar a tela</a></div>";
                $("#delete_vacina").append(sucesso);
            },
            error: function (data) {
                var error = "<div class='alert alert-danger' role='alert'>Não foi possível deletar este item!</div>";
                $("#delete_vacina").append(error);
            }
        });
}
//FIM DELETAR VACINA



//LISTAR EXAMES
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
        return listarExames(param_value);
    }
    else {
        return undefined;
    }
});


function listarExames(cod_animal) {
    $(document).ready(function () {
        $.ajax(
            {
                dataType: 'json',
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                type: 'GET',
                url: 'http://localhost/git1/exames',
                success: function (data) {
                    var clientes = data;
                    // Listando cada cliente encontrado na lista
                    $.each(clientes, function (i, cliente) {
                        if (cod_animal == cliente.cod_animal) {
                            var item = "<tr><td>" + cliente.nome + "</td> <td>" + cliente.data + "</td> <td>" + cliente.local + "</td> <td><button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Diagnostico</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> " + cliente.diagnostico + "</p></div></td> <td><button type='button' class='btn btn-primary btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Observações</button> <div class='dropdown-menu p-4 text-muted' style='max-width: 200px;'><p> " + cliente.observacao + "</p></div></td><td><button class='btn btn-danger btn-sm' onclick='deletarExame(" + cliente.cod_exame + ")'>Deletar animal</button></td></tr>";
                            $("#exames").append(item);
                        }
                    });
                },
                error: function (data) {
                    alert("error");
                }
            });
    });
}
//FIM LISTAR EXAMES



//CADASTRAR EXAMES NO BANCO
function cadastrarExame(parameter) {
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
        return cadastrar_exames(param_value);
    }
    else {
        return undefined;
    }
}

function cadastrar_exames(cod_animal) {
    var nome = $("#nome_exame").val();
    var data = $("#data_exame").val();
    var local = $("#local_exame").val();
    var diagnostico = $("#diagnostico_exame").val();
    var observacao = $("#obs_exame").val();
    var animal = cod_animal;

    //cod animal não pode ser igual - dono cod dono tem que ser enviado
    var markers = { "nome": nome, "data": data, "local": local, "diagnostico": diagnostico, "observacao": observacao, "cod_animal": animal };
    $.ajax({
        type: "POST",
        url: 'http://localhost/git1/exames',
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            var sucesso = "<div class='alert alert-success' role='alert'>Cadastrado com sucesso! <a href='javascript:void(0)' onclick='refresh();'>Clique aqui para atualizar a tela</a></div>";
            $("#msg_exame").append(sucesso);
        },
        failure: function (errMsg) {
            var error = "<div class='alert alert-danger' role='alert'>Não foi possível realizar o cadastro!</div>";
            $("#msg_exame").append(error);
        }
    });
}
//FIM CADASTRAR EXAME


//DELETAR EXAME
function deletarExame(cod_consulta) {
    var cod = cod_consulta;
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'DELETE',
            url: 'http://localhost/git1/exames/' + cod,
            success: function (data) {
                var sucesso = "<div class='alert alert-success' role='alert'>Deletado com sucesso! <a href='javascript:void(0)' onclick='refresh();'>Clique aqui para atualizar a tela</a></div>";
                $("#delete_exame").append(sucesso);
            },
            error: function (data) {
                var error = "<div class='alert alert-danger' role='alert'>Não foi possível deletar este item!</div>";
                $("#delete_exame").append(error);
            }
        });
}
//FIM DELETAR EXAME