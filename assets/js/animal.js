//LISTAR ANIMAIS NA TELA
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
        return listarAnimal(param_value);
    }
    else {
        return undefined;
    }
});

function listarAnimal(codigo_dono) {
    $(document).ready(function (cod) {
        var cod = codigo_dono;
        $.ajax(
            {
                dataType: 'json',
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                type: 'GET',
                url: 'http://localhost/git1/animal',
                success: function (data) {
                    var clientes = data;
                    // Listando cada cliente encontrado na lista
                    $.each(clientes, function (i, cliente) {
                        if (codigo_dono == cliente.cod_dono) {
                            var item = "<tr><td id='nomelista'>" + cliente.nome + "</td> <td>" + cliente.tipo + "</td> <td>" + cliente.sexo + "</td> <td><button class='fudeu btn btn-primary btn-sm' onclick='selecionarAnimal(" + cliente.cod_animal + ");'>selecionar animal</button></td><td><button class='btn btn-danger btn-sm' onclick='deleteanimal(" + cliente.cod_animal + ");'>Deletar animal</button></td></tr> ";
                            $("#test").append(item);
                            var espera = $(".fudeu").val();
                            console.log(espera);

                        }
                    });
                },
                error: function (data) {
                    alert("error");
                }
            });
    });
}
// FIM LISTAR ANIMAL


//CADASTRAR ANIMAL NO BANCO DE DADOS
function cadastraranimal(parameter) {
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
        return cadastrar_animal(param_value);
    }
    else {
        return undefined;
    }
}

function cadastrar_animal(cod_dono) {
    var nome = $("#nome").val();
    var tipo = $("#tipo").val();
    var sexo = $("#sexo").val();
    var nascimento = $("#nascimento").val();
    var raca = $("#raca").val();
    var cor = $("#cor").val();
    var dono = cod_dono;

    //cod animal não pode ser igual - dono cod dono tem que ser enviado
    var markers = { "nome": nome, "sexo": sexo, "tipo": tipo, "nascimento": nascimento, "raca": raca, "cor": cor, "cod_dono": dono };
    $.ajax({
        type: "POST",
        url: 'http://localhost/git1/animal',
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) { alert("animal cadastrado com sucesso"); },
        failure: function (errMsg) {
            alert("Não foi possível cadastrar um novo animal!");
        }
    });
}

// FIM CADASTRAR ANIMAL NO BANCO

//DELETAR ANIMAIS NO BANCO
function deleteanimal(cod_animal) {
    var cod = cod_animal;
    alert(cod);
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'DELETE',
            url: 'http://localhost/git1/animal/' + cod,
            success: function (data) {
                alert("animal deletado");
            },
            error: function (data) {
                alert("error");
            }
        });
}
//FIM DELETAR ANIMAL


//SELECIONAR ANIMAL

function selecionarAnimal(cod_dono){
    window.location.replace("http://localhost/mypetlife/cve.php?minhaVariavel="+cod_dono);
}
