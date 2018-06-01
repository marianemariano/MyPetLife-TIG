//CADASTRO DE USUARIO

$("#cadastrar").click(function (e) {

    var nome = $("#nome").val();
    var email = $("#email").val();
    var senha = $("#senha").val();

    var markers = { "nome": nome, "email": email, "senha": senha };
    $.ajax({
        type: "POST",
        url: 'http://localhost/git1/pessoas',
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            success();
        },
        failure: function (errMsg) {
            error();
        }
    });

});

$("#login").click(function (e) {
    var email = $("#email").val();
    var senha = $("#senha").val();

    $.ajax(
        {
            dataType: 'json',
            headers: {
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*"
            },
            type: 'GET',
            url: 'http://localhost/git1/pessoas/' + email,
            success: function (data) {
                //$('.test').append(data.nome);
                if (senha == data.senha && email == data.email) {
                    window.location.replace("http://localhost/mypetlife/inicial.php?minhaVariavel=" + data.cod_dono);
                    var dados = 'leonardo';
                    sessionStorage.setItem('chave', dados);
                } else {
                    erro_user();
                }
            },
            error: function (data) {
                erro_login();
            }
        });
});


function success() {
    var sucesso = "<div class='alerta alert alert-success' role='alert'>Cadastro realizado com sucesso! <a href='index.php'>Clique aqui para logar</a></div>";
    $("#msg_cadastro").append(sucesso);
}

function error() {
    var error = "<div class='alerta alert alert-danger' role='alert'>Erro ao realizar o cadastro! <a href='index.php'>Clique aqui para logar</a></div>";
    $("#msg_cadastro").append(error);
}

function erro_user(){
    var error = "<div class='alerta alert alert-danger' role='alert'><center>Email ou senha inválida!</center></div>";
    $("#msg_login").append(error);
}

function erro_login(){
    var error = "<div class='alerta alert alert-danger' role='alert'>Ocorreu um erro, tente novamente mais tarde!</div>";
    $("#msg_login").append(error);
}