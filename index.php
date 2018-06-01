<!doctype html>
<html lang="PT-BR">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" integrity="sha384-WskhaSGFgHYWDcbwN70/dfYBj47jz9qbsMId/iRN3ewGhXQFZCSftd1LZCfmhktB"
        crossorigin="anonymous">

    <title>My Pet Life!</title>
</head>

<body>
    <center style="margin-top:20px;margin-bottom:20px;">
        <img src="assets/img/dog.png" class="mx-auto" style="width:90px;">
        <p>
            <span style="font-size:20px;">Entre no MyPetLife</span>
        </p>
    </center>

    <div class="card mx-auto" style="width: 20rem">
        <form style="margin-left:5%; margin-right:5%; margin-top:10px">
            <div class="form-group">
                <label for="">
                    <b style="font-size:14px;">Email</b>
                </label>
                <input type="email" id="email" class="form-control form-control-sm" placeholder="exemplo@mypetlife.com" style="border-radius:5px;">
            </div>
            <div class="form-group" style="margin-top:-5px">
                <label for="">
                    <b style="font-size:14px">Senha</b>
                </label>
                <input type="password" class="form-control form-control-sm" id="senha" style="border-radius:5px;" placeholder="sua senha">
            </div>
        </form>
        <button type="button" class="btn btn-primary btn-sm mb-3" id="login" style="margin-right:5%;margin-left:5%">Entrar </button>
        <div id="msg_login" class="ml-3 mr-3 mb-3">
            <!--MENSAGEM DE ERRO AO LOGAR-->
        </div>
    </div>
    <div class="card mx-auto" style="width: 20rem; margin-top:5px;padding-top:5px;padding-bottom:8px;">
        <center>
            <small class="form-text form-text-muted ">Novo no MyPetLife ?
                <a href="cadastro_usuario.php">Crie uma conta</a>
            </small>
        </center>
    </div>

    <nav class="nav justify-content-center" style="margin-top:70px;">
        <a href="#" class="nav-link">Termos</a>
        <a href="#" class="nav-link">Privacidade</a>
        <a href="#" class="nav-link">Entre em contato</a>
    </nav>


    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
        crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="assets/js/usuario.js"></script>
</body>

</html>