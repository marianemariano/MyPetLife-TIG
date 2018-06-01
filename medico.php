<!doctype html>
<html lang="pt-br">

<?php include "includes/head.php"; ?>

<body style="background:#1976d2">
    <?php include "includes/navbar.php"; ?>
    <center>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Local</th>
                    <th scope="col">CRMV</th>
                    <th scope="col">Email</th>
                    <th scope="col">Telefone</th>
                    <th scope="col">Deletar</th>
                </tr>
            </thead>
            <tbody id="medico">

            </tbody>
        </table>
        <div id="msg_delete">

        </div>
        <button class="btn btn-success btn-sm ml-2 mb-5" data-toggle="collapse" data-target="#collapseExample">Adicionar novo médico</button>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                <div class="container">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-4">
                                <label for="inputEmail4">Nome</label>
                                <input type="text" class="form-control" id="nome_medico">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputPassword4">Local</label>
                                <input type="text" class="form-control" id="local_medico">
                            </div>
                            <div class="form-group col-md-4">
                                <label for="inputPassword4">CRMV</label>
                                <input type="text" class="form-control" id="crmv_medico">
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="text" class="form-control" id="email_medico">
                            </div>
                            <div class="form-group col-md-6">
                                <label for="inputPassword4">Telefone</label>
                                <input type="text" class="form-control" id="telefone_medico">
                            </div>
                        </div>
                    </form>
                    <div id="msg_cadastro">

                    </div>
                    <button type="submit" class="btn btn-primary" id="cadastrarmedico" onclick="cadastrarMedico('minhaVariavel')">Cadastrar</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    </center>
    <center>
        <p style="color:white">&copy Todos os direitos reservados. MyPetLife 2018</p>
    </center>
    <ul id="listaClientes"></ul>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="assets/js/medico.js"></script>
    <script src="assets/js/navbar.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
        crossorigin="anonymous"></script>



</body>

</html>