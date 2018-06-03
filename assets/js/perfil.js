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
                            var item = "<div class='form-group' id='nome'><label for='nome'>Nome completo</label><input type='text' class='form-control' id='nome' value='"+cliente.nome+"'></div><div class='form-group' id='email'><label for='email'>Endereço de email</label><input type='text' class='form-control' id='email' value='"+cliente.email+"'></div><div class='form-group' id='senha'><label for='senha'>Senha</label><input type='password' class='form-control' id='senha' value='"+cliente.senha+"'></div><div class='form-row form-group'></div><div class='form-row form-group'><div class='col'><button class='btn btn-primary' id='editarPerfil'>Salvar alterações</button></div><div class='col'><button class='btn btn-danger' id='excluirPerfil' onclick='deletarPerfil("+cliente.cod_dono+")'>Excluir o seu perfil</button></div></div><small>Para alterar as informações do seu perfil basta apenas editar os campos</small>";
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
            url: 'http://localhost/git1/pessoa/' + cod,
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