//LISTAR INFORMAÇÕES PERFIL
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
        return listarPerfil(param_value);
    }
    else {
        return undefined;
    }
});

function listarPerfil(cod_dono) {
    $(document).ready(function () {
        $.ajax(
            {
                dataType: 'json',
                headers: {
                    Accept: "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                type: 'GET',
                url: 'http://localhost/git1/pessoas',
                success: function (data) {
                    var clientes = data;
                    // Listando cada cliente encontrado na lista
                    $.each(clientes, function (i, cliente) {
                        if (cod_dono == cliente.cod_dono) {
                            var item = "<form class='form-perfil'><div class='form-group'><label for='nome'>Nome completo</label><input type='text' class='form-control' id='nome' value='"+cliente.nome+"'></div><div class='form-group'><label for='email'>Endereço de email</label><input type='text' class='form-control' id='email' value='"+cliente.email+"'></div><div class='form-group'><label for='senha'>Senha</label><input type='password' class='form-control' id='senha' value='"+cliente.senha+"'></div><div class='form-row form-group'></div></form><div class='container'><div class='row'><div class='col-md-6'><button class='btn btn-primary' id='editarPerfil' onclick='editarPerfil("+cliente.cod_dono+")'>Salvar alterações</button></div><div class='col-md-6'><button class='btn btn-danger' id='excluirPerfil' onclick='deletarPerfil("+cliente.cod_dono+")'>Excluir o seu perfil</button></div></div></div><small>Para alterar as informações do seu perfil basta apenas editar os campos</small>";
                            $("#form_perfil").append(item);
                        }
                    });
                },
                error: function (data) {
                    alert("error");
                }
            });
    });
}
//FIM LISTAR INFORMAÇÕES

//ALTERAR PERFIL
function editarPerfil(cod_dono) {
    var nome = $("#nome");
    var email = $("#email");
    var senha = $("#senha");
    var dono = cod_dono;

    //cod animal não pode ser igual - dono cod dono tem que ser enviado
    var markers = { "nome": nome.val(), "email": email.val(), "senha": senha.val(), "cod_dono": dono };
    $.ajax({
        type: "PUT",
        url: 'http://localhost/git1/pessoas/'+dono,
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) { 
            alert('alterado com sucesso');
        },
        failure: function (errMsg) {
            alert(errMsg);
        }
    });
}
//FIM ALTERAR PERFIL




//DELETAR PERFIL
function deletarPerfil(cod_dono) {
    var cod = cod_dono;
    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'DELETE',
            url: 'http://localhost/git1/pessoas/' + cod,
            success: function (data) {
                alert('Seu perfil foi deletado com sucesso!');
                window.location.replace("http://localhost/mypetlife");
            },
            error: function (data) {
                erro_delete();
            }
        });
}
//FIM DELETAR PERFIL