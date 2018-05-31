<!doctype html>
<html lang="pt-br">

<?php include "includes/head.php"; ?>

<body style="background:#1976d2">
    <?php include "includes/navbar.php"; ?>
    <center>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nome da cirurgia</th>
                    <th scope="col">Data</th>
                    <th scope="col">Complicações</th>
                    <th scope="col">Local</th>
                    <th scope="col">Médico</th>
                    <th scope="col">Valor</th>
                    <th scope="col">Cuidados</th>
                    <th scope="col">Observações</th>
                    <th scope="col">Deletar</th>
                </tr>
            </thead>
            <tbody id="cirurgia">

            </tbody>
        </table>
        <button class="btn btn-success btn-sm ml-2 mb-5" data-toggle="collapse" data-target="#collapseExample">Adicionar nova cirurgia</button>
        <div class="collapse" id="collapseExample">
            <div class="card card-body">
                <div class="container">
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-3">
                                <label for="inputEmail4">Nome da cirurgia</label>
                                <input type="text" class="form-control" id="nome_cirurgia">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputPassword4">Data da cirurgia</label>
                                <input type="date" class="form-control" id="data_cirurgia">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputEmail4">Complicações</label>
                                <input type="text" class="form-control" id="complicacoes_cirurgia">
                            </div>
                            <div class="form-group col-md-3">
                                <label for="inputPassword4">Local</label>
                                <input type="text" class="form-control" id="local_cirurgia">
                            </div>
                        </div>
                        <div class="form-row">
                        <div class="form-group col-md-3">
                            <label for="inputEmail4">Médico</label>
                            <input type="text" class="form-control" id="medico_cirurgia">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputPassword4">Valor</label>
                            <input type="number" class="form-control" id="valor_cicurgia">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputEmail4">Cuidados</label>
                            <input type="text" class="form-control" id="cuidados_cirurgia">
                        </div>
                        <div class="form-group col-md-3">
                            <label for="inputPassword4">Observações</label>
                            <input type="text" class="form-control" id="obs_cirurgia">
                        </div>
                    </div>
                    </form>
                    <button type="submit" class="btn btn-primary" id="cadastrarCirurgia" onclick="cadastrarCirurgia('minhaVariavel')">Cadastrar</button>
                </div>
            </div>
        </div>
        </div>
        </div>
    </center>
    <center>
        <p style="color:white">&copy - Todos os direitos reservados. MyPetLife 2018</p>
    </center>
    <ul id="listaClientes"></ul>

    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
        crossorigin="anonymous"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="assets/js/cirurgia.js"></script>
    <script src="assets/js/navbar.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
        crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js" integrity="sha384-smHYKdLADwkXOn1EmN1qk/HfnUcbVRZyYmZ4qpPea6sjB/pTJ0euyQp0Mk8ck+5T"
        crossorigin="anonymous"></script>



</body>

</html>