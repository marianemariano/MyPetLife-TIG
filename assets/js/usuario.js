//CADASTRO DE USUARIO

$("#cadastrar").click(function (e) {

    var nome = $("#nome").val();
    var email = $("#email").val();
    var senha = $("#senha").val();

    var markers = {"nome": nome, "email":email, "senha":senha };
    $.ajax({
        type: "POST",
        url: 'http://localhost/git1/pessoas',
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify(markers),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: success(),
        failure: function (errMsg) {
            alert(errMsg);
        }
    });

});

function success(){
    alert('Usuário cadastrado com sucesso!');
    window.location.replace("http://localhost/mypetlife");
}


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
            url: 'http://localhost/git1/pessoas/'+ email,
            success: function (data) {
                //$('.test').append(data.nome);
                if(senha == data.senha && email == data.email){
                    window.location.replace("http://localhost/mypetlife/inicial.html?minhaVariavel="+data.cod_dono);
                    var dados = 'leonardo';
                    sessionStorage.setItem('chave', dados );
                } else {
                    alert('Email ou senha inválida!');
                }
            },
            error: function (data) {
                alert('Ocorreu algum erro. Tente logar novamente mais tarde!');
            }
        });
});